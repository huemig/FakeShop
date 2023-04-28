import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Jhead';
import ProductListing from './container/productlisting';
import ProductDetails from './container/product-details';

//Switch not found in react-router-dom

//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import {Home} from './pages/Home';
//import { Contact } from './pages/Contact';
//import { Profile } from './pages/Profile';
//import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
//import { useToggle } from './components/useToggle';
//import {Task} from './task';
//import {Text} from './Text';
//import Axios from 'axios';


/** 
function App(){
  const [count, setCount] = useState(0);


   return (
    <div className='App'> 
     <button onClick={() => {setCount(count +1)}}> Increase</button>
     <button onClick={()=>{setCount(count-1)}}> Decrease</button>
     <button onClick={()=> {setCount(0)}} >set to zero</button>

     {count}

    </div>  
  );
};

function App(){
  const Ppl = [
    {name: "Miguel", age:25},
    {name: "Peter", age:30},
    {name: "Ryan", age:21},
  ];
  return (
    <div className='App'>
      {Ppl.map((user, key) =>{
        return  <User name={user.name} age={user.age}/>;
          

    })}
    </div>

  )
}
const User = (props) =>{
  return(
  <div>
    {props.name} {props.age}
  </div>
  );
};




function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 :todoList[todoList.length - 1].id +1 ,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task])
  };
  const deleteTask = (id) => {
     setTodoList(todoList.filter((task)=> task.id !== id))
    };
   

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>{
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
  };
  
  return (
     <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName={task.taskName}
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask} />;  
        })}
      </div>
    </div>
  );
}




function App(){
  const [showText, setShowText]= useState(false);
  
  return (
  <div className='App'>
    <button
     onClick={() => {
      setShowText(!showText);
    }}
    >Show Text</button>
    {showText && <Text />}
  </div>
  );
}




function App(){

  const [name, setName] = useState("")

  const [predictedAge, setPredictedAge] = useState(null);


  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>
    setPredictedAge(res.data))
  };
  return (
    <div className='App'>
      <input 
        placeholder='Your Name'
        onChange={(event)=> {
        setName(event.target.value)
      }}/>
      <button onClick={fetchData}> Predict Age</button>
      <p>Age:{predictedAge?.age}</p>
      <p>Name:{predictedAge?.name} </p>
      <p>Count:{predictedAge?.count}  </p>
    </div>
  );
}


//[10]



export const AppContext =createContext();

function App() {

  const [username, setUsername] = useState('');
  const client = new QueryClient();
 
  return (

    <div className='App'>
      <QueryClientProvider client={client}>
      
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Link to='/'>Home  </Link>
          <Link to='/Profile'>Profile</Link>
          <Link to='/contact'>Contact</Link>
          <Routes>
            <Route path='/'element= {<Home/> }/>
            <Route path='/contact'element= {<Contact  /> }/>
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<h1>Page No el find</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}




//[12] custom hooks

function App() {
  const [isVisible, toggle]= useToggle()
  
  return (
    <div className='App'>
      <button onClick={toggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <h1> Hidden Text</h1>}
    </div>
  );
}
*******/

// minute 20 pick up the pace slack off

function App() {
  return (
    <div className='App'>
      <Router>

        <Header />
        <Routes>
      
        <Route path="/" element={<ProductListing/>} />
        <Route path={ "/product/:productId" } element={<ProductDetails/>} />
        <Route>404 not found</Route>
   
        </Routes>
        
      </Router>

    </div>
  )
}


export default App;

// u s r
