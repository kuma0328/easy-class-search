import type { Meta, StoryObj } from '@storybook/react'
import { ClassList } from './ClassList'

const meta: Meta<typeof ClassList> = {
  title: 'ClassList',
  component: ClassList,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ClassList>

export const Primary: Story = {}
