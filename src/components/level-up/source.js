import React, { useState }  from "react"
import {connect} from "react-redux"
import {levelUpChoiceAdd, levelUpChoiceRemove} from "../../state"
import {fromMeta} from "../story-tags/stat"
import './source.css'

function Source({dispatch, source, training, actions, choices}) {

    const totalAvailable = actions - Object.keys(choices).length
    const maxActions = Math.min(totalAvailable, training.max)
    const [available,setAvailable] = useState(maxActions)


    function toggle(id,activity ) {

        if(id in choices){
            dispatch( levelUpChoiceRemove(id) )
            setAvailable(available + 1)

        }
        else if(available > 0){
            dispatch( levelUpChoiceAdd(id, activity) )
            setAvailable(available - 1)
        }
    }

    function Activity ({index, activity}){
        const id = `${source}-${index}`
        const selected= (id in choices)
        const disabled= Math.min(totalAvailable, available)<=0
        const cls = selected?"selected":(disabled?"disabled":"")

        return <div
            className={"activity "+cls}
            onClick={()=>toggle(id,activity)}
            onKeyDown={()=>{}}
            role="button"
            tabIndex={index}>
                <span className={"label"}>{activity.label}</span>

            {activity.effects.map((effect, k) =>
                <span key={k} className={"effects"}>{fromMeta(effect)}</span>
            )}
        </div>
    }


    return <div className={"training-source"}>
        <h3>{training.title} ({Math.min(totalAvailable,available)})</h3>
        <div className={"activities"}>
        {
            training.activities.map((activity, index) => {

                return <Activity key={index} index={index}  activity={activity}  />
            })
        }
        </div>
    </div>
}


export default connect(state => ({
    actions: state.player.actions,
    choices: state.game.levelUpChoices
}), null)(Source)

