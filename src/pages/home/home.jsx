import "./home.css";
import Task from "../../components/tarefa/tarefa.jsx";
import TaskEdit from "../../components/tarefa-edit/tarefa-edit.jsx";
import { useState } from "react";
import { v4 as uuid } from "uuid"

function Home(){

    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState("");


    //Add Ta
    function AddTask(){
        let task = {
            id: uuid(),
            description: description,
            done: false,
            edit: false
        }

        setTasks([...tasks, task]);
        setDescription("");

        console.log(task)
    }
    
    //Delete Task
    const DeleteTask = (id) => {
        const newList = tasks.filter((task) => {
            return task.id != id
        });

        setTasks(newList);
    }

    //Edit Mode
    const EditTask = (id) => {
        let newList = [];

        tasks.map((task) => {
            if(task.id == id)
                task.edit = true;

            newList.push(task);
        });

        setTasks(newList);
    }

    //Confirm edit task
    const EditTaskConfirm = (description, id) => {
        let newList = [];

        tasks.map((task) => {
            if(task.id == id) {
                task.edit = false;
                task.description = description

            }

            newList.push(task);
        });

        setTasks(newList);
    }


    //Cancel edit task
    const CancelEditTask = (id) => {
        let newList = [];

        tasks.map((task) => {
            if(task.id == id)
                task.edit = false;

            newList.push(task);
        });

        setTasks(newList);
    }

    //Task Complete
    const TaskComplete = (id, done) => {
        let newList = [];

        tasks.map((task) => {
            if(task.id == id)
                task.done = done;

            newList.push(task);
        });

        setTasks(newList);
    }

    return <div className="container-tasks">
        <h2>Quais são os seus planos para hoje?</h2>
    
        <div className="form-task">
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="task-input" type="text" name="task" id="task" placeholder="Descreva sua tarefa..."/>
            <button onClick={AddTask} className="task-btn">Inserir Tarefa</button>
        </div>

        <div className="list-task">
            {
                tasks.map((task) =>{
                    return task.edit ?
                    <TaskEdit 
                        key={task.id}
                        id={task.id} 
                        description={task.description}
                        done={task.done}
                        onClickSave={EditTaskConfirm}
                        onClickCancel={CancelEditTask}/>
                    :
                    <Task 
                        key={task.id}
                        id={task.id} 
                        description={task.description}
                        done={task.done}
                        onClickDelete={DeleteTask}
                        onClickEdit={EditTask}
                        onClickTaskComplete={TaskComplete} />
                })
            }
       
        </div>
    </div>

}


export default Home;