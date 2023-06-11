import type { Meta, StoryObj } from '@storybook/react'
import { ClassList } from './ClassList'

import TClass from '@/types/Class'

const meta: Meta<typeof ClassList> = {
  title: 'ClassList',
  component: ClassList,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ClassList>

const classList : TClass[] = [
  {
    subjectName : "雇用関係法",
    subjectCode : "1103-0039",
    teacherName : "田中 太郎",
    season : "春",
    place : "今出川",
    classTime: "水曜1限",
    rankA : 32,
    rankB : 10,
    rankC : 10,
    rankD : 10,
    rankE : 10,
    rankF : 9,
  },
  {
    subjectName : "日本語",
    subjectCode : "1133-0329",
    teacherName : "田中 太郎2",
    season : "春",
    place : "今出川",
    classTime: "水曜2限",
    rankA : 32,
    rankB : 10,
    rankC : 10,
    rankD : 10,
    rankE : 10,
    rankF : 9,
  },
  {
    subjectName : "韓国語",
    subjectCode : "1123-9939",
    teacherName : "田中 太郎3",
    season : "春",
    place : "今出川",
    classTime: "水曜1限",
    rankA : 32,
    rankB : 10,
    rankC : 10,
    rankD : 10,
    rankE : 10,
    rankF : 9,
  },
  {
    subjectName : "中国語",
    subjectCode : "1203-0239",
    teacherName : "田中 太郎4",
    season : "春",
    place : "今出川",
    classTime: "水曜1限",
    rankA : 32,
    rankB : 10,
    rankC : 10,
    rankD : 10,
    rankE : 10,
    rankF : 9,
  },
  {
    subjectName : "ロシア語",
    subjectCode : "1203-0019",
    teacherName : "田中 太郎5",
    season : "春",
    place : "今出川",
    classTime: "水曜1限",
    rankA : 32,
    rankB : 10,
    rankC : 10,
    rankD : 10,
    rankE : 10,
    rankF : 9,
  },
]


export const Primary: Story = {
  args : {
    classList : classList,
  }
}
