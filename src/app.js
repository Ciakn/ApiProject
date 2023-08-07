import { Route, Routes } from "react-router-dom";
import Comments from "./comments/comment";

const App = () => {
  return (
    
<Routes>
  <Route path="/comment"  element ={<Comments/>} />
  <Route path="/commentsection"  element ={} />
  <Route path="addcomment"   element ={} />
</Routes>
  );
};

export default App;
export const khiar = "mowz";
export const mowz = "mowz";
