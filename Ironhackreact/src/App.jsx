import "./App.css";
import DiscordLogo from "./assets/discord-logo-white.png";
import MenuIcon from "./assets/menu-icon.png";
import BrowserImg from "./assets/discord-background.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="flex justify-between mb-14">
          <img src={DiscordLogo} alt="" className="w-[200px] " />

          <img src={MenuIcon} alt="" />
        </div>

        <div>
          <h1 className="text-white text-6xl font-extrabold mb-6 text-start mt-[100px]">
            IMAGINE A <br /> PLACE...
          </h1>

          <p className="text-white text-[20px] font-medium text-start">
            ...where you can belong to a school club, a gaming group, or a{" "}
            <br />
            worldwide art community. Where just you and a handful of <br />
            friends can spend time together. A place that makes it easy to{" "}
            <br />
            talk every day and hang out more often.
          </p>
        </div>

        <div className="mt-10 text-start flex justify-around gap-[100px]">
          <div className="flex flex-col">
            {" "}
            <button className="bg-white text-[25px] rounded-[30px] py-2 px-9 w-fit ml-0">
              Download for Mac
            </button>
            <button className="bg-black text-[25px] text-white rounded-[30px] py-2 px-9  mt-4 w-fit">
              Open Discord in your Browser
            </button>
          </div>
          <img src={BrowserImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
