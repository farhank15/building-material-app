import React, { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Bg from "@assets/images/Login-signin.webp";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usernameCookie = Cookies.get("username");
    if (usernameCookie) {
      navigate("/"); // Redirect to home page if already logged in
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    if (!username || !password) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Username dan password harus diisi.",
      });
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/users`);
      const user = response.data.find((user) => user.username === username);

      if (!user) {
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: "Username tidak ditemukan.",
        });
        return;
      }

      if (user.password !== password) {
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: "Password salah.",
        });
        return;
      }

      // User found and password correct
      const cookieOptions = rememberMe
        ? { expires: 7 } // Persistent for 7 days
        : {}; // Session cookie
      Cookies.set("username", user.username, cookieOptions); // Set a cookie
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: "Anda berhasil masuk!",
      }).then(() => {
        navigate("/"); // Redirect to home page
        window.location.reload(); // Refresh the page
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Terjadi kesalahan saat login. Silakan coba lagi.",
      });
    }
  };

  const handleForgotPassword = () => {
    Swal.fire({
      icon: "info",
      title: "Lupa Password?",
      html: 'Silakan hubungi admin untuk mereset password Anda. <br><br> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-800">Klik di sini untuk menghubungi via WhatsApp</a>',
      confirmButtonText: "OK",
    });
  };

  return (
    <div
      className="flex items-center justify-end min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-full max-w-md p-8 m-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h2 className="mb-4 text-4xl font-bold text-center text-primary">
          Sign In
        </h2>
        <form className="w-full">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 mb-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="text-sm text-gray-700" htmlFor="rememberMe">
                Ingat saya
              </label>
            </div>
            <button
              type="button"
              className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
              onClick={handleForgotPassword}
            >
              Lupa Password?
            </button>
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 font-bold text-white rounded bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link className="text-blue-500 hover:text-blue-800" to="/signup">
                Daftar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
