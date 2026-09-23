export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    // <button className="bg-amber-200" onClick={handleClick}>
    //   Click Here
    // </button>

    <button
      onClick={() => {
        alert("You clicked");
      }}
    >
      I dont do anything
    </button>
  );
}
