import React from "react"
import {GiAwareness, GiBeamsAura, GiBowman, GiBrain, GiEyeTarget, GiLungs, GiMuscleUp, GiRun} from "react-icons/gi";
import {Table} from "react-bootstrap";

export default ({className, player}) => <Table striped bordered hover>

    <tbody>
    <tr>
        <td><GiBrain/> INT: {player.intelligence}</td>
    </tr>
    <tr>
        <td><GiEyeTarget /> PER: {player.perception}</td>
    </tr>
    <tr>
        <td><GiMuscleUp /> STR: {player.strength}</td>
    </tr>
    <tr>
        <td><GiLungs/> STA: {player.stamina}</td>
    </tr>
    <tr>
        <td><GiBeamsAura/> CHA: {player.charisma}</td>
    </tr>
    <tr>
        <td><GiAwareness /> COM: {player.communication}</td>
    </tr>
    <tr>
        <td><GiBowman/> DEX: {player.dexterity}</td>
    </tr>
    <tr>
        <td><GiRun/> SPD: {player.speed}</td>
    </tr>
    </tbody>
</Table>

