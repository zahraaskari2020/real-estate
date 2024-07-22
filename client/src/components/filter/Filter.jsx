import { useState } from 'react';
import './Filter.scss'
import {useSearchParams} from 'react-router-dom';

export default function Filter() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className='filter'>
      <h1>Search result for <b>{searchParams.get("city")}</b></h1>
      <div className="top">
        <div className="item">
            <label htmlFor='city'>location</label>
            <input type='text' id='city' name='city' placeholder='City Location' onChange={handleChange} defaultValue={query.city}></input>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
            <label htmlFor='type'>Type</label>
            <select name='type' id='type' onChange={handleChange} defaultValue={query.type}>
                <option value="">any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor='property'>Property</label>
            <select name='property' id='property' onChange={handleChange} defaultValue={query.property}>
                <option value="">any</option>
                <option value='apartment'>Apartment</option>
                <option value='house'>House</option>
                <option value='condo'>Condo</option>
                <option value='land'>Land</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor='minPrice'>Min Price</label>
            <input type='number' id='minPrice' name='minPrice' placeholder='any' onChange={handleChange} defaultValue={query.minPrice}></input>
        </div>
        <div className="item">
            <label htmlFor='maxPrice'>Max Price</label>
            <input type='number' id='maxPrice' name='maxPrice' placeholder='any' onChange={handleChange} defaultValue={query.maxPrice}></input>
        </div>
        <div className="item">
            <label htmlFor='bedroom'>Bedroom</label>
            <input type='text' id='bedroom' name='bedroom' placeholder='any' onChange={handleChange} defaultValue={query.bedroom}></input>
        </div>
        <button onClick={handleFilter}>
            <img src='/search.png' alt='search'></img>
        </button>
      </div>
    </div>
  )
}
