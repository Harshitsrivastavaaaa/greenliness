import P1 from'../Assets/P1.jpg';
function Signup() {
  return (
    <><div className="signup">
      <div>
        <img src={P1} alt="Background" className="background" />
      </div>
      <form>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          </div>
      </form>
      </div>
      </>
  );
}

export default Signup;