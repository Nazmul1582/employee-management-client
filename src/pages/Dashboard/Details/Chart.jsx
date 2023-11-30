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
import useSalary from "../../../hooks/useSalary";

const Chart = ({email}) => {
    const [salaries] = useSalary(email)
    const data = salaries.map(item => {
        return {
            name: `${item.month.slice(0, 3)} ${item.year.toString().slice(-2)}`,
            salary: item.salary
        }
    })


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
