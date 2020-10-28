import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import {withRouter} from 'next/router'
function KenanB({children}) {
     return (
          <div>
               <Link href="/">
                    <a>
                        <span>这是啥？？</span>
                        <span>返回首页123</span>
                    </a>
                    
                </Link>
                
          </div>
      );
}


export default withRouter(KenanB)