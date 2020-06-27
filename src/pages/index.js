import Layout from "../components/layout";
import React, { useState } from "react";

const initialPlayer = {
    name: "George",
    age: 0,
    intelligence: 0,
    perception: 0,
    strength: 0,
    stamina: 0,
    presence: 0,
    communication: 0,
    dexterity: 0,
    quickness: 0
}

function timePasses(playerState){

    return {
        name: playerState.name,
        age: playerState.age + 1,
        intelligence: playerState.intelligence + Math.floor(Math.random() * 2) ,
        perception: playerState.perception + Math.floor(Math.random() * 2),
        strength: playerState.strength + Math.floor(Math.random() * 2),
        stamina: playerState.stamina + Math.floor(Math.random() * 2),
        presence: playerState.presence + Math.floor(Math.random() * 2),
        communication: playerState.communication + Math.floor(Math.random() * 2),
        dexterity: playerState.dexterity + Math.floor(Math.random() * 2),
        quickness: playerState.quickness + Math.floor(Math.random() * 2)
    }

}



export default function(props) {
    const [player, updatePlayer] = useState(initialPlayer)


    return <Layout>


        <table className="table table-striped table-borderless table-hover table-sm">
            <tbody>
            <tr>
                <td>Int: {player.intelligence}</td>
            </tr>
            <tr>
                <td>Per: {player.perception}</td>
            </tr>
            <tr>
                <td>Str: {player.strength}</td>
            </tr>
            <tr>
                <td>Sta: {player.stamina}</td>
            </tr>
            <tr>
                <td>Prs: {player.presence}</td>
            </tr>
            <tr>
                <td>Com: {player.communication}</td>
            </tr>
            <tr>
                <td>Dex: {player.dexterity}</td>
            </tr>
            <tr>
                <td>Qik: {player.quickness}</td>
            </tr>
            </tbody>
        </table>

        <button type="submit" name="action" value="advance"
                className="btn btn-secondary" onClick={function(){updatePlayer(timePasses(player))} }>Next Season
        </button>
        <button type="submit" name="action" value="restart"
                className="btn btn-secondary" onClick={function(){updatePlayer(initialPlayer)}}> Reset
        </button>

        <table className="table table-borderless table-sm">
            <tbody>
            <tr>
                <td><h5>Name: {player.name}</h5></td>
                <td><h5>Age: {player.age}</h5></td>
            </tr>
            </tbody>
        </table>
    </Layout>
}
