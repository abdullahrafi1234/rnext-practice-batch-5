export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button className="" onClick={handleClick}>
      I don't do anything
    </button>
  );
}
