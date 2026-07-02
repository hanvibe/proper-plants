import PLANTS from "../data";
import PlantCard from "./PlantCard";

export default function PlantList({ addToCart }) {
  return (
    <section>
      <h2>Plants</h2>

      {PLANTS.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          />
        );
      })}
    </section>
  );
}