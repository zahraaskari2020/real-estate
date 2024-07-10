import './Filter.scss'

export default function Filter() {
  return (
    <div className='filter'>
      <h1>Search result for <b>London</b></h1>
      <div className="top">
        <div className="item">
            <label htmlFor='city'>location</label>
            <input type='text' id='city' name='city' placeholder='City Location'></input>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
            <label htmlFor='type'>Type</label>
            <select name='type' id='type'>
                <option value="any">any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor='property'>Property</label>
            <select name='property' id='property'>
                <option value="any">any</option>
                <option value='apartment'>Apartment</option>
                <option value='house'>House</option>
                <option value='condo'>Condo</option>
                <option value='land'>Land</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor='minPrice'>Min Price</label>
            <input type='number' id='minPrice' name='minPrice' placeholder='any'></input>
        </div>
        <div className="item">
            <label htmlFor='maxPrice'>Max Price</label>
            <input type='number' id='maxPrice' name='maxPrice' placeholder='any'></input>
        </div>
        <div className="item">
            <label htmlFor='bedroom'>Bedroom</label>
            <input type='text' id='bedroom' name='bedroom' placeholder='any'></input>
        </div>
        <button>
            <img src='/search.png' alt='search'></img>
        </button>
      </div>
    </div>
  )
}
