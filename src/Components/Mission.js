import W3 from'../Assets/W3.jpg';
function Mission() {
    return (
        <><div>
            <img src={W3} alt="Background" className="background" />
        </div>
        <div className="M1">
            <h1>Our Mission</h1>
            <p>Our mission is to connect individuals, communities, and organizations to foster environmental 
            consciousness through education, collaboration, and actionable initiatives. We aim to inspire positive
            change by providing resources, promoting sustainable practices, and supporting eco-friendly projects.</p>
        </div></>
    );
}

export default Mission;