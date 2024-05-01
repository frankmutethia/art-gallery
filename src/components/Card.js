import React from 'react'

const Card = ({imageSrc, title, description}) => {
  return (
    <div>
          <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={imageSrc} alt="Card" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div> 
    </div>
  )
}

export default Card