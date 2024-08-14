import { Link } from "react-router-dom";
import sliceOverflowImage from "../assets/sliceOverflow.png";
import expressImage from "../assets/Express-Note-Taker.png";
import taskBoardImage from "../assets/Task-Board.png";
import weatherDashboardImage from "../assets/WeatherDashboard.png";



const Projects = () => {
  return (
    <>
    <div className="flex flex-row mt-52">
      <div className="bg-white rounded-md m-8 p-8 border-4">
        <img src={sliceOverflowImage} width={700} height={250}></img>

        <br></br>
        <Link
          to="https://sliceoverflow-1.onrender.com/"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Slice Overflow
        </Link>
      </div>

      <br></br>


      <br></br>

      <div className="bg-white rounded-md m-8 p-8 border-6">
        <img src={weatherDashboardImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/weather-dashboard.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Weather Dashboard
        </Link>
      </div>
      </div>

      <div className="flex flex-row mt-40">
      <div className="bg-white rounded-md m-8 p-8 border-4">
        <img src={expressImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/Express-Note-Taker.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Express Note Taker
        </Link>
      </div>

      <br></br>

      <div className="bg-white rounded-md m-8 p-8 border-6">
        <img src={taskBoardImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/project-task-board.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Task Board
        </Link>
      </div>
      </div>
    </>
  );
};

export default Projects;
