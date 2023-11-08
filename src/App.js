
import './App.css';
import { Routes, Route } from "react-router-dom";
import CompletedTask from './Components/CompletedTask';
import Todo from './Components/Todo';
import Calender from './Components/Calender';
import Home from './Components/Home';
import UpdateList from './Components/UpdateList';
import Footer from './Footer';
import TestTool from './Components/TestTool';
import TestToolTwo from './Components/TestToolTwo';
import TestToolThree from './Components/TestToolThree';
import TestToolThreeV2 from './Components/TestToolThreeV2';
import Nav from './Nav';




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
        <Route path='/testTool' element={<TestTool></TestTool>}></Route>
        <Route path='/testToolTwo' element={<TestToolTwo></TestToolTwo>}></Route>
        <Route path='/testToolThree' element={<TestToolThree></TestToolThree>}></Route>
        <Route path='/testToolThreeV2' element={<TestToolThreeV2></TestToolThreeV2>}></Route>


      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
