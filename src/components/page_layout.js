import React from 'react'
import Layout from './layout'

import '../css/bootstrap.min.css'


export default (props) => <Layout active={props.active}>

    <div className={'container'}>
        <div id='content' className={props.className}>{props.children}</div>
    </div>

</Layout>


