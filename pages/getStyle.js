import React from 'react'
import {withRouter} from 'next/router'
import  '../styles/getStyle.styl'


const getStyle=(props) => {
    // console.log('====================================');
    console.log(props);
    // console.log('====================================');
    return (
        <div className="title">component Board title</div>
    )
}
export default withRouter(getStyle)