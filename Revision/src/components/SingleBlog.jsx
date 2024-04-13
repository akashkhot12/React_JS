import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function SingleBlog() {
  const { id } = useParams();

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
