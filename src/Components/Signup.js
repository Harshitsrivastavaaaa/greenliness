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

export default Signup;