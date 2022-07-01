
import './App.css';
import Nav from './Nav';
import { Routes, Route } from "react-router-dom";
import CompletedTask from './Components/CompletedTask';
import Todo from './Components/Todo';
import Calender from './Components/Calender';
import Home from './Components/Home';
import UpdateList from './Components/UpdateList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='updateList/:id' element={<UpdateList></UpdateList>}></Route>

        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
