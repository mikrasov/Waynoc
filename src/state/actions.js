export const ACTIONS = {
    LOAD_DATA: "game/load",
    EVENT_NEXT: "event/next",
    EVENT_CHOICE: "event/choice",
    GAME_RESET: "game/reset",
}

export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextEvent(){ return  {type: ACTIONS.EVENT_NEXT} }
export function makeChoice(choiceNum){ return  {type: ACTIONS.EVENT_CHOICE, num:choiceNum} }
export function loadData(events, initStats, statsMeta){ return  {type: ACTIONS.LOAD_DATA, events, initStats, statsMeta} }
