import { useState } from 'react';
import Content from './component/Content';
import Lession from './component/Lession';
import LayOutEffect from './component/LayOutEffect';
import UseRefHook from './component/UseRefHook';
// import ContentEffectTimeout from './component/ContentEffectTimeout';
// import PreviewAvt from './component/PreviewAvt';

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
  const [showContent, setShowContent] = useState(false);
  const [showLession, setShowLession] = useState(false);
  const [showLayoutEffect, setShowLayoutEffect] = useState(false);
  const [showUseRef, setShowUseRef] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShowContent(!showContent)} >Content API</button>
      {showContent && <Content />}
      <button onClick={() => setShowLession(!showLession)} >Remove Memory Leak</button>
      {showLession && <Lession />}
      <button onClick={() => setShowLayoutEffect(!showLayoutEffect)} >Use LayoutEffect</button>
      {showLayoutEffect && <LayOutEffect />}
      <button onClick={() => setShowUseRef(!showUseRef)} >Use UseRefHook</button>
      {showUseRef && <UseRefHook />}
    </div>
  );
}



export default App;

