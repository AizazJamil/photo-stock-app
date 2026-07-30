import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { fetchPhotos, fetchVideo } from "./api/api";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:category/:query" element={<Search />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
      {/* <button
        onClick={async () => {
          const videos = await fetchVideo("cats");
          console.log(videos);
        }}
      >
        Fetch Videos
      </button>
      <button
        onClick={async () => {
          const photos = await fetchPhotos("cats");
          console.log(photos);
        }}
      >
        Fetch Photos
      </button> */}
    </>
  );
}

export default App;
