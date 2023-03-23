import siteLogo from '../assets/art-logo.png'
import iconLocation from '../assets/icon-location.png'
import iconPhone from '../assets/icon-cellphone.png'

const Contact = () => {
    
    return (
        <section className="contact-section" id='contact'>
            <div>
                <div className="contact-container">
                    <div className="left-column">
                        <div className="custom-contaienr">
                            <img src={siteLogo} alt="Website Logo" />
                        </div>

                        <div className="container-custom">
                            <h3>Art's Services</h3>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="contact-details">
                            <div className="icon-container">
                                <img src={iconLocation} alt="Location Icon" />
                            </div>

                            <div className="details-container">
                                <p>
                                Aparente Street, San Isidro, General Santos City
                                </p>
                            </div>
                        </div>
                        
                        <div className="contact-details">
                            <div className="icon-container">
                                <img src={iconPhone} alt="Phone Icon" />
                            </div>

                            <div className="details-container">
                                <p>
                                    <span>SMART: </span>09513151123
                                </p>

                                <p>
                                    <span>GLOBE: </span>09351758716
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact