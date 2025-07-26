
const Note = ({note, toggleImportance, onDelete}) => {
  const label = note.important
    ? 'make not important': 'make important'
  return(
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={onDelete} className="delete-button" title="Delete note">
      🗑️
    </button>
    </li>

  )
}

export default Note