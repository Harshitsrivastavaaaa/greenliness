import P1 from'../Assets/P1.jpg';
import W3 from'../Assets/W3.jpg';
function About() {
  return (
    <><div>
      <img src={P1} alt="Background" className="background" />
      </div>
    <div className="about">
      <div>
        <img src={W3} alt="Logo" className="logoA" />
      </div>
    <div className="A1">
        <h1 className="atitle">About Greenliness</h1>
        <p className="asubtitle">Greenliness is a passionate team of environmental advocates, educators, and innovators committed to 
          making a difference. We work tirelessly to raise awareness about pressing environmental issues such 
          as climate change, pollution, deforestation, and waste management. Through our platform, we empower 
          people to take meaningful steps toward sustainability in their daily lives.</p>
    </div>
    </div>
    </>
    );
}

export default About;