export const ACTIONS = {
    LOAD_DATA: "game/load",
    GAME_RESET: "game/reset",
}

export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function loadData(events, meta){ return  {type: ACTIONS.LOAD_DATA, events, meta} }
