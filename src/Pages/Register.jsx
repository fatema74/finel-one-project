import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import {FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
  const { creatUser, handleUpdatePhoto } = useContext(AuthContext);
  // console.log(creatUser);

  const [registerError, setRegisterRrror] = useState('');
  const [success, setSuccess] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
    // console.log(name, email, password, photo);
    
    setRegisterRrror('')
    setSuccess('')

    if (password.length < 6) {
      setRegisterRrror('password should be at least 6 charectors');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterRrror('your password should have at least one upper case');
    }


    creatUser(email, password)
      .then(result => {
        console.log(result.user);
        handleUpdatePhoto(name, photo)
      })
      .catch(error => {
        console.log(error);
        setRegisterRrror(error.message);
    })
  }


  return (
    <div>
      <div className="text-center text-5xl font-bold">
        <h2>Registration Now</h2>
      </div>
      <div className="shrink-0 lg:w-1/2 md:w-3/4 mx-auto my-16 shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                name="password"
                className="input input-bordered w-full"
                required
              />
              <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>{ showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Minimum ritgt correct{' '}
                <span className="text-red-500">password</span> please?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-400">Submit</button>
          </div>
          <p>
            Alrody have an account ?{' '}
            <Link to="/login">
              <button className="text-red-400">Login</button>
            </Link>
          </p>
        </form>
        {
          registerError && <p className="text-red-500 mb-4">{registerError}</p>
        }{
          success && <p className="text-green-500 mb-4">{success}</p>
        }
      </div>
    </div>
  );
};

export default Register;