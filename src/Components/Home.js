import P2 from '../Assets/P2.jpg';
function Home() {
  return (
    <>
    <div className="Homewall">
      <div>
        <img src={P2} alt="Greenliness Wall" className="wallpaper"/>
      </div>
      <div className="Home">
        <h1 className="title">Greenliness</h1>
        <p className="subtitle">Your one-stop solution for eco-friendly products and tips.</p>
      </div>
    </div>
    </>
  );
}

export default Home;