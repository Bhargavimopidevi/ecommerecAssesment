import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
