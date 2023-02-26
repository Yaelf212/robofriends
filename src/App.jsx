import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    setFilteredRobots(
      robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    console.log(searchTerm);
    console.log(filteredRobots);
  }, [searchTerm]);
  function onSearchChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="tc">
      <h1>RoboFriends </h1>
      <SearchBox searchfield={searchTerm} searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
