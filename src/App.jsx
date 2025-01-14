import { useState } from "react";

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div className="header">
        <h1>
          <span style={{ color: "red" }}>Please&nbsp;</span>
          <span style={{ color: "blue" }}>select&nbsp;</span>
          <span style={{ color: "green" }}>a&nbsp;</span>
          <span style={{ color: "violet" }}>color</span>
          <span style={{ color: "black" }}>:</span>
        </h1>
      </div>

      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
