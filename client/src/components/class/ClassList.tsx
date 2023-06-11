import React from 'react'

import TClass from "@/types/Class"

import Class from './Class'

interface ClassListProps {
  classList : TClass[]
}

export const ClassList = ({classList} : ClassListProps) => {
  return (
    <>
      {
        classList.map((classInfo) => (
          <Class key={classInfo.subjectCode} classInfo={classInfo}/>
        ))
      }
    </>
  )
}

export default ClassList