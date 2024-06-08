import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <div className=" text-white bg-gray-800 h-screen font-bold p-4">
      <h1 className="text-5xl">Administrador de tareas</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/update/:id" element={<UpdateTask />} />
            <Route path="/"  element={<CreateTask />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
