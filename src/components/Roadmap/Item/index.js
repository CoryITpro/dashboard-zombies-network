import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"

const generateItem = (index, content) => {
  content = index % 2 === 1 ? [...content].reverse() : [...content]

  return content.map((item, index) => {
    if (typeof item === "string") {
      return (
        <>
          <div key={index} className="roadmap-item-image flex">
            <img src={item} alt="phase" />
          </div>
          {index === 0 && (
            <div className="roadmap-road flex flex-column">
              <div></div>
            </div>
          )}
        </>
      )
    } else {
      return (
        <>
          <div key={index} className="roadmap-item-phase flex flex-column">
            <div className="roadmap-item-phase-title">{item.title}</div>
            <div className="roadmap-item-phase-content flex flex-column">
              {item.content.map((steps, index) => (
                <div
                  key={index}
                  className={`roadmap-item-phase-content-steps flex ${
                    steps.status && "completed"
                  }`}
                >
                  <div>
                    <FontAwesomeIcon icon={steps.status ? faCheck : faTimes} />
                  </div>
                  <div className="roadmap-item-phase-content-steps-title">
                    {steps.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {index === 0 && (
            <div className="roadmap-road flex flex-column">
              <div></div>
            </div>
          )}
        </>
      )
    }
  })
}

const RoadmapItem = ({ index, content }) => (
  <div key={index} className="roadmap-item flex">
    {generateItem(index, content)}
  </div>
)

export default RoadmapItem
