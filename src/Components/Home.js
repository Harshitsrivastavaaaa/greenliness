import L1 from'../Assets/L1.jpg';
import P1 from'../Assets/P1.jpg';
function Home() {
  return (
    <>
    <div className="Home">
      <div>
        <img src={L1} alt="Logo" className="logo" />
      </div>
      <div>
        <img src={P1} alt="Background" className="background" />
      </div>
      <div>
        <h1 className="title">Greenliness</h1>
        <p className="subtitle">Together for Nature, United for a Greener Future</p>
      </div>
    </div></>
  );
}

export default Home;