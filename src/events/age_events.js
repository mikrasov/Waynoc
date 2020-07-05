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
            flavor: "To stand while holding on to something.",
            effect: (player) => player.increase_strength()
        },
        {
            flavor: "To understand simple sentences.",
            effect: (player) => player.increase_communication()
        }
    ],

    1.0: [
        {
            flavor: "To explore things, by shaking, banging or throwing them.",
            effect: (player) => player.increase_intelligence()
        },
        {
            flavor: "To walk while holding on to furniture.",
            effect: (player) => player.increase_stamina()
        }
    ],

    1.25: [
        {
            flavor: "You learned to throw tantrums",
            effect: (player) => player.increase_presence()
        },
        {
            flavor: "To walk alone",
            effect: (player) => player.increase_strength()
        }
    ],

    1.5: [
        {
            flavor: "You learned to run.",
            effect: (player) => player.increase_quickness()
        },
        {
            flavor: "To say simple words, like \"No.\"",
            effect: (player) => player.increase_communication()
        },
    ],

    1.75: [
        {
            flavor: "You learned to be defiant.",
            effect: (player) => player.increase_presence()
        },
        {
            flavor: "To find things even behind multiple covers.",
            effect: (player) => player.increase_perception()
        }
    ],

    2.0: [
        {
            flavor: "You learned to speak in sentences.",
            effect: (player) => player.increase_communication()
        },
        {
            flavor: "To stand on tiptoe",
            effect: (player) => player.increase_stamina()
        }
    ],

    2.25: [
        {
            flavor: "You learned to show concern.",
            effect: (player) => player.increase_presence()
        },
        {
            flavor: "To walk on stairs, one foot per step.",
            effect: (player) => player.increase_dexterity()
        }
    ],

    2.5: [
        {
            flavor: "You learned to understand possession of objects",
            effect: (player) => player.increase_intelligence()
        },
        {
            flavor: "To play make-believe with objects",
            effect: (player) => player.increase_perception()
        }
    ],

    2.75: [
        {
            flavor: "You learned to climb well.",
            effect: (player) => player.increase_stamina()
        },
        {
            flavor: "You learned to pedal a tricycle.",
            effect: (player) => player.increase_quickness()
        }
    ],

    3.0: [
        {
            flavor: "You learned to screw and unscrew jars.",
            effect: (player) => player.increase_dexterity()
        }
    ],

    3.25: [
        {
            flavor: "You learned to cooperate to solve problems.",
            effect: (player) => player.increase_presence()
        }
    ],

    3.5: [
        {
            flavor: "You learned to tell coherent stories.",
            effect: (player) => player.increase_communication()
        }
    ],

    3.75: [
        {
            flavor: "You learned to pour, cut, and mash your food.",
            effect: (player) => player.increase_dexterity()
        }
    ],

    4.0: [
        {
            flavor: "You learned to count.",
            effect: (player) => player.increase_intelligence()
        }
    ],

    4.25: [
        {
            flavor: "You learned to hop and skip.",
            effect: (player) => player.increase_strength()
        }
    ],

    4.5: [
        {
            flavor: "You learned to stand on one foot for 10 seconds.",
            effect: (player) => player.increase_stamina()
        }
    ],

    4.75: [
        {
            flavor: "You learned to do a somersault.",
            effect: (player) => player.increase_quickness()
        }
    ],

    5.0: [
        {
            flavor: "You become aware of gender.",
            effect: (player) => player.increase_perception()
        }
    ]
}

export default ageEvents
