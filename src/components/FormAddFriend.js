import { useState } from "react";

export default function FormAddFriend({ setFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const submit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    setFriends((friend) => [...friend, newFriend]);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form action="" className="form-add-friend" onSubmit={submit}>
      <label htmlFor="">- Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label htmlFor="">- Photo</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

      <button className="button">Tambah</button>
    </form>
  );
}
