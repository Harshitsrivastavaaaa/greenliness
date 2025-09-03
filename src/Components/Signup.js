import W3 from'../Assets/W3.jpg';
function Signup() {
  return (
    <><div className="signup">
      <div>
        <img src={W3} alt="Background" className="background" />
      </div>
      <form className="signupForm">
        <h1 className="stitle">Sign Up</h1>
        <input type="text" placeholder="Username" className="inputField" required />
        <input type="email" placeholder="Email" className="inputField" required />
        <input type="password" placeholder="Password" className="inputField" required />
        <button type="submit" className="submitButton">Register</button>
      </form>
    </div>
    </>
  );
}

export default Signup;