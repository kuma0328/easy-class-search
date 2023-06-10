import React from 'react'

import LaunchIcon from '@mui/icons-material/Launch';

interface ClassProps {
  subjectName : string;
  subjectCode : string;
  teacherName : string;
  season : string;
  place : string;
  classTime: string;
  rankA : number;
  rankB : number;
  rankC : number;
  rankD : number;
  rankE : number;
  rankF : number;
}

export const Class = ({subjectName, subjectCode, teacherName, season, place, classTime, rankA, rankB, rankC, rankD, rankE, rankF} : ClassProps) => {
  return (
    <>
    <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='text-gray-400'>{subjectCode}</div>
          <div className='text-2xl pt-2'>{subjectName}</div>
          <div className='pt-2'>{teacherName}</div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='text-fuchsia-400 pr-2'>{season}</div>
            <div className='pr-2'>{place}</div>
            <div className='pr-2'>{classTime}</div>
          </div>
          <div className='flex pt-2'>
            <div className='text-4xl pr-2 text-red-600'>F率  {rankF}%</div>
            <div className='text-3xl text-sky-600'>A率  {rankA}%</div>
          </div>
          <div className='flex pt-2'>
            <div className='pr-2'>B:{rankB}</div>
            <div className='pr-2'>C:{rankC}</div>
            <div className='pr-2'>D:{rankD}</div>
            <div className='pr-2'>E:{rankE}</div> 
            <LaunchIcon></LaunchIcon>
          </div>
        </div>
      </div>
    </>
  )
}

export default Class