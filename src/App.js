import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

//HashRouter 는 #이 붙어서 대부분은 BrowserRouter를 사용
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

// /movie/:id => id값 Detail로 전송(ex. 626254)
export default App;

// [docs] https://yts.mx/api
// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
