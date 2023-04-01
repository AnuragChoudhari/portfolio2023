import './NavBar.css';

function NavBar(){
    return(
        <>
            <div className='nav_bar'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;