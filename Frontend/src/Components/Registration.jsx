import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { RxEyeOpen } from "react-icons/rx";
import { BiHide } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './Login';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserDataForm, setShowUserDataForm] = useState(false);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');

  const navigate = useNavigate();

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
        localStorage.setItem('email', email);
        toast.success('OTP sent to your email!');
        setOtpSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem('email');
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: savedEmail, otp }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('OTP verified successfully!');
        setShowUserDataForm(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleUserDataSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem('email')
    const userData = {
      email,
      profile: {
        name,
        gender,
        age,
        phoneNumber,
        city,
        state,
        pin,
      },
    };

    console.log('Sending User Data:', JSON.stringify(userData));

    try {
      const response = await fetch('http://localhost:5000/api/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Profile created successfully!');
        navigate('/home'); // Navigate to home or another page after successful registration
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error submitting user data:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="flex justify-center items-center mt-[110px] ml-[300px] h-[400px] w-[800px] rounded-[50px] bg-[#F8F9FA]">
      <ToastContainer />
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
                    className="mt- w-[150px] bg-red-500 text-white py-3 rounded-[50px] transition-colors"
                  >
                    Register
                  </button>
                </div>

                <div className="flex justify-center text-sm">
                  <span className="text-[15px]">
                    Already have an Account?{' '}
                    <button
                      className="text-blue-500 cursor-pointer hover:underline"
                      
                    ><Link to='/login'>Login</Link>
                      
                    </button>
                  </span>
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
          <>
            {!showUserDataForm ? (
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
                    className="w-[150px] bg-red-500 text-white py-3 rounded-[50px] transition-colors"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            ) : (
              // <form onSubmit={handleUserDataSubmit} className="max-w-md mx-auto">
              //   <h1 className="mb-8 font-bold text-3xl">User Details</h1>

              //   <div className="relative mb-4">
              //     <input
              //       type="text"
              //       value={name}
              //       onChange={(e) => setName(e.target.value)}
              //       placeholder="Name"
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     />
              //   </div>
              //   <div className='grid grid-cols-2'>
              //   <div className="relative mb-4">
              //     <select
              //       value={gender}
              //       onChange={(e) => setGender(e.target.value)}
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     >
              //       <option value="" disabled>Select Gender</option>
              //       <option value="male">Male</option>
              //       <option value="female">Female</option>
              //       <option value="other">Other</option>
              //     </select>
              //   </div>

              //   <div className="relative mb-4">
              //     <input
              //       type="number"
              //       value={age}
              //       onChange={(e) => setAge(e.target.value)}
              //       placeholder="Age"
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     />
              //   </div>

              //   <div className="relative mb-4">
              //     <input
              //       type="text"
              //       value={phoneNumber}
              //       onChange={(e) => setPhoneNumber(e.target.value)}
              //       placeholder="Phone Number"
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     />
              //   </div>

              //   <div className="relative mb-4">
              //     <input
              //       type="text"
              //       value={city}
              //       onChange={(e) => setCity(e.target.value)}
              //       placeholder="City"
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     />
              //   </div>

              //   <div className="relative mb-4">
              //     <input
              //       type="text"
              //       value={state}
              //       onChange={(e) => setState(e.target.value)}
              //       placeholder="State"
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     />
              //   </div>

              //   <div className="relative mb-4">
              //     <input
              //       type="text"
              //       value={pin}
              //       onChange={(e) => setPin(e.target.value)}
              //       placeholder="Pin Code"
              //       required
              //       className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              //     />
              //   </div>
              //   </div>

              //   <div className="flex justify-center items-center">
              //     <button
              //       type="submit"
              //       className="w-[150px] bg-red-500 text-white py-3 rounded-[50px] transition-colors"
              //     >
              //       Submit
              //     </button>
              //   </div>
              // </form>
            navigate('/login')
            )}
          </>
        )}
      </div>
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <LoginForm />
            <button onClick={() => setShowLoginModal(false)} className="mt-4 bg-gray-300 p-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
