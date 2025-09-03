import W3 from'../Assets/W3.jpg';
function Vision() {
  return (
    <div>
      <div>
        <img src={W3} alt="Background" className="background" />
      </div>
      <div className="V1">
        <h1>Our Vision</h1>
        <p>We envision a world where environmental responsibility is embraced by everyone, leading to healthier ecosystems,
        cleaner communities, and a sustainable future for all. Join us on our journey to make the planet greener, 
        one action at a time.</p>
      </div>
      <div className="V2">
        <h1>What we do</h1>
        <p>Educational Campaigns: Offering informative content, workshops, and events to increase understanding of environmental challenges and solutions.<br></br>
        Community Engagement: Creating a space for individuals and groups to share ideas, collaborate on projects, and participate in local initiatives.<br></br>
        Sustainable Initiatives: Supporting and promoting eco-friendly practices, conservation efforts, and green technology adoption.<br></br>
        Partnership Building: Collaborating with organizations, businesses, and policymakers to amplify impact and drive systemic change.</p>
      </div>
    </div>
  );
}

export default Vision;