import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Top from "src/components/pages/Top";
import CourseInfo from "./components/pages/CourseInfo";
import TeacherInfo from "./components/pages/TeacherInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/course/:id" element={<CourseInfo />} />
        <Route path="teacher/:id" element={<TeacherInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
