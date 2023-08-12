import { useMutation ,useQueryClient} from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";
import { useDeleteTask, useEditTask } from "./useReactQueryCustomHooks";

const SingleItem = ({ item }) => {
const queryClient=useQueryClient()
  const { editTask}=useEditTask()
  const { deleteTask,isLoading}=useDeleteTask()
 


  // console.log(item)
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId:item.id,isDone:!item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={ isLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
