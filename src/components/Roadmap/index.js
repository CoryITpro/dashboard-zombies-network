import "./style.scss"

import RoadmapItem from "./Item"
import { PHASES } from "constants/index"

const generateRoadmap = () =>
  PHASES.map((item, index) => (
    <RoadmapItem key={index} index={index} content={item} />
  ))

const Roadmap = () => (
  <div className="roadmap flex flex-column">
    <span>Game Roadmap</span>
    {generateRoadmap()}
  </div>
)

export default Roadmap
