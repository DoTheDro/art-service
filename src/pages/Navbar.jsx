import {  
    Link,
    NavLink,
    Outlet
} from 'react-router-dom'
import siteLogo from '../assets/art-logo.png'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'

const Navbar = () => {

    const showMenu = () => {
        document.getElementById('site-menu').classList.add('show')
    }

    const hideMenu = () => {
        document.getElementById('site-menu').classList.remove('show')
    }

    return (
        <div>
            <header>
                <nav>
                    <div className="site-logo">
                        <Link to='/'>
                            <img src={siteLogo} alt="Art's Service Logo" />
                        </Link>
                    </div>

                    <div className="header-menu" id='site-menu'>
                        <button onClick={hideMenu}>X</button>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Services</a>
                    </div>

                    <div className="hamburger-btn" onClick={showMenu}>
                        <button>
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </header>

            <main>
                <div className="homepage">
                    <Home />
                    <Services />
                    <Contact />
                </div>
            </main>
        </div>
    )
}

export default Navbar