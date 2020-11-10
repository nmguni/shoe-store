import React, { useState } from "react";
import { Input } from "antd";
import "../../NavBar/Sections/Navbar.css";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);

    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div>
      <Search
        className="search_container"
        value={SearchTerms}
        onChange={onChangeSearch}
        placeholder="Search By Typing..."
      />
    </div>
  );
}

export default SearchFeature;
