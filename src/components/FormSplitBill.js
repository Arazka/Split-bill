import { useState } from "react";

export default function FormSplitBill({ friend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoPaying, setWhoPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoPaying === "user" ? friendBill : -myBill);
  };

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng si {friend.name}</h2>

      <label htmlFor="">- Total Tagihan</label>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <label htmlFor="">- Tagihan Kamu</label>
      <input type="text" value={myBill} onChange={(e) => setMyBill(e.target.value)} />

      <label htmlFor="">- Tagihan si {friend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">- Ditalangin sama:</label>
      <select value={whoPaying} onChange={(e) => setWhoPaying(e.target.value)}>
        <option value="user">Kamu</option>
        <option value="friend">{friend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
