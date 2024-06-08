import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

function CreateTask() {
  const { register, handleSubmit } = useForm();
  const [task, getTasks] = useState([]);

  const onSubmit = (data) => {
    axios.post("http://localhost:4000/api/tasks", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/tasks")
      .then((response) => {
        getTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleDelete = (id) => {
    axios.delete("http://localhost:4000/api/tasks/${id}")
      .then(() => getTasks(task.filter((task) => {
        task._id !== id
      })))
      .catch((error) => {
        console.error(error)
      });
  };

  return (
    <div className="">
        <h1 className="text-3xl text-yellow-500">Agregar tarea</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-80 flex-col space-y-2">
        <label htmlFor="">Usuario</label>
        <input type="text" {...register("user")} className="text-black" />
        <label htmlFor="">Titulo de la tarea</label>
        <input type="text" {...register("title")} className="text-black" />
        <label htmlFor="">Descripción</label>
        <input type="text" {...register("description")} className="text-black" />
        <button className=" text-white rounded bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 transition-all">Enviar</button>
      </form>

      <table className="w-2/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-3">
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Usuario</th>
            <th>Tarea</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item) => (
            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.user}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.title}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.description}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a href={`/update/${item._id}`}>
                  <button className="bg-yellow-500 p-4 rounded text-white hover:bg-white hover:text-yellow-500 hover:border-yellow-500 border transition-all">Editar</button>
                </a> 
                <button className="bg-red-500 p-4 rounded text-white hover:bg-white hover:text-red-500 hover:border-red-500 border transition-all" onClick={() => handleDelete(task._id)}>Borrar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default CreateTask;
