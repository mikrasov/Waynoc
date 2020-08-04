export const ACTIONS = {
    GAME_RESET: "game/reset",
}

export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }

const initialState = {
    activeEvent: null,
    player:{
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
            constitution: 0,
            charisma: 0,
            dexterity: 0,
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
        flags: {},
    }
}


export default (state = initialState, action) => {

    switch (action.type) {

        case ACTIONS.GAME_RESET:
            return initialState


        default:
            return state
    }
}




