import { useEffect, useState } from "react"
import type { Course } from "../Types/Course"
import { getCourses } from "../Services/GetCourses"


// Every course row should have its unique color

const CoursesTable = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [courseType, setCourseType] = useState<string>("Video");
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Courses Table</h1>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2">Chapter</th>
              <th className="px-4 py-2">Lesson Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Content</th>
              <th className="px-4 py-2">Lesson Points</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border px-4 py-2">{course.chapter}</td>
                <td className="border px-4 py-2">{course.lesson_name}</td>
                <td className="border px-4 py-2">
                  <select onChange={(e) => setCourseType(e.target.value)} value={course.type}>
                    <option value="Video">Video</option>
                    <option value="Text">Text</option>
                    <option value="Quiz">Quiz</option>
                    <option value="Presentation">Presentation</option>
                  </select>
                </td>
                <td className="border px-4 py-2">{course.content ? <button>{course.content}</button> : ''}</td>
                <td className="border px-4 py-2">{course.lesson_points}</td>
                <td className="border px-4 py-2">{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoursesTable
