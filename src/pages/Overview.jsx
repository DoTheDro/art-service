import overviewImg from '../assets/overview-image.png'


const Overview = () => {
    return (
        <section className="overview-section">
            <div>
                <h2>Overview</h2>
                <div className="overview-container">
                    <div className="left-column">
                        <img src={overviewImg} alt="Overview Image" />
                    </div>

                    <div className="right-column">
                        <p>Air conditioning services refer to the maintenance, repair, and installation of air conditioning units in residential, commercial, and industrial settings. The importance of my services cannot be overstated, especially in hot and humid climates. Air conditioning units not only provide comfort by regulating temperature and humidity levels, but they also improve indoor air quality by filtering out pollutants and allergens.</p>

                        <p>Regular air conditioning services are essential to ensure that units function efficiently and last longer. These services typically include cleaning and replacing filters, checking refrigerant levels, inspecting and repairing electrical components, and lubricating moving parts. Neglecting routine maintenance can lead to reduced efficiency, higher energy bills, and costly breakdowns. In addition to maintenance, air conditioning services also involve repairs in case of malfunctions and installations for new units or replacements. Me as a professional and experienced air conditioning service provider can help ensure that your unit is in good working condition and can provide reliable and effective cooling for years to come.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview