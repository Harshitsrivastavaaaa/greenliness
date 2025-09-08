import W3 from'../Assets/W3.jpg';
function Mission() {
    return (
        <><div>
            <img src={W3} alt="Background" className="background" />
        </div>
        <div>
            <h1 className="VT">Our Mission</h1>
            <p className="M1">Our mission is to connect individuals, communities, and organizations to foster environmental 
            consciousness through education, collaboration, and actionable initiatives. We aim to inspire positive
            change by providing resources, promoting sustainable practices, and supporting eco-friendly projects.</p>
        </div>
        <div className="footer">
                <p><center>© 2025 Pentonic Automotive India Pvt. Ltd. All rights reserved.</center></p>
                <p><center>Social Media:  
                    <a className="link1" href="https://www.facebook.com">Facebook</a>  
                    <a className="link1" href="https://www.twitter.com">Twitter</a>
                    <a className="link1" href="https://www.instagram.com">Instagram</a> 
                    <a className="link1" href="https://api.whatsapp.com/send/?phone=%2B917838217830&text&type=phone_number&app_absent=0">Whatsapp</a>
                </center></p>
            </div></>
    );
}

export default Mission;