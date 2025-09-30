import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import CoursesTable from "./Components/CoursesTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<CoursesTable />} />
    </Routes>
  );
}   
export default App;