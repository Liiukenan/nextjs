import React from 'react'
import Link from 'next/link'
import Router  from 'next/router'
import next from 'next'

function Home(props) {
     const gotoKenan=(l)=>{
       Router.push(l)
     }
     return (
          <div>
              <Link href="/kenan?name=天使萌"><a>去kenan页面</a></Link>
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