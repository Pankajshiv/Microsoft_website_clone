import React, { useState } from 'react'
import data from '../data/section3'
// import { FaChevronRight } from 'react-icons/fa'

const Section2 = () => {
  const [cards, setCards] = useState(data)

  return (
    <>
    <h2 className="font-semibold text-2xl mt-20 px-20">For business</h2>
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
      {cards.map((card) => {
        const { id, image, title, desc, link } = card

        return (
          <article key={id} className="p-4">
            <div>
              <img src={image} alt="card" />
              <h3 className="font-semibold text-xl mt-8 mb-2">{title}</h3>
              <p>{desc}</p>
              <p className="mb-8 cursor-pointer hover:underline text-blue-600 font-semibold">
                {link}
              </p>
            </div>
          </article>
        )
      })}
    </section>
    </>
  )
}

export default Section2
