import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import React from "react";
import SearchBar from "./components/SearchBar";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
    {/* <SearchBar placeholder="What are you looking for?"/> */}
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;