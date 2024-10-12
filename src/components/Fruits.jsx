import Fruit from "./Fruit";

function Fruits() {
  const fruits = [
    { name: "Apple", color: "red", price: 100, emoji: "🍎" },
    { name: "Banana", price: 50, color: "yellow", emoji: "🍌" },
    { name: "Orange", price: 80, color: "orange", emoji: "🍊" },
    { name: "Mango", price: 150, color: "yellow" },
  ];
  return (
    <div>
      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit.name}>
            <Fruit />
            {fruit.color} {fruit.price} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Fruits;
