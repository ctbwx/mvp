import React from 'react';

const Tags = ({tags}) => (
  <div className="tagList">
    {tags.map((tag) =>
      <span>
        {"#" + tag + " "}
      </span>
    )}
  </div>
);

export default Tags;
