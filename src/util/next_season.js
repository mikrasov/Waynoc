import ageEvents from "./age_events"
import {nextGameSeason} from "../state";


export default function(player, events, dispatch) {
    dispatch(nextGameSeason())

    console.log(events)

    const age = player.age + 0.25

    if (age in ageEvents) {
        ageEvents[age].forEach(event => {
            let effect = ""
            if(event?.effect){
                effect = event.effect()
                effect.flavor_text = event.flavor
                dispatch(effect)
            }
        })
    }


}
