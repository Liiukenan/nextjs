import React from 'react'
import Link from 'next/link'
import Router  from 'next/router'
import next from 'next'
import Kenans from './components/kenans'


function Home(props) {
    Router.events.on('routeChangeStart',(...args)=>{
      console.log('1.routeChangeStart,路由开始变化，参数',...args);
    })
    Router.events.on('beforeHistoryChange',(...args)=>{
      console.log('2.beforeHistoryChange,路由变化结束之前',...args);
    })
    Router.events.on('routeChangeComplete',(...args)=>{
      console.log('3.routeChangeComplete,路由变化结束，参数',...args);
    })
    
    Router.events.on('routeChangeError',(...args)=>{
      console.log('4.routeChangeError,路由错误',...args);
    })
    Router.events.on('hashChangeStart',(...args)=>{
      console.log('5.hashChangeStart,锚点开始',...args);
    })
    Router.events.on('hashChangeComplete',(...args)=>{
      console.log('6.hashChangeComplete,锚点结束',...args);
    })
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
                <Kenans>小可爱</Kenans>
              </div>
              <div>
                <button onClick={()=>{gotoKenan('kenan')}}>
                  去kenan页面
                </button>
                <button onClick={()=>{gotoKenan('kenanB')}}>
                  去kenanB页面
                </button>


                <Link href="/kenanB?name=xiaokeai"><a>测试接口</a></Link>

                
               
               
              </div>

              <div>
                {/* <Link href="#hash"><a>hash锚点测试</a></Link> */}
              </div>
              {/* <div id="hash">
                跳到这里了嘛
              </div> */}

              

          </div>
      );
}

export default Home