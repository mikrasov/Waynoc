import React, {useState}  from "react"
import Graph from "react-graph-vis"

import './admin.css'
import {graphql, useStaticQuery} from "gatsby"
import { Col, Row} from "react-bootstrap/"
import Layout from "../../components/layout";


function SelectedNode({node}) {

    if(!node) return <></>
    return <>
        {node.title}
    </>
}

function SelectedEdge({edge}){
    if(!edge) return <></>
    return <>
?
    </>
}

export default function AdminPage({ player} ) {
    const nodes = {}
    const edges = {}

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
        }`)

    //load events into nodes and edges
    data.events.nodes.forEach( (e)=> {
        nodes[e.id] = {
            id: e.id,
            label: e.fields.file,
            title: e.frontmatter.title
        }

        edges[e.id+"-"+e.id] = {
            from: e.id,
            to: e.id,
        }
    })

    return <Layout active={"admin"}>

        <Row>
            <Col xs={3} className={"admin-side"}>
                {selected.nodes.map( (nodeId)=><SelectedNode node={nodes[nodeId]}/>)}
                {selected.edges.map( (edgeId)=><SelectedNode edge={edges[edgeId]}/>)}
                <SelectedEdge sel={selected}/>
            </Col>
            <Col xs={9}>
                <Graph
                    graph={ {nodes: Object.values(nodes), edges: Object.values(edges)} }
                    events={ { select: setSelected }}
                />
            </Col>

        </Row>

    </Layout>
}


