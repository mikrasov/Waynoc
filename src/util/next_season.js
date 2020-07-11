import {nextGameSeason, setActiveEvent, gameOver} from "../state";


export default function(player, events, dispatch) {
    dispatch(nextGameSeason())



    const currentEventID = events[player.age/0.25]?.id

    if(currentEventID) {
        fetch('/static/event-data/'+currentEventID+".json")
            .then(response => response.json())
            .then(data => { dispatch(setActiveEvent(data))}
            )
    }

    else{
        dispatch( gameOver() )
    }


}
