import React from 'react'
// import { FaChevronRight } from 'react-icons/fa'
import data from '../../data/learnMore'

const LearnMore = () => {
  const [items, setItems] = React.useState(data)

  return (
    <>
      <section className="grid grid-cols-2 gap-10 px-10 py-10 lg:flex items-center justify-between xl:px-56">
        {items.map((item) => {
          const { id, image, title, link } = item

          return (
            <article key={id}>
              <img src={image} alt="" className="mb-2" />
              <h4 className="font-bold">{title}</h4>
              <p className="flex items-center text-blue-500 hover:underline cursor-pointer">
                {link} 
              </p>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default LearnMore
