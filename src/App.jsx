import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";

// Main Page
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
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
