import React, { useState } from 'react';

export function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className="create-todo">
            <input type="text" placeholder="Title" onChange={function(e) {
                const value = e.target.value;
                setTitle(value);
            }} /> <br />
            <input type="text" placeholder="Description" onChange={function(e) {
                const value = e.target.value;
                setDescription(value);
            }} /><br />
            <button onClick={() => {
                fetch("http://localhost:8000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
            }}>Add a todo</button>
        </div>
    );
}
