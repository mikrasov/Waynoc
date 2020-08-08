import _ from "lodash"
import {ACTIONS} from "./actions"
import {firstEvent, nextEvent} from "./story_manager"
import {readyStats} from "./stats_manager"

const initialState = {
    dataLoaded: false,
    activeEvent: null,
    stats: {}
}


export default (state = initialState, action) => {

    switch (action.type) {

        case ACTIONS.GAME_RESET:
            return initialState

        case ACTIONS.LOAD_DATA: {
            console.log(action)
            const {stats, stats_meta} = readyStats(action.statsMeta)

            return firstEvent({
                ...state,
                dataLoaded: true,
                stats,
                stats_meta,
                events: _.keyBy(action.events, 'filename')
            })
        }

        case ACTIONS.EVENT_NEXT:
            return  nextEvent(state)

        default:
            return state
    }
}




