const ACTIONS = require('./actions')

const initialState = {
    name: "",
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
