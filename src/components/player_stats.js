import React from "react";
import {Table} from "react-bootstrap";

export default (props) => (
    <>
        <div>Name: {props.player.name}</div>
        <div>Age: {props.player.age}</div>


        <Table striped bordered hover>

            <tbody>
            <tr>
                <td>Int: {props.player.intelligence}</td>
            </tr>
            <tr>
                <td>Per: {props.player.perception}</td>
            </tr>
            <tr>
                <td>Str: {props.player.strength}</td>
            </tr>
            <tr>
                <td>Sta: {props.player.stamina}</td>
            </tr>
            <tr>
                <td>Prs: {props.player.presence}</td>
            </tr>
            <tr>
                <td>Com: {props.player.communication}</td>
            </tr>
            <tr>
                <td>Dex: {props.player.dexterity}</td>
            </tr>
            <tr>
                <td>Qik: {props.player.quickness}</td>
            </tr>
            </tbody>
        </Table>

    </>

)
