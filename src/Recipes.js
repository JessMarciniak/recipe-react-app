import React from "react";

export default function Recipes(props) {
  if (props.results) {
    return (
      <div className="recipes">
        <section>
          <h2>{props.results}</h2>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
