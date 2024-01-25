import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";



const Register = () => {
  const { creatUser, handleUpdatePhoto } = useContext(AuthContext);
  // console.log(creatUser);

  const handleRegister = e => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
    console.log(name,email,password,photo);

    creatUser(email, password)
      .then(result => {
        console.log(result.user);
        handleUpdatePhoto(name, photo)
      })
      .catch(error => {
      console.log(error);
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
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
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
            Alrody have an account ? <Link to='/login'>
              <button className="text-red-400">Login</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;