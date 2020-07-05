export default ageEvents

let ageEvents = {

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
    ],

    0.5: [
        {
            flavor: "You learned your name.",
            effect: (player) => player.change_name("George"),
        },
        {
            flavor: "You learned to put things in your mouth.",
            effect: (player) => player.increase_perception()
        },
        {
            flavor: "To sit and roll over.",
            effect: (player) => player.increase_strength()
        },
        {
            flavor: "To cry in different ways.",
            effect: (player) => player.increase_communication()
        },
        {
            flavor: "To reach for things.",
            effect: (player) => player.increase_dexterity()
        },
        {
            flavor: "To crawl.",
            effect: (player) => player.increase_quickness()
        }
    ],

    0.75: [
        {
            flavor: "You learned to fear strangers.",
            effect: (player) => player.increase_intelligence()
        },
        {
            flavor: "To look for hidden things.",
            effect: (player) => player.increase_perception()
        },
        {
            flavor: "To stand while holding on to something.",
            effect: (player) => player.increase_strength()
        },
        {
            flavor: "To understand simple sentences, make many sounds and simple gestures.",
            effect: (player) => player.increase_communication()
        },
        {
            flavor: "To pick things up and move them between your hands.",
            effect: (player) => player.increase_dexterity(),
        }
    ],

    1.00: [
        {
            flavor: "You learned many ways of getting attention.",
            effect: (player) => player.increase_presence()
        },
        {
            flavor: "To help with dressing yourself.",
            effect: (player) => player.increase_dexterity()
        },
        {
            flavor: "To use simple gestures, such as shaking your head and waving.",
            effect: (player) => player.increase_communication()
        },
        {
            flavor: "To explore things, by shaking, banging or throwing them.",
            effect: (player) => player.increase_intelligence()
        },
        {
            flavor: "To sit and stand on your own.",
            effect: (player) => player.increase_stamina()
        },
        {
            flavor: "To walk while holding on to furniture.",
            effect: (player) => player.increase_strength()
        }
    ]
}
