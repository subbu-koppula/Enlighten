'use client';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon } from "lucide-react"

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800'
}

export default function Deadlines({
  deadlines
}) {
  if (!Array.isArray(deadlines) || deadlines.length === 0) {
    return <p>No upcoming deadlines.</p>;
  }

  const sortedDeadlines = [...deadlines].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())

  return (
    (<div className="space-y-4">
      {sortedDeadlines.map((deadline) => (
        <Card key={deadline.id}>
          <CardContent className="p-4 flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{deadline.title}</h3>
              <p className="text-sm text-gray-500">{deadline.course}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                <span>{new Date(deadline.dueDate).toLocaleDateString()}</span>
                <ClockIcon className="w-4 h-4 ml-2" />
                <span>{new Date(deadline.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
            <Badge className={`${priorityColors[deadline.priority]} capitalize`}>
              {deadline.priority}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>)
  );
}