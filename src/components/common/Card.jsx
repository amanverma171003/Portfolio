import React from 'react'

const Card = ({image,projectHeading,projPara,skill1,skill2,link}) => {
  return (
    <div className='bg-white rounded-2xl shadow-2xl overflow-hidden object-fill'>
        <img src={image} className='w-full h-64 object-fill' />

        <div className='p-5 md:p-6'>
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>{projectHeading}</h3>
            <p className='text-gray-700 mb-4 line-clamp-2 md:line-clamp-4'>{projPara}</p>

            <div className='flex flex-wrap gap-2 mb-4'>
                <span className='skill-pill'>{skill1}</span>
                <span className='skill-pill'>{skill2}</span>
            </div>
            <div className='flex items-center gap-4'>
                <a href={link} className='inline-flex items-center gap-2 font-semibold hover:underline' target='_blank'></a>
            </div>
        </div>
    </div>
  )
}

export default Card
