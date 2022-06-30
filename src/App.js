
import './App.css';
import Nav from './Nav';
import { Routes, Route } from "react-router-dom";
import CompletedTask from './Components/CompletedTask';
import Todo from './Components/Todo';
import Calender from './Components/Calender';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
