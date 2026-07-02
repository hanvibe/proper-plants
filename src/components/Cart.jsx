import CartItem from "./CartItem";

export default function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <section>
      <h2>Cart</h2>

      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}
    </section>
  );
}