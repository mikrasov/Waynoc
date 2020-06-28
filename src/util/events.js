let events = {

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


export default function performEvent(player, updatePlayer, updateRecentEvents){
    const recentEvents = []

    player.age += .25


    if (player.age in events) events[player.age].forEach( e=> {
        recentEvents.push(e.flavor)
        recentEvents.push(e.effect(player))

    })
    updatePlayer(player)
    updateRecentEvents(recentEvents)
}
