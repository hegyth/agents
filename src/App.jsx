import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientCard from "./pages/client-card/client-card";
import MainMenu from "./components/main-menu/main-menu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/client-card/:id" element={<ClientCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
