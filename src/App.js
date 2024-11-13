import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openFormAddFriend, setOpenFormAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handdleFormAddFriend = () => {
    setOpenFormAddFriend((openFormAddFriend) => !openFormAddFriend);
    setSelectedFriend(null);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((selected) => (selected?.id === friend.id ? null : friend));
    setOpenFormAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );

    setSelectedFriend(null);
  };

  // console.log("ini adalah ", selectedFriend);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
        {openFormAddFriend && <FormAddFriend setFriends={setFriends} />}
        <button onClick={handdleFormAddFriend} className="button">
          {openFormAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id} />}
    </div>
  );
}
