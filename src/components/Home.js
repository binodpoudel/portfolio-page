import React from 'react';
import MyImage from '../image/my1.jpg';
import LinkPage from '../components/LinkPage';



function Home() {
    return (
        <div className='home'>

         <LinkPage className='hello'
           name="Coding is my passion, I am Binod poudel from himalayan country Nepal, I am Junior MERN stack web developer.&nbsp;&nbsp;"
           imgsrc={MyImage}
           visit= '/project' 
           btname='Get Start' />

        </div>
    );

};

export default Home;