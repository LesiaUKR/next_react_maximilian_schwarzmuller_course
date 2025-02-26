import React from "react";

export default function MealDetailsPage({ params }) {
  console.log(params);

  return (
    <div>
      <h1>
        Meal <Details></Details>
      </h1>
      <p>Meal: {params.slug}</p>
    </div>
  );
}
