import { Link} from "react-router-dom";

const home = () => {
  return (
    <>
      <div id="glassbox" className="w-[30%] h-[80%] flex flex-col items-center justify-center">
        <div id="logofull" className="w-full h-[60%] mt-[5%] flex flex-col items-center justify-start font-audiowide">
          <img id="logomed" className="h-[70%]" src={("../img/logomed.png")} alt="funny medusa logo"/>
          <div id="ashun" className="w-full h-[30%] flex flex-col items-center justify-center">
            <h1 id="logothib" className="">
              THIB
            </h1>
          </div>
        </div>
        <div className="w-[60%] h-[30%] mb-[5%] flex flex-col items-center justify-end gap-[5%]">
          <div id="inputcontainer" className="w-full h-[35%] flex flex-col items-center justify-end">
            <input type="text" id="myinput" placeholder="Your Nickname" className="w-full h-[65%] text-center"/>
          </div>
          <div id="container" className="w-full h-[60%] flex flex-col items-center justify-end">
            <div id="btn" className="w-full h-[85%]">
              <Link to="/lobby" className="w-full h-full">CREATE A LOBBY</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;