import React from "react";

const ListMessages = ({ messages, onAdd }) => {
  return (
    <div className="text-black">
      {messages.map((message) => (
        <div>
          <h1 className="font-bold">
            {message.name} - {message.createdAt?.split("T")[0]}{" "}
            {message.createdAt?.split("T")[0].split(".")[0]}
          </h1>
          <p>{message.congrats}</p>
        </div>
      ))}

      <button onClick={onAdd}>Kirim Pesan</button>
    </div>
  );
};

export default ListMessages;
