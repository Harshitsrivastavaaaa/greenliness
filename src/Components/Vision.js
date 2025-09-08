import W3 from'../Assets/W3.jpg';
function Vision() {
  return (
    <div>
      <div>
        <img src={W3} alt="Background" className="background" />
      </div>
      <div >
        <h1 className="VT">Our Vision</h1>
        <p className="V1">We envision a world where environmental responsibility is embraced by everyone, leading to healthier ecosystems,
        cleaner communities, and a sustainable future for all. Join us on our journey to make the planet greener, 
        one action at a time.</p>
      </div>
      <div >
        <p className="V2">
          <ul>
            <li>Educational Campaigns: Offering informative content, workshops, and events to increase understanding of environmental challenges and solutions.<br></br></li>
        <li>Community Engagement: Creating a space for individuals and groups to share ideas, collaborate on projects, and participate in local initiatives.<br></br></li>
        <li>Sustainable Initiatives: Supporting and promoting eco-friendly practices, conservation efforts, and green technology adoption.<br></br></li>
        <li>Partnership Building: Collaborating with organizations, businesses, and policymakers to amplify impact and drive systemic change.</li></ul>
        </p>
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
    </div>
  );
}

export default Vision;