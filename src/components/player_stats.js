import React from "react";
import {Table} from "react-bootstrap";
import {GiEyeTarget, GiMuscleUp, GiLungs, GiBeamsAura, GiBrain, GiBowman, GiAwareness, GiRun} from "react-icons/gi"

export default (props) => (
    <>
        <div>Name: {props.player.name}</div>
        <div>Age: {props.player.age}</div>


        <Table striped bordered hover>

            <tbody>
            <tr>
                <td><GiBrain/> Int: {props.player.intelligence}</td>
            </tr>
            <tr>
                <td><GiEyeTarget /> Per: {props.player.perception}</td>
            </tr>
            <tr>
                <td><GiMuscleUp /> Str: {props.player.strength}</td>
            </tr>
            <tr>
                <td><GiLungs/> Sta: {props.player.stamina}</td>
            </tr>
            <tr>
                <td><GiBeamsAura/> Prs: {props.player.presence}</td>
            </tr>
            <tr>
                <td><GiAwareness /> Com: {props.player.communication}</td>
            </tr>
            <tr>
                <td><GiBowman/> Dex: {props.player.dexterity}</td>
            </tr>
            <tr>
                <td><GiRun/> Qik: {props.player.quickness}</td>
            </tr>
            </tbody>
        </Table>

    </>

)
