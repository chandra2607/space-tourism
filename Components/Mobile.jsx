import React, { useState } from 'react'
import Image from 'next/image'

function Mobile() {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <>
    <div className='navbar'>
        <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="40" height="40"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        <div className="threelines" onClick={()=>setShowMenu(prev=>!prev)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
 
    </div> 
    {
        showMenu&&( <div className="mobile-menu">
                        <p className='cut-img' onClick={()=>setShowMenu(prev=>!prev)}>
                          <Image src='/assets/cut.png' width={30} height={30} />
                          </p>
                    <div><span className='space'>00</span> Home</div>
                    <div><span className='space'>01</span>  Destination</div>
                    <div><span className='space'>02</span>  Crew</div>
                    <div><span className='space'>03</span>  Technology</div>
                    </div>
                        )
    }
    </>
  )
}

export default Mobile