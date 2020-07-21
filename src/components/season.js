import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"

export default (props) => <StaticQuery
    query={graphql`{
        seasons: file(relativePath: { eq: "seasons.png" }) {
            childImageSharp {
              fixed (width: 200) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
    `}

    render={data =>
        <Img
            fadeIn={true}
            fixed={data.seasons.childImageSharp.fixed}
            className={"season d-none d-sm-block"}
            style={{transform: "rotate("+(90 - props.season * 90)+"deg)"}}
        />
    }
/>
