import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    // Call your backend API to verify the OTP
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8F9FA]">
      {/* Black background div */}
      <div className="absolute rotate-3 h-[400px] w-[800px] rounded-[50px] bg-black hover:bg-[#F07C7C] "></div>

      {/* White form container */}
      <div className="relative h-[400px] w-[800px] rounded-[50px] border border-black bg-white p-6 z-10 ">
        {!otpSent ? (
          <form
            onSubmit={handleRegistration}
            className="space-y-4 flex flex-col ml-[8px]"
          >
            <div className="w-2/3  fle justify-start items-start">
              <div className="flex flex-col ml-5 justify-start items-start">
                <h2 className="text-2xl font-bold text-left mb-2">Create an Account</h2>
                <p className="text-left text-gray-500 mb-4">Join us for endless learning!</p>
              </div>

              {/* Username Input */}
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

              {/* Email Input */}
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Password Input */}
              <div className="relative mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full border border-gray-300 rounded-[50px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              

              {/* Register Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="mt-2 w-[150px] bg-yellow-500 text-white py-3 rounded-[50px] transition-colors"
                >
                  Register
                </button>
              </div>
              {/* Already have an account link */}
              <div className="flex justify-center text-sm">
                <label className="text-[15px]">
                  Already have an Account?{' '}
                  <Link
                    to="/login"
                    className="ml-2  text-[#1976d2] underline"
                  >
                    Login
                  </Link>
                </label>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="max-w-md mx-auto">
            <h1 className="mb-8 font-bold text-3xl">Verify OTP</h1>

            {/* OTP Input */}
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

            {/* OTP Verification Button */}
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
