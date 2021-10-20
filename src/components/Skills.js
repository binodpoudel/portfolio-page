import React from 'react';
import { NavLink } from 'react-router-dom';


function Skills() {
    
    return (
        <section className="skills" id="skills">
        <div className="max-width">
            {/*<h2 className="title"></h2>*/}
            <div className="skills-content">
                <div className="column left">
                    <div className="text">MY Knowledge</div>
                    <p>What i was learned one years course in DCI (Digital Career Institute)</p>
                    <NavLink to="/">Read More</NavLink>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>    
                    </div>
                        
                    <div className="bars">
                        <div className="info">
                            <span>BootStraps</span>
                            <span>85%</span>
                        </div>
                        <div className="line bts"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span>80%</span>
                        </div>
                        <div className="line react"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Node, Express</span>
                            <span>80%</span>
                        </div>
                        <div className="line node"></div>
                    </div>
                    
                    <div className="bars">
                        <div className="info">
                            <span>MongoDB, Mongoose</span>
                            <span>80%</span>
                        </div>
                        <div className="line db"></div>
                    </div>

                    <div className="bars">
                        <div className="info">
                            <span>Git</span>
                            <span>80%</span>
                        </div>
                        <div className="line db"></div>
                    </div>
                    
                    <div className="bars">
                        <div className="info">
                            <span>TypeScript Learning</span>
                            <span>Self</span>
                        </div>
                        <div className="line db"></div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skills
