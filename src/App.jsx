import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Login from "./pages/Connect";

import CitizenScience from "./pages/CitizenScience";
import Learning from "./pages/Learning";
import Farming from "./pages/Farming";

import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Overview from "./pages/Dashboard/Overview";
import Plants from "./pages/Dashboard/Plants";
import MapView from "./pages/Dashboard/MapView";
import Settings from "./pages/Dashboard/Settings";
import BloomMap from "./pages/Dashboard/BloomMap";
import Pollinators from "./pages/Dashboard/Pollinators";
import HealthScore from "./pages/Dashboard/HealthScore";
import Alerts from "./pages/Dashboard/Alerts";

function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/citizen-science" element={<CitizenScience />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/farming" element={<Farming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="plants" element={<Plants />} />
          <Route path="map" element={<MapView />} />
          <Route path="bloom" element={<BloomMap />} />
          <Route path="pollinators" element={<Pollinators />} />
          <Route path="health" element={<HealthScore />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
