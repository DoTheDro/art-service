import heroImage from '../assets/hero-section-image.png'
import About from './Contact'

const Home = () => {
    
    return ( 
            <section className="home-section" id='home'>
                <div className="hero-section">
                    <div className="hero-contents">
                        <h1 className="overview-header">
                            Better Air, Better Life!
                        </h1>
                        <p className="overview-paragraph">
                            Beyond your expectation, I provide you satisfaction.
                        </p>
                    </div>

                    <div className="hero-image">
                        <img src={heroImage} alt="Hero Section Image" />
                    </div>
                </div>
            </section>
    )
}

export default Home