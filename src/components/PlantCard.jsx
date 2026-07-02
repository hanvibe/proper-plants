export default function PlantCard({ plant, addToCart }) {
  return (
    <div>
      <p>{plant.image}</p>
      <h3>{plant.name}</h3>

      <button onClick={() => addToCart(plant)}>
        Add to cart
      </button>
    </div>
  );
}