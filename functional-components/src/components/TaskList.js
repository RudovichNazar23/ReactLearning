
function TaskList({ items, deleteHandler }){
    return (
        items.length > 0 ? (
            <table className='table m-5'>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Due date</th>
                    <th>Options</th>
                </tr>
                {
                    items.map(
                        (item) => (
                            <tr key={item.title}>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.dueDate}</td>
                                <button className="btn btn-danger p-2 m-2" onClick={(event) => deleteHandler(event, item.title)}>
                                    Delete
                                </button>
                            </tr>
                        ) 
                    )
                }
            </table>
        ) : (
            <h3 className="text-center">There aren't any tasks here...</h3>
        )
    )
}

export default TaskList;