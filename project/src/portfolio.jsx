import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
// import './script.js'
 const Folio = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2idvoi', 'template_z9vphzq', form.current, 'GvXuqCij9vQ_6kon0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return ( 
        <div>
        <div className="scroll-up-btn">
          <i className="fas fa-angle-up" />
        </div>
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <a href="#">
                B<span>S.</span>
              </a>
            </div>
            <ul className="menu">
              <li>
                <a href="#home" className="menu-btn">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="menu-btn">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="menu-btn">
                  Project
                </a>
              </li>
              <li>
                <a href="#skills" className="menu-btn">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/saranya-b-964353285/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BSaranya2000"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars" />
            </div>
          </div>
        </nav>
        {"{"}/* {/* home section start */} */{"}"}
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">Hello, My Name is</div>
              <div className="text-2">Saranya</div>
              <div className="text-3">
                {" "}
                Frontend Developer
                <span className="typing" />
              </div>
            </div>
            <div className="home-img">
              <img src="image9.gif" />
            </div>
          </div>
        </section>
        {"{"}/* {/* about section start */} */{"}"}
        <section className="about" id="about">
          <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
              <div className="column right">
                <div className="text">
                  Hello! <span className="typing-2" />
                </div>
                <p>
                  I'm Saranya, a passionate and dedicated Frontend Developer with a
                  deep love for coading. With a strong background in this Field, I
                  bring a unique blend of creativity, technical skills, and a
                  relentless drive for excellence to every project I undertake.
                </p>
                <a href="Saranya Resume (3).pdf" download="">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
        {"{"}/* {/*-----service section start--*/} */{"}"}
        <section className="serivces" id="services">
          <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="serv-content">
              <div className="card">
                <div className="box">
                  <i className="fas fa-list" />
                  <div className="text">To-Do List</div>
                  <p>
                    The To-Do List Application is a straightforward yet effective tool
                    for managing tasks and keeping track of your daily
                    responsibilities. Built using HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-app" />
                  <div className="text">Counter App</div>
                  <p>
                    The Counter App is a user-friendly and versatile digital tool
                    designed to help you keep track of counts, increments, and
                    decrements with effortless precision. Built using HTML, CSS, and
                    Javascript.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-form" />
                  <div className="text">Regsitration Form</div>
                  <p>
                    The Registration Form is a crucial gateway to becoming part of our
                    vibrant and inclusive community. this form simplifies the
                    registration process, allowing you to swiftly join our
                    platform.Built using HTML,CSS and Javascript{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {"{"}/* {/*-------skill section start-----*/} */{"}"}
        <section className="skills" id="skills">
          <div className="max-width">
            <h2 className="title">My Skills</h2>
            <div className="skill-content">
              <div className="column left">
                <div className="text">My Skills</div>
                <p>
                  Skill Verification by Linkedin for HTML,CSS,JavaScript and React.Js
                </p>
                <p>Course Completed by React.Js in Skill Up</p>
                <p>Certified by HTML in GreatLearning</p>
                <p>Certified by CSS and JavaScript in Cursa</p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div className="line html" />
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>80%</span>
                  </div>
                  <div className="line css" />
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>
                  <div className="line js" />
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React.Js</span>
                    <span>90%</span>
                  </div>
                  <div className="line php" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!------- contact section start-----> */}
      <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Saranya</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Salem,TamilNadu</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">bsaranya047@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                <form ref={form} onSubmit={sendEmail}>
                   <label>Name</label>
                   <input type="text" name="user_name" />
                   <label>Email</label>
                   <input type="email" name="user_email" />
                   <label>Message</label>
                   <textarea name="message" />
                   <input type="submit" value="Send" />
                 </form>
                 </div>
         </div> 
         </div>        
      </section>
      </div>
      
    )
 }
 export default Folio;
 