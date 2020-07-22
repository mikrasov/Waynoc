import { combineReducers } from 'redux'
import player from './player'
import game from './game'
import playerMeta from "./player_meta"

export const ACTIONS = {
    GAME_RESET: "game/reset",
    GAME_OVER: "game/loose",
    NEXT_SEASON: "game/next-season",
    LOG_LINE: "log/add-line",
    LEVEL_UP_CHOICE_ADD: "game/level-up-choice-add",
    LEVEL_UP_CHOICE_REMOVE: "game/level-up-choice-remove",
    LEVEL_UP_COMPLETE: "game/level-up-complete",
    SET_EVENT: "event/set-active",
    PLAYER_MOD: "player/mod-characteristic",
    PLAYER_SET: "player/set-characteristic",
}

export function gameOver(){ return  {type: ACTIONS.GAME_OVER} }
export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.NEXT_SEASON} }

export function addLogEntry(title, content){ return  {type: ACTIONS.LOG_LINE, title, content} }
export function levelUpChoiceAdd(key,activity){ return  {type: ACTIONS.LEVEL_UP_CHOICE_ADD, key, activity} }
export function levelUpChoiceRemove(key){ return  {type: ACTIONS.LEVEL_UP_CHOICE_REMOVE, key} }
export function levelUpComplete(){ return  {type: ACTIONS.LEVEL_UP_COMPLETE} }
export function setActiveEvent(event){return  {type: ACTIONS.SET_EVENT, event}}

export function changePlayerName(name){return  {...playerMeta({name:true}), type: ACTIONS.PLAYER_SET, value: name}}
export function modifyPlayer(props){
    const meta = playerMeta(props)
    const value = (props.value) ? props.value : meta.step
    return  {...meta, type: ACTIONS.PLAYER_MOD, value}
}

export default combineReducers({ player, game })
