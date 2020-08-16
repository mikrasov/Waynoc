import React  from "react"

import Layout from "../components/layout"
import CharacterCreator from "../components/createCharacter";

export default function({ game} ) {

    return (
        <Layout active={"game"}>
            <CharacterCreator />
        </Layout>
    )
}
