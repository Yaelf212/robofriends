import "./App.css";
import CardList from "../Components/CardList";
import { robots } from "../robots";
import SearchBox from "../Components/SearchBox";
import { useEffect, useState } from "react";
import Scroll from "../Containers/Scroll";
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
