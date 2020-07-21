import {ACTIONS} from "./"

const initialState = {
    name: "",
    age: 0,
    actions: 0,
    gender: "",
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
            return action.modVal(player, action.value)

        case ACTIONS.PLAYER_SET:
            return action.setVal(player, action.value)

        case ACTIONS.NEXT_SEASON:
            let actions = 0
            //if(player.age >= 0){actions = 3}
            return { ...player, age: player.age + .25, actions: actions }

        case ACTIONS.GAME_RESET:
            return initialState

        default:
            return player
    }
}
