'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const timetableData = [
  { day: "Monday", slots: ["MFCS", "UHV-2", "SE", "L", "CRT", "CRT", "JAVA", "DL&CO"] },
  { day: "Tuesday", slots: ["JAVA", "DL&CO", "MFCS", "U", "DL&CO", "JAVA", "MFCS", "Library"] },
  { day: "Wednesday", slots: ["SE", "MFCS", "JAVA", "N", "SE", "PY LAB", "PY LAB", "PY LAB"] },
  { day: "Thursday", slots: ["UHV-2", "DL&CO", "SE", "C", "MFCS", "JAVA", "SE", "Sports"] },
  { day: "Friday", slots: ["DL&CO", "SE", "UHV-2", "H", "UHV-2", "CT LAB", "CT LAB", "CT LAB"] },
  { day: "Saturday", slots: ["JAVA LAB", "JAVA LAB", "JAVA LAB", "!", "SE", "MFCS", "DL&CO", "JAVA"] },
]

const timeSlots = [
  "9:30-10:30", "10:30-11:20", "11:20-12:10", "12:10-1:00",
  "1:00-1:50", "1:50-2:40", "2:40-3:30", "3:30-4:20"
]

const subjectColors = {
  "MFCS": "bg-blue-100 text-blue-800",
  "UHV-2": "bg-green-100 text-green-800",
  "SE": "bg-purple-100 text-purple-800",
  "JAVA": "bg-red-100 text-red-800",
  "DL&CO": "bg-yellow-100 text-yellow-800",
  "CRT": "bg-orange-500 text-purple-100",
  "PY LAB": "bg-blue-500 text-blue-100",
  "CT LAB": "bg-purple-500 text-purple-100",
  "Library": "bg-gray-100 text-gray-800",
  "Sports": "bg-orange-100 text-orange-800",
  "JAVA LAB": "bg-red-500 text-red-100"
}

export default function Timetable() {
  return (
    (<div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[100px] py-3 px-4 text-left font-semibold text-gray-900">Day</TableHead>
            {timeSlots.map((slot, index) => (
              <TableHead key={index} className="py-3 px-4 text-center font-semibold text-gray-900">
                <div className="text-xs font-normal text-gray-500">{index + 1}</div>
                <div className="text-sm">{slot}</div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {timetableData.map((day, dayIndex) => (
            <TableRow key={day.day} className={dayIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <TableCell className="py-3 px-4 font-medium text-gray-900">{day.day}</TableCell>
              {day.slots.map((slot, index) => (
                <TableCell key={index} className="py-3 px-4 text-center">
                  {slot === "LUNCH" ? (
                    <span
                      className="inline-block w-full py-1 px-2 bg-orange-200 text-orange-800 text-xs font-semibold rounded-full">
                      {slot}
                    </span>
                  ) : slot ? (
                    <span
                      className={`inline-block w-full py-1 px-2 text-xs font-semibold rounded-full ${subjectColors[slot] || 'bg-gray-100 text-gray-800'}`}>
                      {slot}
                    </span>
                  ) : "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)
  );
}