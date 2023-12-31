import SingleItem from './SingleItem';
import { useFetchCustomTasks } from './useReactQueryCustomHooks';
// import { useQuery } from '@tanstack/react-query';
// import customFetch from "./utils"

// const Items = ({ items }) => { we removing props items data so we can use react query data
  const Items = () => {
  //here axios return promise but we use customFetch so it also return promise coz it also contain axios
  // const result = useQuery({
    const { isLoading,data,isError,error}=useFetchCustomTasks()
  // console.log(result)
  // console.log(data)
  if (isLoading) { 
    return <p style={{marginTop:"2rem "}}> Loading....</p>
  }

  if (isError) { 
    return <p style={{marginTop:"2rem "}}> There is an error ....</p>
  }
// console.log(error)
//  if (error) { 
//    return <p style={{ marginTop: "2rem " }}> { error.message}{ error.response.data}</p>
//   }

  return (
    <div className='items'>
      {/* {items.taskList.map((item) => { */}
      {/* {data.data.taskList.map((item) => { */}
      {data.taskList.map((item) => {
    
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
