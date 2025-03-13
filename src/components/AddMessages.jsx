import { useState } from "react";

function AddMessages({ addMessages, onCancel }) {
  const [name, setName] = useState("");
  const [congrats, setCongrats] = useState("");
  const [options, setOptions] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCongratsChange(e) {
    setCongrats(e.target.value);
  }
  function handleOptionsChange(e) {
    setOptions(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addMessages({
      name,
      congrats,
      options,
      createdAt: new Date(),
    });
    setName("");
    setCongrats("");
    setOptions("");
  }

  return (
    <div className="text-black">
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Ucapan:</label>
          <input
            type="text"
            multiple
            value={congrats}
            onChange={handleCongratsChange}
          />
        </div>
        <div>
          <label>Option:</label>
          <input type="text" value={options} onChange={handleOptionsChange} />
        </div>

        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddMessages;
