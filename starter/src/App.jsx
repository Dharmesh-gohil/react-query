import { ToastContainer } from 'react-toastify';
// import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
// import { useState } from 'react';
//all are refactor process part andd here we dont required this static data we just fetch through react query 
// const defaultItems = [
//   { id: nanoid(), title: 'walk the dog', isDone: false },
//   { id: nanoid(), title: 'wash dishes', isDone: false },
//   { id: nanoid(), title: 'drink coffee', isDone: true },
//   { id: nanoid(), title: 'take a nap', isDone: false },
// ];
const App = () => {
  // const [items, setItems] = useState(defaultItems);
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      {/* <Items items={items} /> */}
      {/* //here we dont requiredto  pass props bcoz we fetch data from server */}
      <Items />
    </section>
  );
};
export default App;
