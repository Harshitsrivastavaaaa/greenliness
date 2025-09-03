import L1 from'../Assets/L1.jpg';
import W3 from'../Assets/W3.jpg';
function Home() {
  return (
    <>
    <div className="Home">
      <div>
        <img src={L1} alt="Logo" className="logo" />
      </div>
      <div>
        <img src={W3} alt="Background" className="background" />
      </div>
      <div>
        <h1 className="title">Greenliness</h1>
        <p className="subtitle">Together for Nature, United for a Greener Future</p>
      </div>
      <button className="getStartedButton">
        <a href="/signup" className="getStartedLink">Join Our Team</a>
      </button>
    </div></>
  );
}

export default Home;