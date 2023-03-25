import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
    const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    if (event.key === 'Enter' && inputValue != "") {
      navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  }


  return (
    <div >
      <label>
        Search: <input
          onChange={event => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          value={inputValue} />
      </label>

    </div>
  )
}
