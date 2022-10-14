import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";


function App() {
  return (
    // <h1>Hello from App</h1>
		<GalleryNavigation galleries={harvardArt.records}></GalleryNavigation>
  );
}



export default App;
