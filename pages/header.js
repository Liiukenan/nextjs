import React from 'react'
// import Head from 'next/head'
import Myheader from './components/myheader'
//babel-plugin-import  按需加载

function header(props) {
     return (
          <div>
              {/* <Head>
                  <title>nextjs快结束啦</title>
                  <meta charset="utf-8"/>
              </Head> */}
              <Myheader />
              {/* head的封装 */}
          </div>
      );
}
export default header