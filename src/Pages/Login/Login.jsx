import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    
    signIn(email,password)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
                <input className='btn bg-orange-500 border-none
                hover:bg-orange-600' type="submit" value="Sign In" />
            </div>
            </form>
            <p className='my-4 text-center'>
                New to Car Doctors?
                <Link to="/signup" className='text-orange-500 font-bold ms-1'>
                Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
