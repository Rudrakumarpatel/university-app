import React, { useState } from "react";
import UniversityCards from "./components/UniversityCards";
import fetchUniversities from "./api/api";

const App = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");

  const handleSearch = async () => {
    const data = await fetchUniversities(country);
    console.log(data);
    setUniversities(data);
    setFilteredUniversities(data);

    const uniqueProvinces = [...new Set(data.map((uni) => uni["state-province"]))];
    setProvinces(uniqueProvinces);
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);

    if (selectedProvince === "") {
      setFilteredUniversities(universities);
    } else {
      const filtered = universities.filter((uni) => uni["state-province"] === selectedProvince);
      setFilteredUniversities(filtered);
    }
  };

  return (
    <div className="container">
      
      <header>
        <div>
        <input
          type="text"
          placeholder="Search your Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        </div>
        <select onChange={handleProvinceChange}>
          <option value="">State</option>
          {provinces.map((prov, index) => (
            <option key={index} value={prov}>
              {prov || "N/A"}
            </option>
          ))}
        </select>
      </header>

      <UniversityCards universities={filteredUniversities} />
    </div>
  );
};

export default App;
