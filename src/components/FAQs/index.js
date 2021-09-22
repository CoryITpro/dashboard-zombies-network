import "./style.scss"

import { useState } from "react"

import FAQItem from "./Item"

const generateFAQs = (selected, setSelected, FAQItems) =>
  FAQItems.map((item, index) => (
    <FAQItem
      key={index}
      index={index}
      selected={selected}
      question={item.question}
      answer={item.answer}
      setSelected={setSelected}
    />
  ))

const FAQs = ({ SubTitles, FAQItems }) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="faqs flex flex-column">
      <div className="subtitle flex flex-column">
        {SubTitles.FAQs.title}
        <span>{SubTitles.FAQs.subTitle}</span>
      </div>
      <div className="faqs-comment">{SubTitles.FAQs.subHeading}</div>
      <div className="faqs-items flex flex-column">
        {generateFAQs(selected, setSelected, FAQItems)}
      </div>
    </div>
  )
}

export default FAQs
