import React from "react";

const Card = ({
  title,
  description,
  buttonText,
  buttonAction,
  cardStyle,
  image,
  children
}) => {
  return (
    <div className={`card ${cardStyle}`}>
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        {description && (
          <ul className="card-text">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        )}

        {children}

        {buttonText && buttonAction && (
          <button className="btn btn-primary w-100" onClick={buttonAction}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
