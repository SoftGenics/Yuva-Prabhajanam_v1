import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Cards } from "./Components/Cards/Cards";
import Enquiry from "./Components/Enquiry/Enquiry"
import TopCard from "./Components/TopCard/TopCard";
function App() {
  return (
    <div>
      <TopCard />
        <Header />
        <Cards />
        <Enquiry />
        <Footer />
    </div>
  );
}

export default App;
