import {ACTIONS} from '.'

const initialState = {
    name: "Baby",
    age: 0,
    intelligence: -10,
    perception: -10,
    strength: -10,
    stamina: -10,
    presence: -10,
    communication: -10,
    dexterity: -10,
    quickness: -10,

}


export const STAT = {
    INTELLIGENCE: "intelligence",
    PERCEPTION: "perception",
    STRENGTH: "strength",
    STAMINA: "stamina",
    PRESENCE: "presence",
    COMMUNICATION: "communication",
    DEXTERITY: "dexterity",
    QUICKNESS: "quickness"

}




export function increaseStat(stat, value=1){
    return  {
        type: ACTIONS.PLAYER_INCREASE_STAT,
        stat,
        value,
        effect_text: (value>0?"+":"-")+value+" "+stat.substring(0,3).toUpperCase()
    }
}

export function changeName(value){
    return  {type: ACTIONS.PLAYER_CHANGE_NAME, value, effect_text: value}
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.PLAYER_INCREASE_STAT:
            const updatedState = { ...state} //copy last state
            updatedState[action.stat]+= action.value
            return updatedState

        case ACTIONS.PLAYER_CHANGE_NAME:
            return { ...state, name: action.value }

        case ACTIONS.GAME_NEXT_SEASON:
            return { ...state, age: state.age + .25 }


        case ACTIONS.GAME_RESET:
            return initialState

        default:
            return state
    }
}
