import serviceSales from '../assets/services-sales.png'
import serviceCleaning from '../assets/services-cleaning.png'
import serviceRepair from '../assets/services-repair.png'
import serviceInstallation from '../assets/services-installation.png'


const Services = () => {

    return (
        <section className="services-section" id="services">
            <div className="services-offer">
                <h2 className="services-header">
                    Services
                </h2>
                <div className="services-container">
                    <div className="services-card">
                        <div className="services-card-con">
                            <div className="service-img-container">
                                <img src={serviceSales} alt="Services Sales" />
                            </div>
                            <div className="services-content-container">
                                <h4>Sales</h4>
                            </div>
                        </div>
                    </div>

                    <div className="services-card">
                        <div className="services-card-con">
                            <div className="service-img-container">
                                <img src={serviceCleaning} alt="Services Cleaning" />
                            </div>
                            <div className="services-content-container">
                                <h4>Cleaning</h4>
                            </div>
                        </div>
                    </div>

                    <div className="services-card">
                        <div className="services-card-con">
                            <div className="service-img-container">
                                <img src={serviceRepair} alt="Services Repair" />
                            </div>
                            <div className="services-content-container">
                                <h4>Repair</h4>
                            </div>
                        </div>
                    </div>

                    <div className="services-card">
                        <div className="services-card-con">
                            <div className="service-img-container">
                                <img src={serviceInstallation} alt="Services Installation" />
                            </div>
                            <div className="services-content-container">
                                <h4>Installation</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services