import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: "https://talent-pulse-server.vercel.app"
    baseURL: "http://localhost:5000"
})

export default axiosPublic;