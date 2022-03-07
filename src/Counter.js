function Counter() {
  const [state, setstate] = useState(0);
  const handleIncrement = () =>{" "}
      {setstate((state) => {
        return state + 1;
      })}
      const handleMinus = () =>{" "}
      {setstate((state) => {
        return state - 1;
    })}
  return (
    <div>
      <div>{state}</div>
      <button onClick={handleIncrement}>++</button>
      <button onClick={handleMinus}>--</button>
    </div>
  );
}
