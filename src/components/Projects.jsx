import { Link } from "react-router-dom";
import sliceOverflowImage from "../assets/sliceOverflow.png";
import expressImage from "../assets/Express-Note-Taker.png";
import taskBoardImage from "../assets/Task-Board.png";
import weatherDashboardImage from "../assets/WeatherDashboard.png";



const Projects = () => {
  return (
    <>
      <div className="bg-white rounded-md m-8 p-8 ">
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

      <div className="bg-white rounded-md m-8 p-8 ">
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

      <div className="bg-white rounded-md m-8 p-8">
        <img src={taskBoardImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/project-task-board.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Task Board
        </Link>
      </div>

      <br></br>

      <div className="bg-white rounded-md m-8 p-8">
        <img src={weatherDashboardImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/weather-dashboard.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Weather Dashboard
        </Link>
      </div>
    </>
  );
};

export default Projects;
