import { useState } from "react";
import uuid from "react-uuid";

const Card = ({ id, value, rate, handleChangeRate, removeCard }) => {
  return (
    <div
      key={id}
      style={{ border: "1px solid black", margin: 10, padding: 10 }}
    >
      <button onClick={() => removeCard(id)}>-</button>
      <div>Card Value {value}</div>
      <div>
        Rate:{" "}
        <input
          value={rate}
          onChange={(e) => handleChangeRate(id, e.currentTarget.value)}
        />
      </div>
      <div>Calc Value {value * rate}</div>
    </div>
  );
};

const Options = ({ cardsValue }) => {
  return (
    <div>
      <select>
        {cardsValue.map((card) => (
          <option key={card.id} value={card.id}>
            {card.rate} - {card.calcVal}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function CreateCardComponent() {
  const [value, setValue] = useState(0);
  const [cardsValue, setCardsValue] = useState([]);

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    const newCards = cardsValue.map((card) => ({
      ...card,
      calcVal: card.rate * e.currentTarget.value
    }));
    setCardsValue(newCards);
  };

  const addCard = () => {
    setCardsValue((prev) => [...prev, { id: uuid(), rate: 0, calcVal: 0 }]);
  };

  const removeCard = (id) => {
    const newCards = cardsValue.filter((card) => card.id !== id);
    setCardsValue(newCards);
  };

  const handleChangeRate = (cardId, rate) => {
    setCardsValue((prev) =>
      prev.map((item) => {
        if (item.id === cardId) {
          item.rate = rate;
          item.calcVal = rate * value;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <h1>Hello Create Card Component</h1>
      <h2>Value</h2>
      <input value={value} onChange={handleChange} type="number" />
      <button onClick={addCard}>Add Card</button>
      <div style={{ display: "flex" }}>
        {cardsValue.map((card) =>
          Card({ ...card, value, handleChangeRate, removeCard })
        )}
      </div>
      <Options cardsValue={cardsValue} />
    </div>
  );
}
