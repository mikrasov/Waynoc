import {ACTIONS} from "./"
import {modCharacteristic} from "../util/characteristics"

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
