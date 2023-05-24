import { useState } from "react";
import { Link } from "react-router-dom";
import "../SearchBar/SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }
   

    return (
       <div className="search-container">
        <div className="input-container">
            <input type="search-input"
            onChange={handleChange}/>
            <button onClick={() => onSearch(name)} className="search-btn">Add</button>
        </div>

        <div className="create-btn">
          <Link to="/create" >
            <button className="btn-create">Create</button>
          </Link>
        </div>
       </div>
    )
}

export default SearchBar;