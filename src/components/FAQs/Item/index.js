import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const FAQItem = ({ index, selected, question, answer, setSelected }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    index === selected ? setChecked(true) : setChecked(false)
  }, [selected])

  const onClickHandler = () => {
    setChecked(!checked)
    setSelected(index)
  }

  return (
    <div className="faqs-item flex flex-column">
      <div className="faqs-item-question flex" onClick={onClickHandler}>
        {question}
        <FontAwesomeIcon icon={checked ? faChevronUp : faChevronDown} />
      </div>
      <div className={`faqs-item-answer ${checked && "faqs-item-checked"}`}>
        {checked && answer}
      </div>
    </div>
  )
}

export default FAQItem
