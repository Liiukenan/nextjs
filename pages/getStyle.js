import React from 'react'
import {withRouter} from 'next/router'
import  '../styles/getStyle.styl'


const getStyle=(props) => {
    return (
        <div className="title">component Board title</div>
    )
}
export default withRouter(getStyle)