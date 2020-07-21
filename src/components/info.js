import React from "react"
import {Popover, OverlayTrigger  } from "react-bootstrap"
import {graphql, useStaticQuery} from "gatsby"
const lodash = require("lodash")

const query = graphql`{
    characteristics: allMarkdownRemark( filter: { fields: {type: {eq: "characteristics"}}},){
        nodes {
            excerpt
            frontmatter {
              title
            }        
            fields {
              name
              field
            }
        }
    }
}`

export default function ({name, field, value=0, binary}) {
    const car  = useStaticQuery(query).characteristics.nodes.find(
        (c)=> c?.fields.name === name && c?.fields.field === field
    )

    const tagInfo = !car? {title: lodash.upperFirst(field), __html:"No details"}:{
        ...car.frontmatter,
        __html:car.excerpt
    }

    function renderTooltip(props) {
        const title = (tagInfo.title === name)?tagInfo.title:`${name}: ${tagInfo.title}`

        return (
            <Popover id="popover-basic"  {...props}>
                <Popover.Title as="h3">{title}</Popover.Title>
                <Popover.Content dangerouslySetInnerHTML={tagInfo} />
            </Popover>
        )
    }

    //Do we show a value with the characteristic
    let valueTag = ""
    if(value && !binary){
        if(value > 0) valueTag = `+${value}`
        else valueTag = `${value}`
    }

    let modClass = ""
    if(value>0) modClass ="positive"
    if(value<0) modClass ="negative"

    name = lodash.upperFirst(name)

    return <>
        <OverlayTrigger overlay={renderTooltip} placement="auto" trigger={['hover', 'focus']}>
            <span className={"characteristic-info "+modClass}>{valueTag} {tagInfo.title}</span>
        </OverlayTrigger>
    </>
}
