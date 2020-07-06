import { combineReducers } from 'redux'
import player from './player'
import events from './events'

export const ACTIONS = {
    GAME_RESET: "game/reset",
    GAME_NEXT_SEASON: "game/next-season",
    PLAYER_INCREASE_STAT: "player/increase-stat",
    PLAYER_CHANGE_NAME: "player/new-name",
}


export function resetGame(){ return  {type: ACTIONS.GAME_RESET} }
export function nextGameSeason(){ return  {type: ACTIONS.GAME_NEXT_SEASON} }


export default combineReducers({ player, events })
