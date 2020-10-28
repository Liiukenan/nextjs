import Link from 'next/link'
import React from 'react'
import Router  from 'next/router'
import {withRouter} from 'next/router'
import axios from 'axios'
function Kenan(props) {
    console.log(props.data.data);
    console.log('====================================');
    console.log(props);
    console.log('====================================');
     return (
          <div>
               <Link href="/">
                    <a>
                        <span>icon</span>
                        {/* {data} */}
                        {/* <div>{router.query.name}来为我服务</div> */}
                    </a>
                </Link>
          </div>
      );
}
Kenan.getInitialProps = async (ctx) => {
    const res=await axios.post('https://www.fastmock.site/mock/414e2ebd2739fe3246826adee9421ec5/nextjs/login',{username:'admin',password:'123456'})
    return {
        data:res.data
    }
}
export default withRouter(Kenan)