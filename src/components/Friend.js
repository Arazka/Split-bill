export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const selected = selectedFriend?.id === friend.id;

  return (
    <li className={selected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang Rp{Math.abs(friend.balance)} ke kamu
        </p>
      )}
      {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
      <button className="button" onClick={() => onSelectedFriend(friend)}>
        {selected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
