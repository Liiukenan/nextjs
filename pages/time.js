import React,{useState} from 'react'
import {withRouter} from 'next/router'
import dynamic from 'next/dynamic' //异步加载自定义组件


const One =dynamic(import('./one.js'))
function time(props) {
    const [nowTime,setTime]=useState(0)
    const changeTime=async ()=>{
        // 按需异步加载插件
        const moment=await import('moment')
        setTime(moment.default(Date.now()).format())


        //加载本地插件
    }
     return (
          <div>
              <div>
                  显示时间:{nowTime}
              </div>
              <One />
              <div>
                  <button onClick={changeTime}>改变时间格式</button>
              </div>
          </div>
      );
}
export default withRouter(time)