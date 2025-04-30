import { useState } from "react";
import "./tarefa-edit.css"

function TaskEdit(props){
    const [description, setDescription] = useState(props.description);

    return <div className="task-edit">
        <div>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="task-input" type="text" name="task" id="task" />
        </div>
        <div className="task-edit-actions">
            <svg onClick={(e) => props.onClickSave(description, props.id)} className="icon icon-green" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>           
            <svg onClick={(e => props.onClickCancel(props.id))} className="icon icon-red" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
    </div>
}

export default TaskEdit;