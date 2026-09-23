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

//stop propagation ========>
// function Button({ onSmash, children }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onSmash();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div
//       className="Toolbar"
//       onClick={() => {
//         alert("You clicked on the toolbar!");
//       }}
//     >
//       <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
//       <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
//     </div>
//   );
// }

// Preventing default behavior=======>
export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        console.dir(e);
        e.preventDefault();
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
