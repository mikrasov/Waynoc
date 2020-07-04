let age_events = {

    .25: [
        {
            flavor:"You learned to recognize faces.",
            effect: (player) => player.increase_intelligence()
        },
        {
            flavor:"To look around.",
            effect: (player) => player.increase_perception()
        },
        {
            flavor:"To lift your head.",
            effect: (player) => player.increase_strength()
        },
        {
            flavor:"To hold your head steady.",
            effect: (player) => player.increase_stamina()
        },
        {
            flavor:"To smile at people.",
            effect: (player) => player.increase_presence()
        },
        {
            flavor:"To coo and babble",
            effect: (player) => player.increase_communication()
        },
        {
            flavor:"To suck on your hand.",
            effect: (player) => player.increase_dexterity()
        },
        {
            flavor: "To swing at dangling toys.",
            effect: (player) => player.increase_quickness()
        }
    ]

}

export default function(player, updatePlayer, updateRecentEvents) {
    player.age += .25

    const events = []
    if (player.age in age_events) {
        age_events[player.age].forEach(event => {
            events.push({
                flavor_text: event.flavor,
                effect_text: event.effect(player)
            })
        })
    }
    updatePlayer(player)
    updateRecentEvents(events)
}
