import React from "react";

export const Links = () => {
  const items = ["Homepage", "About", "Projects", "Contact"];

  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};
