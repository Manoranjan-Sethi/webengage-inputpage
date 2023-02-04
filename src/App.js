import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./pages/Info/InfoPage";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
