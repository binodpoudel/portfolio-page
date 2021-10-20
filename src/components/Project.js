
import React from "react";
import {FaGithub,} from "react-icons/fa";



const Project = () => {
  const [header] = React.useState({
    mainHeader: "",
    subHeading: "My Project",
    text:
      `If you want to look my projects code click on 'Go Link'.`,
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "React Food Recipe App",
      text: 
      
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binodpoudel/React-food-recipe"><button type="button" className="btn btn-info">Go Link</button></a> 
    },

    {
      id: 2,
      icon: <FaGithub  className="commonIcons" />,
      heading: " React YouTube App",
      text:
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binodpoudel/react-youtube-app"><button type="button" className="btn btn-info">Go Link</button></a> 
    },
    {
      id: 3,
      icon: <FaGithub  className="commonIcons" />,
      heading: "Demo Portfolio Website (using Html,Css, javaScript)",
      text:
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binodpoudel/html-css-javaScript-demo-website/tree/master"><button type="button" className="btn btn-info">Go Link</button></a> 
    },
    {
      id: 4,
      icon: <FaGithub  className="commonIcons" />,
      heading: "Mern-stack-instagram-app",
      text:
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binodpoudel/mern-stack-instagram-app"><button type="button" className="btn btn-info">Go Link</button></a>
    },

    {
      id: 5,
      icon: <FaGithub  className="commonIcons" />,
      heading: "ToDo-React-app",
      text:
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binodpoudel/react-todo-application"><button type="button" className="btn btn-info">Go Link</button></a>
    },

   
    {
      id: 6,
      icon: <FaGithub  className="commonIcons" />,
      heading: "React-Portfolio-page",
      text:
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binodpoudel/portfolio-page"><button type="button" className="btn btn-info">Go Link</button></a>
    }
    
    
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;