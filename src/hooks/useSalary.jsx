import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useSalary = (email) => {
    const [salaries, setSalaries] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        const getSalaries = async() => {
            const res = await axiosSecure.get(`/users/employee/salaries?email=${email}`)
            const data = await res.data;
            setSalaries(data)
        }
        getSalaries()
        .catch(error => console.log(error))
    }, [email, axiosSecure])
    return [salaries]
};

export default useSalary;