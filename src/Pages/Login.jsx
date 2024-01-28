import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate()

  const hendleLogin = e => {
    e.preventDefault();


    const form = new FormData(e.currentTarget);

    const email = form.get('email')
    const password = form.get('password')

    loginUser(email, password)
      .then(result => {
        console.log(result);
        
        navigate(location?.state ? location.state : "/")

      })
      .catch(error => {
        console.log(error);
    })
  }

  
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">Login Now</h2>
      <div className="shrink-0 lg:w-1/2 md:w-3/4 mx-auto my-16 shadow-2xl bg-base-100">
        <form onClick={hendleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-400">Login</button>
          </div>

          <div>
            <button onClick={()=>handleSocialLogin(googleLogin)} className="btn">Google</button>
          </div>

          <p>
            Do not have an account <Link to="/register">
              <button className="text-red-400">Register</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;