
export default function performEvent(events, player, updatePlayer, updateRecentEvents){
    const recentEvents = []

    events.forEach( e=> {
        recentEvents.push(e.flavor)
        recentEvents.push(e.effect(player))

    })
    updatePlayer(player)
    updateRecentEvents(recentEvents)
}
