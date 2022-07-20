import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Tags({ setProjectData }) {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setProjectData((prevData) => ({
      ...prevData,
      tags,
    }));
  }, [tags]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    // Remove whitespace
    const trimmedInput = input.trim();
    // If key is ',' we want to set a tag
    if (key === ',' && trimmedInput.length) {
      event.preventDefault();
      setTags((prevTags) => [...prevTags, trimmedInput]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Tags</h2>
      <div className="p-3 w-full bg-white flex items-center rounded">
        {tags.map((tag) => <p key={uuidv4()} className="bg-blue-500 text-white border rounded py-1 px-4 mx-1">{tag}</p>)}
        <input
          className="grow focus:outline-none"
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

Tags.propTypes = {
  setProjectData: PropTypes.func.isRequired,
};

export default Tags;
