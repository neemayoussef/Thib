import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./home.jsx";
import Lobby from "./lobby.jsx";
import Invite from './invite.jsx';
import LobbyGuest from './lobby-guest.jsx';


const App = () => {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-bggrad bg-cover bg-no-repeat box-border font-orbitron">
        <div id="main"></div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/lobby" element={<Lobby />}></Route>
            <Route path="/lobby-guest" element={<LobbyGuest />}></Route>
            <Route path="/invite" element={<Invite />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    );
};



createRoot(document.getElementById("root")).render(<App />);