import W3 from'../Assets/W3.jpg';
import P4 from '../Assets/P4.jpg';
function Vision() {
  return (
    <>
        <div>
            <img src={W3} alt="Background" className="background" />
        </div>
        <div>
            <h1 className="AT">Vision</h1>
            <div id="VP">
                <p>We envision a world where environmental responsibility is embraced by everyone, leading 
                to healthier ecosystems, cleaner communities, and a sustainable future for all. 
                Join us on our journey to make the planet greener, one action at a time.
                </p>
                <ul>
                    <li>Educational Campaigns: Offering informative content, workshops, and events to 
                      increase understanding of environmental challenges and solutions.
                    </li>
                    <li>
                      Community Engagement: Creating a space for individuals and groups to share ideas, 
                      collaborate on projects, and participate in local initiatives.
                    </li>
                    <li>
                      Sustainable Initiatives: Supporting and promoting eco-friendly practices, 
                      conservation efforts, and green technology adoption.
                    </li>
                    <li>
                      Partnership Building: Collaborating with organizations, businesses, 
                      and policymakers to amplify impact and drive systemic change.
                    </li>
                </ul>
                <div id="Vimg">
                    <img src={P4} alt="About Us" className="img" />
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

export default Vision;