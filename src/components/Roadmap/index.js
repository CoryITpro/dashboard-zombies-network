import "./style.scss"

import RoadmapItem from "./Item"

const generateRoadmap = (PHASES) =>
  PHASES.map((item, index) => (
    <RoadmapItem key={index} index={index} content={item} />
  ))

const Roadmap = ({ PHASES }) => (
  <div className="roadmap flex flex-column">
    <span>Game Roadmap</span>
    {generateRoadmap(PHASES)}
  </div>
)

export default Roadmap
