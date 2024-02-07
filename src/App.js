import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import WatchPage from "./components/WatchPage/WatchPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex ">
              <SideBar />
              <HomePage />
            </div>
          }
        />
        <Route path="/watch/:videoId" element={<WatchPage />} />
      </Routes>
    </>
  );
}

export default App;
