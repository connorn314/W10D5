import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import Home from "./components/Home";
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
  return (
		<div>
			<GalleryNavigation galleries={harvardArt.records}></GalleryNavigation>
      <Switch>
        <Route path="/error">
          <h2>
            Page Not Found
          </h2>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records}/>
        </Route>
        <Route exact path="/" component={Home}></Route>
        <Redirect to="/error"></Redirect>
      </Switch>
		</div>
  );
}



export default App;
