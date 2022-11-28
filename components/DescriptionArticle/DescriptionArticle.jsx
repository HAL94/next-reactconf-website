import React from 'react';

const DescriptionArticle = ({ subtitle, title, children }) => {
  return (
    <div>
      <p className="text-lg self-start uppercase font-semibold tracking-widest my-5 text-primary">
        {subtitle}
      </p>
      <h1 className="self-start text-6xl font-semibold text-secondary mb-5">
        {title}
      </h1>
      <div className="text">{
      children}</div>
    </div>
  );
};

export default DescriptionArticle;
