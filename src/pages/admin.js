import React, {useState}  from "react"
import Graph from "react-graph-vis"

import '../components/bootstrap.min.css'
import '../components/admin.css'
import {graphql, useStaticQuery} from "gatsby"
import { Col, Row} from "react-bootstrap/"


function SelectedNode({node}) {

    return <>
        {node}
    </>
}

function SelectedEdge({edge}){

    return <>
        {edge}
    </>
}

export default function AdminPage({ player} ) {

    const [selected, setSelected] = useState( {nodes:[], edges:[]})

    const data  = useStaticQuery( graphql`{
            events: allMarkdownRemark(
                filter: { 
                    fields: {type: {eq: "events"}}
                },
                sort: {
                  fields: [fields___age]
                  order: ASC
                }
            ){
                nodes {
                    id
                    htmlAst
                    fileAbsolutePath
                    frontmatter {
                      title
                    }        
                    fields {
                      event_category
                      age
                      file
                    }
                }
            }
        }`)?.events?.nodes

    const graph = {
        nodes: data.map((e)=>{
            return {
                id: e.id,
                label: e.fields.file,
                title: e.frontmatter.title
            }
        }),
        edges:  data.map((e)=>{
            return {
                from: e.id,
                to: e.id,
            }
        }),
    }

    const options = {
        edges: {
            color: "#000000"
        },
    }

    const events = {
        select: function(event) {
            setSelected(event)
            console.log(event)
        }
    }

    return <>

        <Row>
            <Col xs={3} className={"admin-side"}>
                {selected.nodes.map( (node)=><SelectedNode node={node}/>)}
                {selected.edges.map( (edge)=><SelectedNode edge={edge}/>)}
                <SelectedEdge sel={selected}/>
            </Col>
            <Col xs={9}>
                <Graph
                    graph={graph}
                    options={options}
                    events={events}
                />
            </Col>

        </Row>

    </>
}


