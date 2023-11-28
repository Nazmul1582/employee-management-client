import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../utils/AxiosPublic";

const useUser = () => {
    const { data: users = [], refetch, isPending:loading} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosPublic.get("/users")
            return res.data
        }
    })
    return [users, refetch, loading]
};

export default useUser;