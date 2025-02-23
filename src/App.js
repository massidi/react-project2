import './App.css';
import Nav from "./components/Nav";
import ModeToggler from "./componentTest/ModeToggler";
import ColorToggle from "./componentTest/ColorToggle";
import BoxeColor from "./componentTest/BoxeColor";
import TodoApp from "./componentTest/TodoReducer";

import {Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";


function App() {


    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/contact" element={ <Contact/>}></Route>
            </Routes>

            <TodoApp/>
            <ModeToggler/>
            <ColorToggle/>
            <BoxeColor></BoxeColor>


        </>


    );
}

export default App;
