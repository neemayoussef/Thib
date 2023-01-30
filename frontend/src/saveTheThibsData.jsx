import { Rulestabs } from "./rulestabs"
import { rules } from "./rules-data"

export const saveTheThibsData = [
    {id : '1',
     tabTitle: <>
     <h2 id="settings" className="h-full flex justify-center items-center">
       SETTINGS
     </h2>
   </>,
     tabContent: 
      <div id="tabcontent" className="w-full h-full flex items-center justify-center">
        <label id="onebomb" className="w-[50%] h-full flex flex-col items-center justify-center pt-[1.5%] pb-[0.75%] px-[3%] cursor-pointer">
          <input type="radio" className="peer sr-only" name="bomb" defaultChecked/>
          <div id="setmain" className="w-full h-[17.75%] flex items-center justify-center bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">ONE BOMB VERSION</div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[4%]">TIME PER TURN</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="timeperturnob" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">UNLIMITED</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="timeperturnob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">1 MINUTE</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="timeperturnob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">3 MINUTES</p>
                  </div>
              </div>
            </label>
          </div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[1%]">4 PLAYERS</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="fourplayersob" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">RANDOM</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="fourplayersob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">2 VS 2</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="fourplayersob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">1 VS 3</p>
                  </div>
              </div>
            </label>
          </div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[1%]">6 PLAYERS</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="sixplayersob" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">RANDOM</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="sixplayersob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">3 VS 3</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="sixplayersob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">2 VS 4</p>
                  </div>
              </div>
            </label>
          </div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[1%]">8 PLAYERS</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="heightplayersob" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">RANDOM</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="heightplayersob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">4 VS 4</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="heightplayersob"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">3 VS 5</p>
                  </div>
              </div>
            </label>
          </div>
        </label>
        <label id="multibomb" className="w-[50%] h-full flex flex-col items-center justify-center pt-[1.5%] pb-[0.75%] px-[3%] cursor-pointer">
          <input type="radio" className="peer sr-only" name="bomb"/>
          <div id="setmain" className="w-full h-[17.75%] flex items-center justify-center bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">MULTIBOMB VERSION</div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[4%]">TIME PER TURN</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="timeperturnmb" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">UNLIMITED</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="timeperturnmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">1 MINUTE</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="timeperturnmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">3 MINUTES</p>
                  </div>
              </div>
            </label>
          </div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[1%]">4 PLAYERS</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="fourplayersmb" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">RANDOM</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="fourplayersmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">2 VS 2</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="fourplayersmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">1 VS 3</p>
                  </div>
              </div>
            </label>
          </div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[1%]">6 PLAYERS</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="sixplayersmb" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">RANDOM</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="sixplayersmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">3 VS 3</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="sixplayersmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">2 VS 4</p>
                  </div>
              </div>
            </label>
          </div>
          <div id="setparam" className="w-full h-[5%] flex items-center justify-center mt-[1%]">8 PLAYERS</div>
          <div className="w-full h-[15%] flex items-center justify-center gap-[5%]">
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="heightplayersmb" defaultChecked/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">RANDOM</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="heightplayersmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">4 VS 4</p>
                  </div>
              </div>
            </label>
            <label className="w-[30%] h-full flex items-center justify-center cursor-pointer">
              <input type="radio" className="peer sr-only" name="heightplayersmb"/>
              <div id="setbtn" className="w-full h-[70%] bg-lightblue bg-opacity-25 text-darkpurple rounded-md transition-all border-solid border-lightblue border-opacity-25 border-[1px] peer-checked:text-lightblue peer-checked:border-solid peer-checked:border-pink peer-checked:border-[1px] peer-checked:bg-darkpurple">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full flex items-center justify-center">3 VS 5</p>
                  </div>
              </div>
            </label>
          </div>
        </label>
      </div>   
    },
    {id : '2',
     tabTitle: <>
     <h2 id="rules" className="h-full flex justify-center items-center">
       RULES
     </h2>
   </>,
     tabContent: 
     <>
      <Rulestabs key={45} className="w-full h-full" data={rules}/>
     </>
    },
  ]
  