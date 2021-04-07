import React, { useState } from 'react'
import data from '../data/section1'

const Section1 = () => {
  const [cards, setCards] = useState(data)

  return (
    
    <section className="md:grid grid-cols-2 xl:grid-cols-4 my-8 xl:mx-50 yourMS">
      {cards.map((card) => {
        const { id, text, image } = card

        return (
          <article key={id} className="flex items-center px-6 py-2">
            <img src={image} alt="card" />
            <p className="mx-3 font-semibold cursor-pointer hover:underline">
              {text}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default Section1
