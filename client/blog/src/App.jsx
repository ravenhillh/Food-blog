import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import NewPost from "./components/NewPost";
import Bio from "./components/Bio";
import Photos from "./components/Photos";
import Contacts from "./components/Contacts";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/post/:slug' element={<Details />} />
                <Route path='/post/new' element={<NewPost />} />
                <Route path='/bio' element={<Bio />} />
                <Route path='/photos' element={<Photos />} />
                <Route path='/contact' element={<Contacts />} />
            </Routes>
        </Router>
    );
};

export default App;