import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage  from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Header />
        
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
              {/* <h1>Search page</h1> */}
          </Route>

          <Route path="/">
            {/* <h1>Home page</h1> */}
              {/* sidebar and mainvideo */}
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
            {/* sidebar */}
            {/* main */}
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
