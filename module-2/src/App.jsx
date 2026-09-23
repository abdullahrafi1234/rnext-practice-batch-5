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
//     //    console.log("You clicked on arrow function");
//     //   }}
//     // >
//     //   I dont do anything
//     // </button>
//   );
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() =>console.log("Playing!")}
//       onUploadImage={() =>console.log("Uploading!")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onSmash={onPlayMovie}>Play Movie</Button>
//       <Button onSmash={onUploadImage}>Upload Image</Button>
//     </div>
//   );
// }

// function Button({ onSmash, children }) {
//   return <button onClick={onSmash}>{children}</button>;
// }

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        console.log("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => console.log("Playing!")}>Play Movie</button>
      <button onClick={() => console.log("Uploading!")}>Upload Image</button>
    </div>
  );
}
