import { combineReducers } from 'redux'
import player from './player'
import events from './events'
const ACTIONS = require('./actions')

export function gameOver(){ return  {type: ACTIONS.GAME_OVER} }
export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.GAME_NEXT_SEASON} }
export function setActiveEvent(event){return  {type: ACTIONS.GAME_SET_EVENT, event}}

export default combineReducers({ player, events })
