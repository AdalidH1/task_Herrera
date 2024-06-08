import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const [tasks, setTask] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/task/${id}`)
      .then((response) => {
        setTask(response.data)
      })
      .catch((error) => {
        console.error(error)
      });
  }, [id]);

  const handleChange = (event) => {
    setTask({ ...tasks, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:4000/api/tasks/${id}`, tasks)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error actualizando la tarea:", error));
  };

  return (
    <div>
        <h1 className="text-3xl text-yellow-500">Actualizar tarea</h1>
      <form onSubmit={handleSubmit} className="flex w-80 flex-col space-y-2">
        <label htmlFor="">Usuario</label>
        <input type="text" name="user" value={tasks.user} onChange={handleChange} className="text-black"
        />
        <label htmlFor="">Titulo de la tarea</label>
        <input type="text" name="title" value={tasks.title} onChange={handleChange} className="text-black"
        />
        <label htmlFor="">Descripción</label>
        <input type="text" name="description" value={tasks.description} onChange={handleChange} className="text-black"
        />
        <button className=" text-white rounded bg-yellow-500 border border-yellow-500 hover:bg-white hover:text-yellow-500 transition-all" type="submit">Actualizar</button>
      </form>
         
    </div>
  );
}
