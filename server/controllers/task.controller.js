import taskSchema from "../schemas/task.schema.js"

export const getTasks = async (req, res) => {
    const tasks = await taskSchema.find()
    res.status(201).json(tasks)
}

export const getTask = async (req, res) => {
    const tasks = await taskSchema.findById(req.params.id)
    res.status(201).json(tasks)
}

export const createTask = async (req, res) => {
    const {title, description, user} = req.body
    try {
        const newTask = new taskSchema({
            title,
            description,
            user
        })
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (error) {
        res.error(error)
    }
}

export const deleteTask = async (req, res) => {
    const tasks = await taskSchema.findOneAndDelete(req.params.id)
    res.status(200).json('Borrado correctamente')
}

export const updateTask = async (req, res) => {
    const tasks = await taskSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(tasks)
}