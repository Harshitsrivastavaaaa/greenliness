import W3 from'../Assets/W3.jpg';
import P3 from '../Assets/P3.jpg';
function Mission() {
    return (
        <>
            <div>
                <img src={W3} alt="Background" className="background" />
            </div>
            <div>
                <h1 className="AT">Mission</h1>
                <div id="AP">
                    <p>The mission of Greenliness is to foster a sustainable and healthier planet by championing 
                        innovative eco-friendly solutions. Committed to environmental stewardship, Greenliness 
                        collaborates with communities, businesses, and policymakers to reduce carbon footprints, 
                        improve recycling practices, and promote renewable energy initiatives. Through education,
                        advocacy, and practical projects, Greenliness aims to raise awareness about environmental 
                        challenges and inspire meaningful actions. Their ultimate goal is to create a cleaner, 
                        greener world that benefits both current and future generations.
                    </p>
                    <div id="Aimg">
                        <img src={P3} alt="About Us" className="img" />
                    </div>
                </div>
            </div>
    <div className="footer">
        <p><center>© 2025 Greenliness Inc. All rights reserved.</center></p>
        <p><center>Social Media:  
          <a className="link1" href="https://www.facebook.com">Facebook</a>  
          <a className="link1" href="https://www.twitter.com">Twitter</a>
          <a className="link1" href="https://www.instagram.com">Instagram</a> 
          <a className="link1" href="https://api.whatsapp.com/send/?phone=%2B917838217830&text&type=phone_number&app_absent=0">Whatsapp</a>
          </center></p>
    </div>
        </>
    );
}
export default Mission;