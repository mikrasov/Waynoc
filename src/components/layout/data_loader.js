import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {connect} from "react-redux"
import {loadData} from "../../state/actions"
import _ from "lodash"
function processMeta(loadedMeta){

    const statsMeta = {}

    //Take meta and copy it to children
    loadedMeta.forEach( stat => {
        const rootStat = {
            ...stat,
            isBinary: (stat.max - stat.min === 1),
            leaf: !stat.sub
        }
        delete rootStat.sub //get rid of children

        statsMeta[rootStat.key] = rootStat

        if(stat.sub) stat.sub.forEach(subStat =>{
            statsMeta[rootStat.key+"."+subStat.key] = {
                ...rootStat,
                ...subStat,
                parent: rootStat.key,
                leaf: true
            }
        })
    })

    //Set stats to initial values
    const initStats = {}
    for (const [statPath, statMeta] of Object.entries(statsMeta)) {
        if(statMeta.leaf)
            _.set(initStats, statPath, statMeta.initial)
    }



    return {initStats, statsMeta}
}

function DataLoader ({dataLoaded, dispatch}) {
    const data = useStaticQuery(graphql`{
          events: allMarkdownStorybook {
            nodes {
              id
              next
              filename
              title
              hast
            }
          },
          meta:  allStatsJson {
            nodes {
              key
              initial
              min
              max
              step
              title
              description
              isNumeric
              sub {
                key
                title
                description
              }
            }
          }
         
        }`)

    const {initStats, statsMeta} = processMeta(data.meta.nodes)


    if (!dataLoaded) dispatch(loadData(data.events.nodes,  initStats, statsMeta ))

    return <></>
}

export default connect(state => ({dataLoaded: state.dataLoaded}), null)(DataLoader)

