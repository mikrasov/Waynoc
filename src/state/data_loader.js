import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {connect} from "react-redux"
import {loadData} from "./actions"


function DataLoader ({dataLoaded, dispatch}) {
    const data = useStaticQuery(graphql`{
          events: allMarkdownStorybook {
            nodes {
              id
              next
              filename
              title
              hast
            }
          },
          meta:  allStatsJson {
            nodes {
              key
              initial
              min
              max
              format
              format_value
              secret
              title
              description
              sub {
                key
                title
                description
              }
            }
          }
         
        }`)

    if (!dataLoaded) dispatch(loadData(data.events.nodes,  data.meta.nodes ) )

    return <></>
}

export default connect(state => ({dataLoaded: state.dataLoaded}), null)(DataLoader)

