import React from "react";
import Recipes from "./Recipes";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h3>Here's what you can make!</h3>

          <Recipes recipes={recipes} />
        </section>
      </div>
    );
  } else {
    return "hi";
  }
}
