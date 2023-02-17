import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Router>
              <Header />
          <Switch>
            <Route path="/search/:searchTerm">
              {/* <h2>SearchPage</h2> */}
            <div className="app_page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>
            <Route path="/">
              <div className="app_page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </Route>
          </Switch>
        </Router>

        {/* Header */}
        {/* Sidebar */}
        {/* Recommended Videos */}
      </div>
    </>
  );
}

export default App;
