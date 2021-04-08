import React, { useState } from "react";
// STYLE
import "./style.css";

const LocalSearch = ({ setAgencies, setAgents }) => {
  // LOCAL STATE
  const [search, setSearch] = useState("");
  // Functions
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  const handleSearch = () => {
    console.log("searched -> ", search);
    setAgencies((prev) => {
      const oldCopy = [...prev];
      const filteredAgencies = oldCopy.filter((agency) => {
        const num = Number(search);
        if (agency.name === search) {
          return agency;
        } else if (!isNaN(num) && agency.age === num) {
          return agency;
        }
        return null;
      });
      console.log("filteredAgencies -> ", filteredAgencies);
      if (filteredAgencies.length) {
        return (prev = filteredAgencies);
      } else {
        return prev;
      }
    });
    setAgents((prev) => {
      const oldCopy = [...prev];
      const filteredAgents = oldCopy.filter((agent) => {
        if (agent.firstName === search || agent.lastName === search) {
          return agent;
        } else if (agent.state === search.toUpperCase()) {
          return agent;
        }
        return null;
      });
      console.log("filteredAgents -> ", filteredAgents);
      if (filteredAgents.length) {
        return (prev = filteredAgents);
      } else {
        return prev;
      }
    });
  };
  return (
    <div>
      <h2>I am Local Search</h2>
      <hr />
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default LocalSearch;
