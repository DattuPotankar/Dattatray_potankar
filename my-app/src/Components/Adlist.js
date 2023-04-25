import React, { useState, useEffect } from "react";
import "./AdList.css";

const AdList = () => {
  const [query, setQuery] = useState("");
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3007/ads")
      .then((response) => response.json())
      .then((data) => { 
        console.log(data);
        setAds(data.data || [])} )
      .catch((error) => console.error(error));
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const filtered = ads.filter(
      (ad) =>
        // ad.companyId.toLowerCase().includes(query.toLowerCase()) ||
        ad.primaryText.toLowerCase().includes(query.toLowerCase()) ||
        ad.headline.toLowerCase().includes(query.toLowerCase()) ||
        ad.description.toLowerCase().includes(query.toLowerCase())
    );
    setAds(filtered);
  };

  return (
    <div className="ad-list-container">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search for ads..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="ad-list">
        {ads.map((ad) => (
          <li key={ad.id}>
            <div className="ad-item">
              <img src={ad.image_url} alt={ad.headline} />
              <div className="ad-details">
                <h2>{ad.company_name}</h2>
                <p>{ad.headline}</p>
                <p>{ad.primaryText}</p>
                <p>{ad.headline}</p>
                <p>{ad.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdList;
