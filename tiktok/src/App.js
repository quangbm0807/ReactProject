import { useState } from 'react';
import Content from './Content';


// const gifts = ['CPU i9',
//   'RAM 16GB',
//   'SSD 512GB'
// ];

// function App() {
//   // const [count, setCount] = useState(0);

//   // const handleClick = () => {
//   //   setCount(count=>count+1);
//   // };
//   const  [gift, setGift] = useState();

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[index]);
//   };
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift} > Lấy thưởng</button>
//     </div>
//   );
// }

// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]


// function App1() {
//   const [checked, setChecked] = useState([]);
//   const handleSubmit = () => {
//     console.log({ ids: checked })
//   };

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter(item => item !== id);
//       }

//       return [...prev, id];
//     });
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <label>
//             <input
//               type="checkbox"
//               name="course"
//               value={course.id}
//               onChange={() => handleCheck(course.id)}
//               checked={checked.includes(course.id)}
//             />
//             {course.name}
//           </label>
//         </div>
//       ))}
//       <button onClick={handleSubmit} type="submit">Register</button>
//     </div>
//   );
// }



function App() {

  // const [tasks, setTasks] = useState(() => {
  //   const tasks = localStorage.getItem('tasks');
  //   return tasks ? JSON.parse(tasks) : [];
  // });
  // const [task, setTask] = useState('');
  // const handleAddTask = (newTask) => {
  //   if (newTask && !tasks.includes(newTask)) {
  //     setTasks((prevTasks) => {
  //       const newTasks = [...prevTasks, newTask];
  //       localStorage.setItem('tasks', JSON.stringify(newTasks));
  //       return newTasks
  //     });
  //     setTask('');
  //   }
  // };
  const [mounted, setMounted] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {/* <input
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={
          () => handleAddTask(task)}
      >
        Add
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul> */}
      <button onClick={() => setMounted(!mounted)} >Click</button>
      {mounted && <Content />}
    </div>
  );
}



export default App;

