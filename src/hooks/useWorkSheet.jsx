import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWorkSheet = (email) => {
    const axiosSecure = useAxiosSecure();
    const { data: workSheet = [], refetch, isLoading: loading} = useQuery({
        queryKey: ["work-sheet"],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/employee/work-sheet${email ? `?email=${email}` : ""}`);
            return res.data
        }
    })
    return [workSheet, refetch, loading];
};

export default useWorkSheet;