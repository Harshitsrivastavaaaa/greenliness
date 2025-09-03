import P1 from'../Assets/P1.jpg';
function Mission() {
    return (
        <><div>
            <img src={P1} alt="Background" className="background" />
        </div>
        <div className="about">
            <h1>Our Mission</h1>
            <p>Our mission is to connect individuals, communities, and organizations to foster environmental 
            consciousness through education, collaboration, and actionable initiatives. We aim to inspire positive
            change by providing resources, promoting sustainable practices, and supporting eco-friendly projects.</p>
        </div></>
    );
}

export default Mission;