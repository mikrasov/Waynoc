import React from "react";
import {graphql, StaticQuery} from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image";
import Layout from "./layout";





export default (props) => <StaticQuery
    query={graphql`{
 seasons: file(relativePath: { eq: "seasons.png" }) {
            childImageSharp {
              fixed (width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
      }
    `}
    render={data => <>

        <Img
            fadeIn={true}
            fixed={data.seasons.childImageSharp.fixed}
            className={"season"}
            style={{transform: "rotate("+(props.season * 90)+"deg)"}}
        />
        </>
    }
/>