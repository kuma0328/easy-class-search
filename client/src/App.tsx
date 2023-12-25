import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Top from "src/components/pages/Top";
import CourseInfo from "./components/pages/CourseInfo";
import TeacherInfo from "./components/pages/TeacherInfo";
import Teacher from "./components/pages/Teacher";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/course/:id" element={<CourseInfo />} />
        <Route path="/teacher/:id" element={<TeacherInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
