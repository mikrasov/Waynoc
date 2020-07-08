import React from "react"
import {increaseStat} from "../state/player"


export function Choice({title, effect, children: resolution})  {
    return <></>
}

export function IncreaseStat({stat, value})  {
    const effect = increaseStat(stat,value)
    return <strong>{effect.effect_text}</strong>
}
