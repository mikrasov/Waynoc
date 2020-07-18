import {ACTIONS} from "./"
import {modCharacteristic} from "../util/characteristics"

const initialState = {
    name: "",
    age: 0,
    intelligence: 0,
    perception: 0,
    strength: 0,
    stamina: 0,
    charisma: 0,
    communication: 0,
    dexterity: 0,
    speed: 0,
    skills: {},
    relationships: {
        mom: 80,
        dad: 80
    }
}


export default (player = initialState, action) => {

    switch (action.type) {

        case ACTIONS.PLAYER_MOD:
            return modCharacteristic(player, action.path, action.value)

        case ACTIONS.PLAYER_CHANGE_NAME:
            return { ...player, name: action.value }

        case ACTIONS.NEXT_SEASON:
            return { ...player, age: player.age + .25 }

        case ACTIONS.GAME_RESET:
            return initialState

        default:
            return player
    }
}
