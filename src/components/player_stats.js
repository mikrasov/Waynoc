import React from "react"
import {Table} from "react-bootstrap"
import {GiEyeTarget, GiMuscleUp, GiLungs, GiBeamsAura, GiBrain, GiBowman, GiAwareness, GiRun} from "react-icons/gi"

export default ({player}) => (
    <>
        <div>Name: {player.name}</div>
        <div>Age: {Math.floor(player.age)} years {(player.age % 1) * 12} months</div>


        <Table striped bordered hover>

            <tbody>
            <tr>
                <td><GiBrain/> Int: {player.intelligence}</td>
            </tr>
            <tr>
                <td><GiEyeTarget /> Per: {player.perception}</td>
            </tr>
            <tr>
                <td><GiMuscleUp /> Str: {player.strength}</td>
            </tr>
            <tr>
                <td><GiLungs/> Sta: {player.stamina}</td>
            </tr>
            <tr>
                <td><GiBeamsAura/> Prs: {player.presence}</td>
            </tr>
            <tr>
                <td><GiAwareness /> Com: {player.communication}</td>
            </tr>
            <tr>
                <td><GiBowman/> Dex: {player.dexterity}</td>
            </tr>
            <tr>
                <td><GiRun/> Qik: {player.quickness}</td>
            </tr>
            </tbody>
        </Table>

    </>

)
