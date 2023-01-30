import { useState } from "react";
import { Link} from "react-router-dom";
import { ConfirmDialog } from "./confirm";
import { Tabs } from "./tabs";
import { saveTheThibsData } from "./saveTheThibsData";
import useCopyToClipboard from "./clipboard";
import { ticTacToeData } from "./tic-tac-toe-data";

const lobbyGuest = () => {

  const [confirm, setConfirm] = useState(false)

  const onSubmit = () => {
    setConfirm(true)
  }

  const onConfirm = () => {
    setConfirm(false)
  }

  const [value, copy] = useCopyToClipboard()

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if(isClickedGame1){
      setIsClickedGame1(!isClickedGame1);
    }
    if(isClickedGame2) {
      setIsClickedGame2(!isClickedGame2);
    }
  };

  const [isClickedGame1, setIsClickedGame1] = useState(false);

  const handleClickGame1 = () => {
    setIsClicked(!isClicked);
    setIsClickedGame1(!isClickedGame1);
  };

  const [isClickedGame2, setIsClickedGame2] = useState(false);

  const handleClickGame2 = () => {
    setIsClicked(!isClicked);
    setIsClickedGame2(!isClickedGame2);
  };

  return (
    <>
      <div id="lobby" className="w-[85%] h-[80%] flex items-center justify-center gap-[0.5%] mx-[0.25%]">
        <div id="leftside" className="w-[25%] h-full flex flex-col items-center justify-center">
          <div id="lefttop" className="w-full h-[20%] flex items-center justify-center">           
            <div id="twologos" className="w-full h-full flex items-center justify-center">
              <img id="smlogomed" className="w-[30%] h-auto" src={("../img/logomed.png")} alt="funny medusa logo"/>
              <div id="smashun" className="">
                <h1 id="smlogothib" className="font-audiowide">THIB</h1>
              </div>
            </div>
          </div>
          <div id="minibox" className="w-full h-[79%] flex flex-col items-center justify-center">
            <div id="lobbyinfos" className="w-[80%] h-[13.5%] flex flex-col items-center justify-center">
              <div id="playersonline" className="w-full h-full flex items-center justify-center">PLAYERS 1/8</div>
            </div>
            <div id="lobbyplayers" className="w-[80%] h-[86.5%] flex flex-col items-center justify-start gap-[3%] pb-[2.2%]">
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">BEN</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
              <div id="playeron" className="w-[100%] h-[9.6%] flex items-center justify-center">EMPTY</div>
            </div>
          </div>
        </div>
        <div id="rightside" className="w-[74%] h-full flex flex-col items-center justify-center">
            <div id="righttop" className="w-full h-[20%] flex items-center justify-around">

                <div id="container" className={!isClicked ? "w-1/3 h-full flex items-center justify-end" : "collapse w-[0%] h-[0%]"}>
                    <div id="btn" className="w-[75%] h-[60%]">
                        <Link className="w-full h-full" onClick={onSubmit}>
                            BACK
                        </Link>
                    </div>
                </div>

                <div id="container" className={isClicked ? "w-1/3 h-full flex items-center justify-end" : "collapse w-[0%] h-[0%]"}>
                    <div id="btn" className="w-[75%] h-[60%]">
                        <Link className="w-full h-full" onClick={handleClick}>
                            BACK
                        </Link>
                    </div>
                </div>


                <div id="container" className="w-2/3 h-full flex items-center justify-center">
                  <p id="loading">C</p>
                  <p id="waiting" className="font-orbitron text-center">
                    wait for the admin to start the game
                  </p>
                </div>

            </div>

            <div id="minibox" className="w-full h-[79%]">
                <div className={isClicked ? "collapse w-[0%] h-[0%]" : "w-full h-full flex items-center justify-around" }>
                    <div id="game" onClick={handleClickGame1} className=" w-[23%] h-[93%] flex flex-col items-start justify-center bg-jelly bg-cover bg-no-repeat bg-center">
                        <h3 id="gamename" className="w-[20%] h-full flex flex-col justify-start mt-[5%] ml-[5%]">
                            SAVE THE THIBS
                        </h3>
                    </div>

                    <div id="game2" className={!isClicked ? " w-[23%] h-[93%] flex flex-col items-start justify-center bg-tele bg-cover bg-no-repeat bg-center": "collapse w-[0%] h-[0%]"}>
                        <h3 id="gamename2" className="w-[20%] h-full flex flex-col justify-start mt-[5%] ml-[5%]">
                            TELEPATHIB
                        </h3>
                    </div>

                    <div id="game3" onClick={handleClickGame2} className={ !isClicked ? "w-[23%] h-[93%] flex flex-col items-start justify-center bg-cover bg-no-repeat bg-center": "collapse w-[0%] h-[0%]"}>
                        <h3 id="gamename3" className="w-[20%] h-full flex flex-col justify-start mt-[5%] ml-[5%]">
                            OXO
                        </h3>
                    </div>

                    <div id="game4" className={ !isClicked ? "w-[23%] h-[93%]" : "collapse w-[0%] h-[0%]"}>
                    </div>
                </div>

                <div className={!isClicked ? "collapse w-[0%] h-[0%]": "w-full h-full"}>
                    <div className={!isClickedGame1 ? "collapse w-[0%] h-[0%]": "w-full h-full"}>
                        <Tabs data={saveTheThibsData} />
                    </div>

                    <div className={!isClickedGame2 ? "collapse w-[0%] h-[0%]": "w-full h-full"}>
                        <Tabs data={ticTacToeData} />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <ConfirmDialog onConfirm={onConfirm} onCancel={() => setConfirm(false)} open={confirm}/>
    </>
  );
};

export default lobbyGuest;