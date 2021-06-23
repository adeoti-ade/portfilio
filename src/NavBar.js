const NavBar = () => {
    return ( 
            <div className="nav">
                <div className="nav-item"><a href="/home">Home</a></div>
                <div className="nav-item"><a href="/skills">Skills</a></div>
                <div className="nav-item"><a href="/experience">Experience</a></div>
                <div className="nav-item sign-in"><a href="/projects">Projects</a></div>
                <div className="nav-item sign-up"><a href="/achievements">Achievements</a></div>
            </div>
     );
}
 
export default NavBar;