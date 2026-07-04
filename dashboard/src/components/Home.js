import React, { useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);

  const toggleWatchlist = () => setIsWatchlistOpen((open) => !open);
  const closeWatchlist = () => setIsWatchlistOpen(false);

  return (
    <>
      <TopBar onToggleWatchlist={toggleWatchlist} />
      <Dashboard isWatchlistOpen={isWatchlistOpen} onCloseWatchlist={closeWatchlist} />
    </>
  );
};

export default Home;
