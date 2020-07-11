import { combineReducers } from 'redux'
import player from './player'
import events from './events'

export const ACTIONS = {
    GAME_RESET: "game/reset",
    GAME_OVER: "game/loose",
    GAME_NEXT_SEASON: "game/next-season",
    GAME_SET_EVENT: "events/set-active",
    PLAYER_INCREASE_STAT: "player/increase-stat",
    PLAYER_CHANGE_NAME: "player/new-name",
}


export function gameOver(){ return  {type: ACTIONS.GAME_OVER} }
export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.GAME_NEXT_SEASON} }
export function setActiveEvent(event){return  {type: ACTIONS.GAME_SET_EVENT, event}}

export default combineReducers({ player, events })
