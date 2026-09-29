// import React from "react";
// import './about.css';
// import { Bounce } from "react-reveal";
// // import logo from '../../assets/images/My Logo.png';
// import profile from '../../assets/images/Portlogo.png';

// export default function About()
// {
//     return(
//         <>
        
//         {/* <Rotate> */}
//         <Bounce>
//         <div className="about" id="about">
//             <div className="row">
//                 <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
//                     {/* <img src="https://www.kindpng.com/picc/m/140-1403886_office-girl-cartoon-png-transparent-png.png"
//                     alt="Profile-pic" /> */}
//                     {/* <img src={logo} alt="My Pic" /> */}

//                     {/* src="https://t3.ftcdn.net/jpg/04/59/25/62/240_F_459256228_UpLGOVfRyZr0htSbYUlpdLyiJaTPDpqr.jpg" */}
//                     {/* https://t3.ftcdn.net/jpg/06/21/63/90/240_F_621639043_RoLZyYTG8dBqjCNrlKXMKDwzwQorevcP.jpg */}
               
//                     {/* https://t4.ftcdn.net/jpg/06/01/29/15/240_F_601291561_gZSshy6s6ALh89eso6NGlhvB6zFkA0on.jpg */}
               
//                     {/* https://t4.ftcdn.net/jpg/04/49/57/99/240_F_449579945_jZUYr5vWN74jzny51R52Oj3RsHKfe0UU.jpg */}
               
//                 {/* https://t3.ftcdn.net/jpg/09/48/83/74/240_F_948837440_so22Z7SIcPO71USweYxagGGPd5T3hJLD.jpg */}

//                 <img src={profile} alt="My Profile" />


//                 </div>
//                 <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
//                     <h1> About Me </h1>
//              <p>
// Hello! I'm <strong>Savitha H.</strong>, a passionate and detail-oriented <strong>Java & MERN Full Stack Developer</strong> with a Bachelor’s degree in Computer Applications (BCA) from Thiruvalluvar University, graduating in 2020.

// I currently work as a <strong>Java Full Stack Developer at Thikse Software Solutions Pvt. Ltd., Puducherry</strong>, where I contribute to building enterprise-level applications including HRMS and ATS platforms. My work involves developing backend services using Java, Spring Boot, and REST APIs, implementing authentication systems, and building scalable modules for employee and recruitment management.

// Previously, I worked as a <strong>MERN Full Stack Developer at Legends Tech Solution Pvt. Ltd., Puducherry</strong>, where I gained hands-on experience in designing and developing full-stack web applications, including real estate platforms and rental management systems.

// My technical expertise includes <strong>Java, Spring Boot, HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, Bootstrap, and REST APIs</strong>. I enjoy writing clean, maintainable code and building secure, scalable, and high-performance applications.

// I am passionate about solving real-world problems through technology and continuously learning new tools and frameworks. I am always eager to contribute to innovative projects and grow as a developer in a collaborative environment.
// </p>
//                 </div>
//             </div>
//         </div>
//         </Bounce>
//         {/* </Rotate> */}
        
//         </>
//     )
// }









import React from "react";
import "./about.css";
import { Bounce } from "react-reveal";
import profile from "../../assets/images/Portlogo.png";

export default function About() {
  return (
    <>
      <Bounce>
        <div className="about" id="about">
          <div className="row">

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} alt="Savitha H - Java MERN Full Stack Developer" />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>

              <p>
                Hello! I'm <strong>Savitha H.</strong>, a passionate{" "}
                <strong>Java & MERN Full Stack Developer</strong> with
                3+ years of experience in developing responsive, secure,
                and scalable web applications.
            
                I specialize in both frontend and backend development,
                with hands-on experience in{" "}
                <strong>
                  Java, Spring Boot, Microservices, REST APIs, React.js,
                  JavaScript, Node.js, Express.js, MongoDB, MySQL, and
                  Bootstrap
                </strong>.
              </p>

              <p>
                Throughout my experience, I have worked on real-world
                applications such as <strong>ATS & HRMS platforms,
                real-estate applications, rental management systems,
                and property listing platforms</strong>. I have been
                involved in developing business modules, REST APIs,
                database operations, authentication, authorization,
                OTP verification, and third-party integrations.
             
                I enjoy transforming business requirements into
                practical and user-friendly applications. I focus on
                writing <strong>clean, reusable, maintainable, and
                efficient code</strong> while following good development
                practices.
              </p>

              <p>
                I am a continuous learner who enjoys exploring new
                technologies and solving challenging problems. My goal
                is to build impactful software solutions while growing
                as a professional full-stack developer.
              </p>
            </div>

          </div>
        </div>
      </Bounce>
    </>
  );
}

