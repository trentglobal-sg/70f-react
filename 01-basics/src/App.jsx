import waffle from "./waffle.jpg";
import "./App.css"; // import CSS file to apply the style

function App() {
  // we can only return one single top-level JSX element
  const luckyNumber = Math.floor(Math.random() * 100 + 1);
  return (<>
          <h1>Hello World</h1>
          {/* font-size: 32px; font-family: Verdana */}
          <h2 style={{
            fontSize:"32px",
            fontFamily:"Verdana"
          }}>Goodbye World</h2>
          <p className="urgent">Your lucky number today is {luckyNumber}</p>
          {/* This is for images saved in the ./src folder */}
          <img src={waffle} style={{width:"50%"}}/>
          {/* If the image is hosted elsewhere, not with the app, then the URL will suffice */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Root_beer_in_glass_mug.jpg/1200px-Root_beer_in_glass_mug.jpg"/>
    </>)
}

// Make the App function available for other JavaScript file
export default App;  