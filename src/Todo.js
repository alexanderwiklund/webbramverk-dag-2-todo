const Todo = ({id, title, description, onDelete}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{`ID: ${id}`}</p>
      <button onClick={() => onDelete(id)}>DELETE TODO {id}</button>
    </div>
  )
}

export default Todo