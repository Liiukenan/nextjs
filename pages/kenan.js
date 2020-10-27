import Link from 'next/link'
import React from 'react'
import {withRouter} from 'next/router'
function Kenan({router}) {
     return (
          <div>
               <Link href="/">
                    <a>
                        <span>这是啥？？</span>
                        <span>返回首页</span>
                        <div>{router.query.name}来为我服务</div>
                    </a>
                    
                </Link>
          </div>
      );
}
export default withRouter(Kenan)