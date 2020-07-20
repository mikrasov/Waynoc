import { combineReducers } from 'redux'
import player from './player'
import game from './game'


export const ACTIONS = {
    GAME_RESET: "game/reset",
    GAME_OVER: "game/loose",
    NEXT_SEASON: "game/next-season",
    SET_EVENT: "event/set-active",
    PLAYER_MOD: "player/mod-characteristic",
    PLAYER_CHANGE_NAME: "player/new-name",
}

export function gameOver(){ return  {type: ACTIONS.GAME_OVER} }
export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.NEXT_SEASON} }
export function setActiveEvent(event){return  {type: ACTIONS.SET_EVENT, event}}
export function changePlayerName(name){return  {type: ACTIONS.PLAYER_CHANGE_NAME, value: name}}

export function modifyPlayer(path, value) { return { type: ACTIONS.PLAYER_MOD_SKILL, path, value}}

export default combineReducers({ player, game })
