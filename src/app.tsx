import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages";
import { Pokemon } from "./pages/pokemon";


const App: FunctionComponent = () => {
  return (
    <div>
      <h1>Pokedex</h1>
      <Router>
        {/* adding exact will only render the home with exact path "/" */}
        {/* if not using exact, homepage will also render on pokemon page */}
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:pokemonId" component={Pokemon} />
      </Router>
    </div>
  );
}

export default App;
