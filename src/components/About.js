import "./About.css";
import Pdf from "./Resume.pdf";

function About() {
    return (
        <>
            <div className="about_container" id="about">

          
                <div className="about_me_left">
                    <h1 className="about_me_title"><i class="fa-regular fa-user"></i> About Me</h1>
                    <p> <span>Hi, my name is </span> Anurag Choudhari <br></br> I am a web developer and visual artist. Currently, I am in my third year pursuing a Bachelor's degree in Computer Science. I am deeply passionate about creating innovative and engaging user experiences that bring together technology and design. With a keen eye for detail and a drive to learn new technologies and techniques, I am constantly pushing the boundaries of what's possible.</p>

                    <p>
                    As a creative thinker and problem solver, I enjoy taking on challenging projects that require out-of-the-box solutions. I believe that good design is not just about aesthetics, but also about creating meaningful interactions that solve real-world problems. Whether it's developing a website, creating a mobile app, or designing a user interface, I strive to create experiences that are not only visually appealing but also intuitive and user-friendly.
                    </p>

                    <p>
                    Aside from my technical skills, I am also an avid music and visual artist with a passion for music production, and graphic design. I love exploring different mediums and using my creativity to express myself in new and exciting ways.
                    </p>

                    <a href={Pdf} id="resume_btn" target="_blank">View Resume <i class="fa-solid fa-arrow-right"></i></a>

                </div>
               
               
                <hr></hr>
         
              
                <div className="about_me_right">
                            <h1>“Inspiration does exist, but it must find you working.”</h1>
                </div>

            </div>

            
      
            {/* <hr className="hr_seprater"></hr> */}
        </>
    )
}

export default About;