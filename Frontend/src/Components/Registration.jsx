import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { RxEyeOpen } from "react-icons/rx";
import { BiHide } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('OTP sent to your email!'); // Use toast for success message
        setOtpSent(true);
      } else {
        toast.error(data.message); // Use toast for error message
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred. Please try again.'); // Use toast for catch error
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Registration successful!'); // Use toast for success message
        // Redirect the user to the login page or another page
      } else {
        toast.error(data.message); // Use toast for error message
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('An error occurred. Please try again.'); // Use toast for catch error
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8F9FA]">
      <ToastContainer /> {/* Include the ToastContainer in your JSX */}
      <div className="absolute rotate-3 h-[400px] w-[800px] rounded-[50px] bg-black hover:bg-[#F07C7C]"></div>
      <div className="relative h-[400px] w-[800px] rounded-[50px] border border-black bg-white p-6 z-10">
        {!otpSent ? (
          <div className="flex justify-between items-start">
            <div className="w-2/3 flex flex-col ml-5">
              <h2 className="text-2xl font-bold text-left mb-2">Create an Account</h2>
              <p className="text-left text-gray-500 mb-4">Join us for endless learning!</p>
              <form onSubmit={handleRegistration} className="space-y-4">
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="relative mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <MdMail className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
                </div>

                <div className="relative mb-4">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-3 text-gray-400"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <BiHide className="size-5" /> : <RxEyeOpen className="size-5" />}
                  </button>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="mt- w-[150px] bg-yellow-500 text-white py-3 rounded-[50px] transition-colors"
                  >
                    Register
                  </button>
                </div>

                <div className="flex justify-center text-sm">
                  <label className="text-[15px]">
                    Already have an Account?{' '}
                    <Link to="/login" className="ml-2 text-[#1976d2] underline">
                      Login
                    </Link>
                  </label>
                </div>
              </form>
            </div>

            <div className="w-1/3 pl-4 flex flex-col justify-center mt-12">
              <h2 className="text-lg font-bold text-center mb-4">Sign in with</h2>
              <div className="space-y-4 w-full">
                <button
                  className="w-full bg-gray-100 p-3 rounded-full hover:bg-gray-200 flex justify-center items-center transition-all"
                  onClick={() => console.log('Google sign-in')}
                >
                  <FcGoogle className="h-8 w-8" />
                </button>
                <button
                  className="w-full bg-gray-100 p-3 rounded-full hover:bg-gray-200 flex justify-center items-center transition-all"
                  onClick={() => console.log('GitHub sign-in')}
                >
                  <FaGithub className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleVerifyOtp} className="max-w-md mx-auto">
            <h1 className="mb-8 font-bold text-3xl">Verify OTP</h1>

            <div className="relative mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-[150px] bg-orange-500 text-white py-3 rounded-[50px] hover:bg-orange-700 transition-colors"
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
