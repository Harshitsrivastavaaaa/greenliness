import W3 from'../Assets/W3.jpg';
import P8 from'../Assets/P8.jpg';
function About() {
  return (
  <><div>
      <img src={W3} alt="Background" className="background" />
    </div>
    <div>
      <h1 className="AT">About Us</h1>
      <div id="AP">
        <p>We are dedicated environmental organization committed to promoting sustainability and 
          fostering a greener, healthier planet. Focused on innovative eco-friendly solutions, Greenliness 
          works with communities, businesses, and policymakers to reduce carbon footprints, enhance recycling
          efforts, and implement renewable energy initiatives. Through education, advocacy, and hands-on projects,
          Greenliness strives to raise awareness about environmental challenges and inspire actionable change for
          a sustainable future. Their mission is to create a cleaner, greener world for current and future 
          generations.</p>
      <div id="Aimg">
        <img src={P8} alt="About Us" className="img" />
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

export default About;