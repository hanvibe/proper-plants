import { useState } from "react";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const foundPlant = cart.find((item) => {
      return item.id === plant.id;
    });

    if (foundPlant) {
      const updatedCart = cart.map((item) => {
        if (item.id === plant.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => {
        return item.quantity > 0;
      });

    setCart(updatedCart);
  }

  return (
    <>
      <h1>Proper Plants</h1>

      <PlantList addToCart={addToCart} />

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </>
  );
}