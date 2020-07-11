import { combineReducers } from 'redux'
import player from './player'
import events from './events'

export const GAME_RESET = "game/reset"
export const GAME_OVER = "game/lose"
export const GAME_NEXT_SEASON = "game/next-season"
export const GAME_SET_EVENT = "events/set-active"
export const PLAYER_INCREASE_STAT = "player/increase-stat"
export const PLAYER_CHANGE_NAME = "player/new-name"
export const PLAYER_INCREASE_SKILL = "player/increase-skill"

export function gameOver(){ return  {type: GAME_OVER} }
export function resetGame(){ return  {type: GAME_RESET} }
export function nextGameSeason(){ return  {type: GAME_NEXT_SEASON} }
export function setActiveEvent(event){return  {type: GAME_SET_EVENT, event}}

export default combineReducers({ player, events })
