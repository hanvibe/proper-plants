export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div>
      <p>{item.image}</p>

      <h3>{item.name}</h3>

      <button onClick={() => decreaseQuantity(item.id)}>
        -
      </button>

      <span> {item.quantity} </span>

      <button onClick={() => increaseQuantity(item.id)}>
        +
      </button>
    </div>
  );
}