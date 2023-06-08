import React from 'react'



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
      <div className="text-5xl">{subjectName}</div>
      <div>{subjectCode}</div>
      <div>{teacherName}</div>
      <div>{season}</div>
      <div>{place}</div>
      <div>{classTime}</div>
      <div>{rankA}</div>
      <div>{rankB}</div>
      <div>{rankC}</div>
      <div>{rankD}</div>
      <div>{rankE}</div>
      <div>{rankF}</div>
    </>
  )
}

export default Class