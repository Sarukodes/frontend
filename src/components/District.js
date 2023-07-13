import React, { useState } from 'react';
import districtData from './../municipality.json';

const District = () => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  useState(() => {
    setDistricts(districtData);
  }, []);

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <h1>District List</h1>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Select a district</option>
        {districts.map((district, index) => (
          <option key={index} value={district.value}>
            {district.label}
          </option>
        ))}
      </select>
      {selectedDistrict && <p>Selected District: {selectedDistrict}</p>}
    </div>
  );
};

export default District;
