import React, { useState } from "react";
import "./AdList.css";

const adData = [
    {
      id: 1,
      company_name: "Apple",
      image_url: "https://via.placeholder.com/150",
      headline: "New iPhone 13 available now!",
      primary_text: "Get the latest iPhone with advanced features.",
      description: "The iPhone 13 features a new camera system, a faster processor, and improved battery life.",
    },
    {
      id: 2,
      company_name: "Samsung",
      image_url: "https://via.placeholder.com/150",
      headline: "Introducing the Galaxy Z Fold3!",
      primary_text: "Experience the power of a tablet in your pocket.",
      description: "The Galaxy Z Fold3 features a folding screen, 5G connectivity, and a powerful processor.",
    },
    {
      id: 3,
      company_name: "Google",
      image_url: "https://via.placeholder.com/150",
      headline: "Meet the Pixel 6!",
      primary_text: "The ultimate smartphone for photographers.",
      description: "The Pixel 6 features a new camera system, a custom Google-designed processor, and advanced AI capabilities.",
    },
  ];

const AdList = () => {
  const [query, setQuery] = useState("");
  const [filteredAds, setFilteredAds] = useState(adData);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const filtered = adData.filter(
      (ad) =>
        ad.company_name.toLowerCase().includes(query.toLowerCase()) ||
        ad.primary_text.toLowerCase().includes(query.toLowerCase()) ||
        ad.headline.toLowerCase().includes(query.toLowerCase()) ||
        ad.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAds(filtered);
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
        {filteredAds.map((ad) => (
          <li key={ad.id}>
            <div className="ad-item">
              <img src={ad.image_url} alt={ad.headline} />
              <div className="ad-details">
                <h2>{ad.company_name}</h2>
                <p>{ad.headline}</p>
                <p>{ad.primary_text}</p>
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
