import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import CertificateGenerator from "./components/CertificateGenerator";
import EmailSender from "./components/EmailSender";
import Kanban from "./components/Kanban";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import OfferLetter from "./components/OfferLetter";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route
            path="/cerificate-generator"
            element={<CertificateGenerator />}
          />
          <Route path="/email-sender" element={<EmailSender />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/offer-letter" element={<OfferLetter />} />
          <Route
            path="*"
            element={
              <section style={{ padding: "1rem" }}>
                <p>THere's notHing Here!</p>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
