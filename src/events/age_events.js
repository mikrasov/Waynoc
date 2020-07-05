import { STAT, increaseStat, changeName} from '../state/player'
import React from "react";
import ReactDOM from 'react-dom';
import {Form} from "react-bootstrap"

let ageEvents = {

    .25: [
        {
            flavor:"You learned to recognize faces.",
            effect: () => increaseStat(STAT.INTELLIGENCE)
        },
        {
            flavor:"To look around.",
            effect: () => increaseStat(STAT.PERCEPTION)
        },
        {
            flavor:"To lift your head.",
            effect: () => increaseStat(STAT.STRENGTH)
        },
        {
            flavor:"To hold your head steady.",
            effect: () => increaseStat(STAT.STAMINA)
        },
        {
            flavor:"To smile at people.",
            effect: () => increaseStat(STAT.PRESENCE)
        },
        {
            flavor:"To coo and babble",
            effect: () => increaseStat(STAT.COMMUNICATION)
        },
        {
            flavor:"To suck on your hand.",
            effect: () => increaseStat(STAT.DEXTERITY)
        },
        {
            flavor: "To swing at dangling toys.",
            effect: () => increaseStat(STAT.QUICKNESS)
        }
    ],

    0.5: [
        {
            flavor: "You learned your name.",
            hasChoice: true,
            body:<p>You realized that your parents were calling you  <Form.Control  type="text"  placeholder="Your Name" id="choice_player_name" defaultValue={"George"} /> all along.</p>,
            controls:[
                {label: "Accept Your Fate!", action: ()=>  {return changeName(document.getElementById("choice_player_name").value)} }
            ]
        },
        {
            flavor: "You learned to put things in your mouth.",
            effect: () =>increaseStat(STAT.PERCEPTION)
        },
        {
            flavor: "To sit and roll over.",
            effect: () => increaseStat(STAT.STRENGTH)
        },
        {
            flavor: "To reach for things.",
            effect: () => increaseStat(STAT.DEXTERITY)
        },
        {
            flavor: "To crawl.",
            effect: () => increaseStat(STAT.QUICKNESS)
        }
    ],

    0.75: [
        {
            flavor: "You learned to fear strangers.",
            effect: () => increaseStat(STAT.INTELLIGENCE)
        },
        {
            flavor: "To stand while holding on to something.",
            effect: () => increaseStat(STAT.STRENGTH)
        },
        {
            flavor: "To understand simple sentences.",
            effect: () => increaseStat(STAT.COMMUNICATION)
        }
    ],

    1.0: [
        {
            flavor: "To explore things, by shaking, banging or throwing them.",
            effect: () => increaseStat(STAT.INTELLIGENCE)
        },
        {
            flavor: "To walk while holding on to furniture.",
            effect: () => increaseStat(STAT.STAMINA)
        }
    ],

    1.25: [
        {
            flavor: "You learned to throw tantrums",
            effect: () => increaseStat(STAT.PRESENCE)
        },
        {
            flavor: "To walk alone",
            effect: () => increaseStat(STAT.STRENGTH)
        }
    ],

    1.5: [
        {
            flavor: "You learned to run.",
            effect: () => increaseStat(STAT.QUICKNESS)
        },
        {
            flavor: "To say simple words, like \"No.\"",
            effect: () => increaseStat(STAT.COMMUNICATION)
        },
    ],

    1.75: [
        {
            flavor: "You learned to be defiant.",
            effect: () => increaseStat(STAT.PRESENCE)
        },
        {
            flavor: "To find things even behind multiple covers.",
            effect: () =>increaseStat(STAT.PERCEPTION)
        }
    ],

    2.0: [
        {
            flavor: "You learned to speak in sentences.",
            effect: () => increaseStat(STAT.COMMUNICATION)
        },
        {
            flavor: "To stand on tiptoe",
            effect: () => increaseStat(STAT.STAMINA)
        }
    ],

    2.25: [
        {
            flavor: "You learned to show concern.",
            effect: () => increaseStat(STAT.PRESENCE)
        },
        {
            flavor: "To walk on stairs, one foot per step.",
            effect: () => increaseStat(STAT.DEXTERITY)
        }
    ],

    2.5: [
        {
            flavor: "You learned to understand possession of objects",
            effect: () => increaseStat(STAT.INTELLIGENCE)
        },
        {
            flavor: "To play make-believe with objects",
            effect: () =>increaseStat(STAT.PERCEPTION)
        }
    ],

    2.75: [
        {
            flavor: "You learned to climb well.",
            effect: () => increaseStat(STAT.STAMINA)
        },
        {
            flavor: "You learned to pedal a tricycle.",
            effect: () => increaseStat(STAT.QUICKNESS)
        }
    ],

    3.0: [
        {
            flavor: "You learned to screw and unscrew jars.",
            effect: () => increaseStat(STAT.DEXTERITY)
        }
    ],

    3.25: [
        {
            flavor: "You learned to cooperate to solve problems.",
            effect: () => increaseStat(STAT.PRESENCE)
        }
    ],

    3.5: [
        {
            flavor: "You learned to tell coherent stories.",
            effect: () => increaseStat(STAT.COMMUNICATION)
        }
    ],

    3.75: [
        {
            flavor: "You learned to pour, cut, and mash your food.",
            effect: () => increaseStat(STAT.DEXTERITY)
        }
    ],

    4.0: [
        {
            flavor: "You learned to count.",
            effect: () => increaseStat(STAT.INTELLIGENCE)
        }
    ],

    4.25: [
        {
            flavor: "You learned to hop and skip.",
            effect: () => increaseStat(STAT.STRENGTH)
        }
    ],

    4.5: [
        {
            flavor: "You learned to stand on one foot for 10 seconds.",
            effect: () => increaseStat(STAT.STAMINA)
        }
    ],

    4.75: [
        {
            flavor: "You learned to do a somersault.",
            effect: () => increaseStat(STAT.QUICKNESS)
        }
    ],

    5.0: [
        {
            flavor: "You become aware of gender.",
            effect: () =>increaseStat(STAT.PERCEPTION)
        }
    ]
}

export default ageEvents
