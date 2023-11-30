import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Chart = ({email}) => {
    const [salaries, setSalaries] = useState([])
    const axiosSecure = useAxiosSecure()
    const data = salaries.map(item => {
        return {
            name: item.month,
            salary: item.salary
        }
    })

    useEffect(() => {
        const getSalaries = async() => {
            const res = await axiosSecure.get(`/users/employee/salaries?email=${email}`)
            const data = await res.data;
            setSalaries(data)
        }
        getSalaries()
        .catch(error => console.log(error))
    }, [email, axiosSecure])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="salary"
          fill="#8884d8"
          maxBarSize={80}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
