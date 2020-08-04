import React from "react"
import {GiAwareness, GiBeamsAura, GiBowman, GiBrain, GiEyeTarget, GiLungs, GiMuscleUp, GiRun} from "react-icons/gi";
import {Table} from "react-bootstrap"
import Info from "../story-tags/info";

export default function({className, player}){


    return <Table striped bordered hover>

        <tbody>
        <tr>
            <td><GiBrain/> <Info name="stat" field="intelligence" />: {player.intelligence}</td>
        </tr>
        <tr>
            <td><GiEyeTarget /> <Info name="stat" field="perception" />: {player.perception}</td>
        </tr>
        <tr>
            <td><GiBeamsAura/> <Info name="stat" field="charisma" />: {player.charisma}</td>
        </tr>
        <tr>
            <td><GiAwareness /> <Info name="stat" field="communication" />: {player.communication}</td>
        </tr>
        <tr>
            <td><GiMuscleUp /> <Info name="stat" field="strength" />: {player.strength}</td>
        </tr>
        <tr>
            <td><GiLungs/> <Info name="stat" field="stamina" />: {player.stamina}</td>
        </tr>
        <tr>
            <td><GiBowman/> <Info name="stat" field="dexterity" />: {player.dexterity}</td>
        </tr>
        <tr>
            <td><GiRun/> <Info name="stat" field="speed" />: {player.speed}</td>
        </tr>
        </tbody>
    </Table>
}

