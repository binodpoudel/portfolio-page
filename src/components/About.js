import React from 'react';
import MyImage from '../image/my1.jpg';
import LinkPage from '../components/LinkPage';


function About() {
    return (
        <div className='about'>
          <LinkPage 
           name='Hello i am&nbsp;&nbsp;' 
           imgsrc={MyImage} 
           visit= '/contact' 
           btname='Contact me' />
        </div>
    );

};

export default About;