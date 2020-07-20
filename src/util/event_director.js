import rehypeReact from "rehype-react"
import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import {nextGameSeason, setActiveEvent, gameOver} from "../state"
import {resolveEvent, resolveChoice} from "../transformer"
import Info from "../components/info"

export default class EventDirector {

    constructor(dispatch, gameState, playerState) {
        this.dispatch = dispatch
        this.gameState = gameState
        this.playerState = playerState

        const data  = useStaticQuery( graphql`{
            events: allMarkdownRemark(
                filter: { 
                    fields: {type: {eq: "events"}}
                },
                sort: {
                  fields: [fields___age]
                  order: ASC
                }
            ){
                nodes {
                    id
                    htmlAst
                    fileAbsolutePath
                    frontmatter {
                      title
                    }        
                    fields {
                      event_category
                      age
                    }
                }
            }
        }`)
        this.events = data.events.nodes

        //Can use this to map html tags to ReactComponents
        this.generateHtml = new rehypeReact({
            createElement: React.createElement,
            components: { info: Info,   },
        }).Compiler

    }

    rollDice() {
        return (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))
    }


    nextSeason() {
        const nextEvent = this.events[this.playerState.age / 0.25]
        if (nextEvent) {
            const event = {
                id: nextEvent.id,
                path: nextEvent.fileAbsolutePath,
                ...nextEvent.fields,
                ...nextEvent.frontmatter,
                ...resolveEvent(this.playerState, nextEvent.htmlAst, this.generateHtml)
            }

            this.dispatch(setActiveEvent(event))
            event.effects.forEach((e) => {
                this.dispatch(e)
            })

            this.dispatch(nextGameSeason())

        } else {
            this.dispatch(gameOver())
        }
    }



    makeChoice(choice) {
        const diceRoll = this.rollDice()
        console.log("Rolled a " + diceRoll)
        const event = {
            ...this.gameState.activeEvent,
            ...resolveChoice(this.playerState, this.gameState.activeEvent, choice, diceRoll, this.generateHtml)
        }
        this.dispatch(setActiveEvent(event))
        event.effects.forEach((e) => {
            this.dispatch(e)
        })
    }

}
