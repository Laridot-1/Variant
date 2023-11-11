import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [obj, setObj] = useState(() => {
    let det = {}
    for (let i = 1; i <= data.length; i++) {
      det[i] = false
    }
    return det
  })
  // console.log(obj)

  const handleToggle = (id) => {
    let newObj = { ...obj }
    newObj[id] = !newObj[id]
    for (const key in newObj) {
      // console.log(typeof key, typeof id)
      if (id != key) newObj[key] = false
    }
    setObj(newObj)
  }

  return (
    <main>
      <div className="container">
        <h3>questions</h3>
        <section>
          {
            data.map(question => {
              return <SingleQuestion key={question.id} obj={obj} {...question} handleToggle={handleToggle} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App;
