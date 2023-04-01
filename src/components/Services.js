import './Services.css';
import Example from './Example';

function Services() {



    return (
        <>
            <div className='services_section'>

                <h1><i class="fa-solid fa-code"></i>Services Provided</h1>

                <div className="services_container">
                    <hr></hr>
                    <div className="services_provided1">

                        <h2><i class="fa-solid fa-laptop-code"></i> Website design and development</h2>
                        <p>
                            I provide custom website design and development services that meet the specific needs of my clients. This includes creating visually appealing and user-friendly websites that are optimized for search engines and mobile devices.
                        </p>

                    </div>

                    <hr></hr>

                    <div className="services_provided2">

                        <h2><i class="fa-solid fa-compass-drafting"></i> User Interface/User Experience design (UI/UX)</h2>
                        <p>
                            I create intuitive and engaging user interfaces that improve the user experience of websites and applications. This includes wireframing, prototyping, and testing to ensure that the design is user-friendly and meets the specific needs of the end-users.
                        </p>

                    </div>

                </div>

                <div className='skills_web'>

                    <h1 id="ic_html"><i class="fa-brands fa-html5"></i></h1>
                    <h1 id="ic_css"><i class="fa-brands fa-css3-alt"></i></h1>
                    <h1 id="ic_js"><i class="fa-brands fa-js"></i></h1>
                    <h1 id="ic_node"><i class="fa-brands fa-node-js"></i></h1>
                    <h1 id="ic_react"><i class="fa-brands fa-react"></i></h1>
                    <h1 id="ic_php"><i class="fa-brands fa-php"></i></h1>
                    <h1 id="ic_database"><i class="fa-solid fa-database"></i></h1>
                    <h1 id="ic_java"><i class="fa-brands fa-java"></i></h1>
                    <h1 id="ic_python"><i class="fa-brands fa-python"></i></h1>
                    <h1 id="ic_figma"><i class="fa-brands fa-figma"></i></h1>
                </div>

        
  
            </div>
        </>
    )
}

export default Services;