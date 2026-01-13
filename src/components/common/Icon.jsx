import React from 'react'

const Icon = ({icon: Icon , text}) => {
  return (
    <div className='group relative flex justify-center items-center'>
                        <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-2 '>
                            <Icon className='scale-[2]'/>
                        </div>
                        <span className='absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 '>{text}</span>
                        
                    </div>
  )
}

export default Icon
