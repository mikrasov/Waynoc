import React from "react"
import {GiAwareness, GiBeamsAura, GiBowman, GiBrain, GiEyeTarget, GiLungs, GiMuscleUp, GiRun} from "react-icons/gi";
import {Table} from "react-bootstrap";

export default ({className, player}) => <Table striped bordered hover>

    <tbody>
    <tr>
        <td><GiBrain/> Int: {player.intelligence}</td>
    </tr>
    <tr>
        <td><GiEyeTarget /> Per: {player.perception}</td>
    </tr>
    <tr>
        <td><GiBeamsAura/> Cha: {player.charisma}</td>
    </tr>
    <tr>
        <td><GiAwareness /> Com: {player.communication}</td>
    </tr>
    <tr>
        <td><GiMuscleUp /> Str: {player.strength}</td>
    </tr>
    <tr>
        <td><GiLungs/> Sta: {player.stamina}</td>
    </tr>
    <tr>
        <td><GiBowman/> Dex: {player.dexterity}</td>
    </tr>
    <tr>
        <td><GiRun/> Spd: {player.speed}</td>
    </tr>
    </tbody>
</Table>

