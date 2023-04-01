import video2 from "./pexelssmoke.mp4";
import NavBar from "./NavBar";
import "./Back.css";
import Example from './Example';
function Back() {



    return (
        <>
            <NavBar></NavBar>
            <div className="background_container">

                <video className='videoTag' autoPlay loop muted>
                    <source src={video2} type='video/mp4' />
                </video>


            </div>

            <div className='hero_section'>

                <div className='hero_content'>
                    <div className="hero_content_text">
                        <p>Hey there, I am</p>
                        <h1>Anurag Choudhari </h1>
                        <div className='hero_content_roles'>
                           <Example></Example>
                        </div>
                        {/* <div className='hero_content_caption'>
        <p>I Design websites that are both visually stunning and highly functional</p>
    </div> */}

                        <div className='cta_btn'>
                            <div className='cta_content '>
                                <a href="#" id="cta_btn">Get in touch<i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div className="social_media">
                            <a href="#" id="github"><i class="fa-brands fa-github" ></i></a>
                            <a href="#" id="Linkedin"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#" id="Youtube"><i class="fa-brands fa-youtube" id="youtube"></i></a>

                        </div>

                    </div>

                </div>

                <div className="hero_caption">
                        <h1>
                        I Create beautiful and powerful experiences that bring together design, and technology.
                        </h1>
                </div>

            </div>


        </>
    )
}

export default Back;