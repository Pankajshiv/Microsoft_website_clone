import React, { useState } from 'react'
// import { FaChevronRight } from 'react-icons/fa'
import data from '../../data/officeGrid'

const OfficeGrid = () => {
  const [cards, setCards] = useState(data)

  return (
    <>
      <section className="px-5 sm:pt-10 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:px-20">
        {cards.map((card) => {
          const { id, image, title, p1, p2, link1, link2 } = card

          return (
            <article key={id}>
              <img src={image} alt={title} />
              <h4 className="text-xl font-bold mt-5">{title}</h4>
              <p className="mb-3">{p1}</p>
              <p className="mb-3">{p2}</p>
              <div className="mb-10 xl:flex">
                <p className="flex items-center text-blue-500 font-bold mr-5 hover:underline cursor-pointer">
                  {link1}
                </p>
                <p className="flex items-center text-blue-500 font-bold mr-5 hover:underline cursor-pointer">
                  {link2}
                </p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default OfficeGrid
