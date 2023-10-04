import React from 'react'

interface TitleProps {
  title: string;
}

export const Title = ({title} : TitleProps) => {
  return (
    <>
    <div className='text-gray-800 font-sans text-xl'>{title}</div>
    </>
  )
}

export default Title