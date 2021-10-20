
import React from 'react'
import {FaGithub, FaInvision } from 'react-icons/fa';
import { SiIndeed } from "react-icons/si";



function Footer () {
    
    return (
        
          <div className='footer'>    
                      <ul className='ul'>
                          <li>
                          <a href={"https://github.com/binodpoudel"}target="noreferrer"><FaGithub /></a> 
                          </li>
                          <li>
                          <a href={"https://www.linkedin.com/in/binod-poudel-a547281b2/"}target="noreferrer"><FaInvision /></a>
                          </li>
                          <li>
                          <a href={"https://my.indeed.com/p/binodp-o3elr0v "}target="noreferrer"><SiIndeed /></a>
                          </li>
                         
                      </ul>  
                  <div>
                    <small className='website-rights'>&copy;{new Date().getFullYear()}  All RIGHT RESERVED</small>
                  </div>
          </div>  
       
    )
}

export default Footer;
