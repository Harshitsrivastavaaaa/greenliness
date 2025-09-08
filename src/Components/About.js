import W3 from'../Assets/W3.jpg';
import P8 from'../Assets/P8.jpg';
function About() {
  return (
    <>
    <div>
      <img src={W3} alt="Background" className="background" />
    </div>
    <div>
      <h1 className="AT">About Us</h1>
      <div id="AP">
        <p>HELLO paragraph</p>
      </div>
      <div id="Aimg">
        <img src={P8} alt="About Us" className="img" />
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

export default About;