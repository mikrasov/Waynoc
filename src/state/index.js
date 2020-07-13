import { combineReducers } from 'redux'
import player from './player'
import events from './events'

export const ACTIONS = {
    GAME_RESET: "game/reset",
    GAME_OVER: "game/loose",
    NEXT_SEASON: "game/next-season",
    SET_EVENT: "event/set-active",
    PLAYER_MOD_STAT: "player/mod-stat",
    PLAYER_MOD_SKILL: "player/mod-skill",
    PLAYER_MOD_RELATIONSHIP: "player/mod-relationship",
    PLAYER_CHANGE_NAME: "player/new-name",
}

export function gameOver(){ return  {type: ACTIONS.GAME_OVER} }
export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.NEXT_SEASON} }
export function setActiveEvent(event){return  {type: ACTIONS.SET_EVENT, event}}

export default combineReducers({ player, events })
