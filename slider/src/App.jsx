import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [num, setNum] = useState(0)

  const { image, name, title, quote } = data[num]

  const handlePrev = () => {
    if (num <= 0) {
      setNum(data.length - 1)
      return
    }
    setNum(num - 1)
  }

  const handleNext = () => {
    if (num >= data.length - 1) {
      setNum(0)
      return
    }
    setNum(num + 1)
  }

  useEffect(() => {
    let id = setTimeout(handleNext, 4000)
    return () => clearTimeout(id)
  }, [num])

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        <article>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        <button className="prev" onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
