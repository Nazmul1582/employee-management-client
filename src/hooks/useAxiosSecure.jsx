import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://talent-pulse-server.vercel.app"
  // baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // request interceptor
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // response interceptor
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        console.log(error);
        const status = error?.response?.status;
        if (status === 401 || status === 403) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
