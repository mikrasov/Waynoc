import ageEvents from "./age_events"

export default function(player, dispatch, updateRecentEvents, updateActiveEvent) {
    const events = []

    player.age += .25
    if (player.age in ageEvents) {
        ageEvents[player.age].forEach(event => {

            event.resolved = (text) =>{
                events.push({
                    flavor_text: event.flavor,
                    effect_text: text
                })
                updateRecentEvents(events)
            }

            let effect = ""

            //Execute event
            if(event.hasChoice) updateActiveEvent(event)

            if(event?.effect){
                effect = event.effect()
                dispatch(effect)
                event.resolved(effect.effect_text)
            }


        })
    }

}
