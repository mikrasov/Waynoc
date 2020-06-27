var events = {

    1: [

        {
            flavor:"You learned to recognize faces.",
            prob: 0.8,
            effect: (player) => {  player.intelligence += 1}
        },
        {
            flavor:"To look around.",
            prob: 1,
            effect: (player) => {player.perception+=1}
        },
        {
            flavor:"To lift your head.",
            prob: 1,
            effect: (player) => {player.strength+=1}
        },
        {
            flavor:"To hold your head steady.",
            prob: 1,
            effect: (player) => {player.stamina+=1}
        },
        {
            flavor:"To smile at people.",
            prob: 1,
            effect: (player) => {player.presence+=1}
        },
        {
            flavor:"To coo and babble",
            prob: 1,
            effect: (player) => {player.communication+=1}
        },

        {
            flavor:"To suck on your hand.",
            prob: 1,
            effect: (player) => {player.dexterity+=1}
        },
        {
            flavor: "To swing at dangling toys.",
            prob: 1,
            effect: (player) => { player.quickness += 1}
        }
    ]

}


export default function performEvent(playerState, updatePlayerState, updateRecentEvents){
    const player = {...playerState}
    const recentEvents = []


    player.age += 1



    if (player.age in events) events[player.age].forEach( e=> {
        recentEvents.push(e)
        e.effect(player)

    })
    updatePlayerState(player)
    updateRecentEvents(recentEvents)
}
