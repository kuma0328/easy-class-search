import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Top from "src/components/pages/Top";
import CourseInfo from "./components/pages/CourseInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/course/:id" element={<CourseInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
