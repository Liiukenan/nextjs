import React from 'react'
import Link from 'next/link'
import Router  from 'next/router'
import next from 'next'

function Home(props) {
     const gotoKenan=(href)=>{
      //  Router.push(`${l}?name=波多野结衣`)
      Router.push({
        pathname:href,
        query:{name:'濑亚美莉'}
      })
     }
     return (
          <div>
              <Link href="/kenan?name=天使萌"><a>去kenan页面</a></Link>
              <Link href={{pathname:"kenan",query:{name:"濑亚美莉"}}}>濑亚美莉</Link>
              <div>
                <button onClick={()=>{gotoKenan('kenan')}}>
                  去kenan页面
                </button>
                <button onClick={()=>{gotoKenan('kenanB')}}>
                  去kenanB页面
                </button>
               
              </div>
          </div>
      );
}
export default Home