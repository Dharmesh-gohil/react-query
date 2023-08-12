import { useQuery ,useMutation,useQueryClient, } from "@tanstack/react-query"
import customFetch from "./utils"
import { toast } from "react-toastify"

export const  useFetchCustomTasks = () => { 
const { isLoading,data,isError,error}=useQuery({
    queryKey: ["tasks"],
    // queryFn: () => customFetch.get("/")
    //this will return data.data so we can use another way like to destructer it 
    //so we have to loop only data.taskList only not data.data.taskList
    queryFn: async () => {
      const {data} = await customFetch.get("/")
    return data
    }
})
    return {isError,isLoading,error,data}
}

export const useCreateTask = () => {
const queryClient=useQueryClient()
  // const result = useMutation({
  const { mutate:createTask,isLoading} = useMutation({

    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: ["tasks"] }),
        toast.success("item added successfully to the list")
        // setNewItemName("")
    },
    // onError: (error) => {console.log(error) }
    onError: (error) => { toast.error(error.response.data.msg)}
    })
    return {createTask,isLoading}
 }
export const useEditTask = () => { 
    const queryClient =useQueryClient()
    const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["tasks"]})
      toast.success("item updated successfully to the list")
    },
        onError: (error) => { toast.error(error.response.data.msg)}

    })
    return {editTask}
}
export const useDeleteTask = () => { 
    const queryClient=useQueryClient()
    const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["tasks"]})
      toast.success("item deleted successfully to the list")
     },
        onError: (error) => { toast.error(error.response.data.msg)}
    })
    return {deleteTask,isLoading}
}