import React, {useState}  from "react"
import Graph from "react-graph-vis"
import ReactJson from "react-json-view"
import './admin.css'
import {graphql, useStaticQuery} from "gatsby"
import { Col, Row} from "react-bootstrap/"
import Layout from "../../components/layout"


function NodeInfo({node}){



    return <>
        <h4>{node.title}</h4>
        <ReactJson src={node} />
        </>
}

export default function AdminPage({ player} ) {
    const [selected, setSelected] = useState( {nodes:[], edges:[]})

    const data  = useStaticQuery( graphql`{
        events: allMarkdownStorybook {
            nodes {
              id
              filename
              title
              hast
            }
          }
      }`)

    const nodes = {}
    const edges = {}
    if (typeof window === 'undefined') return <></>

    //load events into nodes and edges
    data.events.nodes.forEach( (e)=> {
        nodes[e.filename] = {
            ...e,
            id: e.filename,
            label: e.filename,
            title: e.title,
        }

        e.hast.links.forEach( link =>{
            edges[e.filename+"-"+link] = {
                from: e.filename,
                to: link,
            }
        })

    })

    return <Layout active={"admin"}>
        <Row>
            <Col xs={3} className={"admin-side"}>
                {selected.nodes.map(nId=> <NodeInfo key={nId} node={nodes[nId]} />)}
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
