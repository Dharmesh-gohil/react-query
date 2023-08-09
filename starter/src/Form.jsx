import { useMutation,useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from "./utils"
import { toast} from "react-toastify"

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
const queryClient=useQueryClient()
  // const result = useMutation({
  const { mutate:createTask,isLoading} = useMutation({

    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: ["tasks"] }),
        toast.success("item added successfully to the list"),
        setNewItemName("")
    },
    // onError: (error) => {console.log(error) }
    onError: (error) => { toast.error(error.response.data.msg)}
    })
    // console.log(result)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName)
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          {/* here we use disabled property of button bcoz wheb we 
          //loading user cant submit another tasks and defalult property 
          //of button is false */}
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
