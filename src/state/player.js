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

const RESET_PLAYER = "Reset Game";
const INCREASE_STAT = "Increase Stat";
const CHANGE_NAME = "New Name";



export function increaseStat(stat, value=1){
    return  {
        type: INCREASE_STAT,
        stat,
        value,
        effect_text: (value>0?"+":"-")+value+" "+stat.substring(0,3).toUpperCase()
    }
}

export function changeName(value){
    return  {type: CHANGE_NAME, value, effect_text: value}
}

export function resetPlayer(){
    return  {type: RESET_PLAYER}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_STAT:
            const updatedState = { ...state} //copy last state
            updatedState[action.stat]+= action.value
            return updatedState

        case CHANGE_NAME:
            return { ...state, name: action.value }

        case RESET_PLAYER:
            return initialState

        default:
            return state
    }
}
