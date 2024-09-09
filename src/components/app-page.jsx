'use client'

import Timetable from './timetable'
import TodoList from './Todo'
import Deadlines from './Deadlines'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const deadlines = [
  { id: 1, title: 'MFCS Assignment', dueDate: '2023-07-15T23:59:00', course: 'MFCS', priority: 'high' },
  { id: 2, title: 'SE Project Proposal', dueDate: '2023-07-20T15:00:00', course: 'SE', priority: 'medium' },
  { id: 3, title: 'Java Lab Report', dueDate: '2023-07-18T09:00:00', course: 'JAVA', priority: 'low' },
  { id: 4, title: 'DL&CO Quiz', dueDate: '2023-07-22T10:30:00', course: 'DL&CO', priority: 'high' }
]

export default function AppPage() {
  return (
    (<main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Timetable</CardTitle>
          </CardHeader>
          <CardContent>
            <Timetable />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Todo List</CardTitle>
          </CardHeader>
          <CardContent>
            <TodoList />
          </CardContent>
        </Card>
        <Card >
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <Deadlines deadlines={deadlines} />
          </CardContent>
        </Card>
      </div>
    </main>)
  );
}