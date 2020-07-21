import { combineReducers } from 'redux'
import player from './player'
import game from './game'
import playerMeta from "./player_meta"

export const ACTIONS = {
    GAME_RESET: "game/reset",
    GAME_OVER: "game/loose",
    NEXT_SEASON: "game/next-season",
    SET_EVENT: "event/set-active",
    PLAYER_MOD: "player/mod-characteristic",
    PLAYER_SET: "player/set-characteristic",
}

export function gameOver(){ return  {type: ACTIONS.GAME_OVER} }
export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.NEXT_SEASON} }
export function setActiveEvent(event){return  {type: ACTIONS.SET_EVENT, event}}

export function changePlayerName(name){return  {...playerMeta({name:true}), type: ACTIONS.PLAYER_SET, value: name}}
export function changePlayerGender(gender){return  {...playerMeta({gender:true}), type: ACTIONS.PLAYER_SET, value: gender}}
export function modifyPlayer(props, value=null){return  {...playerMeta(props), type: ACTIONS.PLAYER_MOD, value: value}}


export default combineReducers({ player, game })
