import {ACTIONS} from "./"
import {modCharacteristic} from "../util/characteristics"

const initialState = {
    name: "",
    age: 0,
    actions: 0,
    money: 0,
    morale: 50,
    stats: {
        intelligence: 0,
        perception: 0,
        strength: 0,
        stamina: 0,
        charisma: 0,
        communication: 0,
        dexterity: 0,
        speed: 0,
    },
    relationships: {
        mom: {
            closeness: 80
        },
        dad: {
            closeness: 80
        }
    },
    skills: {},
    items: {},
    tags: {},
    jobs: {},
    flags: {}
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
