import React, { useState } from "react";

const SearchForm = ({ onSearch, provinces, onProvinceChange }) => {
  const [country, setCountry] = useState("");

  const handleSearch = () => {
    onSearch(country);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {provinces.length > 0 && (
        <select onChange={(e) => onProvinceChange(e.target.value)}>
          <option value="">All Provinces</option>
          {provinces.map((province, index) => (
            <option key={index} value={province}>
              {province || "N/A"}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchForm;
