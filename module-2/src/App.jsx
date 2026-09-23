// export default function App() {
//   function handleClick() {
//     console.log("Button clicked");
//   }

//   return (
//     <button className="bg-amber-200" onClick={handleClick}>
//       Click Here
//     </button>

//     // <button
//     //   className="bg-amber-200"
//     //   onClick={function handleClick() {
//     //     console.log("Button clicked");
//     //   }}
//     // >
//     //   Click Here
//     // </button>

//     // <button
//     //   onClick={() => {
//     //     alert("You clicked on arrow function");
//     //   }}
//     // >
//     //   I dont do anything
//     // </button>
//   );
// }

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onSmash={onPlayMovie}>Play Movie</Button>
      <Button onSmash={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
