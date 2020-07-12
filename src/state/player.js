const ACTIONS = require('./actions')

const init_relationship = 50
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
    skills: {},
    relationships: {}
}


export default (player = initialState, action) => {
    const updatedPlayer = { ...player}
    switch (action.type) {
        case ACTIONS.PLAYER_INCREASE_STAT:
            updatedPlayer[action.stat] += action.value
            return updatedPlayer

        case ACTIONS.PLAYER_INCREASE_SKILL:
            updatedPlayer.skills = { ...player.skills}
            if (!updatedPlayer.skills[action.stat]) {
                updatedPlayer.skills[action.stat] = action.value
            }
            else {
                updatedPlayer.skills[action.stat] += action.value
            }
            return updatedPlayer


        case ACTIONS.PLAYER_INCREASE_RELATIONSHIP:
            updatedPlayer.relationships = { ...player.relationships}
            if (!updatedPlayer.relationships[action.stat]) {
                updatedPlayer.relationships[action.stat] = init_relationship + action.value
            }
            else {
                updatedPlayer.relationships[action.stat] += action.value
            }
            return updatedPlayer


        case ACTIONS.PLAYER_CHANGE_NAME:
            return { ...player, name: action.value }

        case ACTIONS.GAME_NEXT_SEASON:
            return { ...player, age: player.age + .25 }

        case ACTIONS.GAME_RESET:
            return initialState

        default:
            return player
    }
}
