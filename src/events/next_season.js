import ageEvents from "./age_events"

export default function(player, updateRecentEvents) {
    const events = []

    player.age += .25
    if (player.age in ageEvents) {
        ageEvents[player.age].forEach(event => {
            events.push({
                flavor_text: event.flavor,
                effect_text: event.effect(player)
            })
        })
    }
    updateRecentEvents(events)
}
