export default function App() {
  return (
    <div className="App">
      <Dimensions />
      <Factors />
      <Input />
      <Numpad />
    </div>
  );
}

function Dimensions() {
  return (
    <div className="dimensions">
      <ul className="dimension-list">
        <li>
          <Dimension />
        </li>
        <li>
          <Dimension />
        </li>
        <li>
          <Dimension />
        </li>
        <li>+ Add Dimension</li>
      </ul>
    </div>
  );
}

function Dimension() {
  return <div className="dimension">Length</div>;
}

function Factors() {
  return (
    <div className="factors">
      <ul className="factor-list">
        <li>
          <Factor />
        </li>
        <li>
          <Factor />
        </li>
        <li>
          <Factor />
        </li>
        <li>
          <Factor />
        </li>
        <li>
          <Factor />
        </li>
        <li>
          <Factor />
        </li>
        <li>
          <AddFactor />
        </li>
      </ul>
    </div>
  );
}

function Factor() {
  return (
    <div className="factor">
      <label>
        <h3>meter</h3>
        <input type="number" name="" id="" />
      </label>
    </div>
  );
}

function AddFactor() {
  return (
    <div className="factor">
      <label>
        <h3>+ Add Unit</h3>
      </label>
    </div>
  );
}

function Input() {
  return (
    <div className="input-field">
      <h3>meter</h3>
      <input type="number" name="" id="" />
    </div>
  );
}

function Numpad() {
  return (
    <div className="numpad">
      <Number num={7} />
      <Number num={8} />
      <Number num={9} />
      <Number num={4} />
      <Number num={5} />
      <Number num={6} />
      <Number num={1} />
      <Number num={2} />
      <Number num={3} />
      <Number num={0} />
      <Number num={"."} />
      <Number num={"DEL"} />
    </div>
  );
}

function Number({ num }) {
  return <div className="number">{num}</div>;
}
