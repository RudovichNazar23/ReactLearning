import { useState } from "react";

function AddTaskForm({ handler }){

    const [data, setData] = useState(
        {
            title: "",
            category: "",
            dueDate: ""
        }
    )

    const onChange = (event) => {
        const key = event.target.name;
        const value = event.target.value
        setData((oldData) => ({...oldData, [key]: value}))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        return handler(data);
    } 

    return (
        <form className="container" style={{width: "350px"}} onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" onChange={onChange} value={data.title}></input>
            </div>
            <div className="form-group">
                <label>Category</label>
                <input type="text" className="form-control" name="category" onChange={onChange} value={data.category}></input>
            </div>
            <div className="form-group">
                <label>Due date</label>
                <input type="date" className="form-control" name="dueDate" onChange={onChange} value={data.dueDate}></input>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center">
                <button className="btn btn-success m-3">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default AddTaskForm;