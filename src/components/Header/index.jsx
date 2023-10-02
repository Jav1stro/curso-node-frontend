import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <div>
      <h1>Header!</h1>
      <Link href='/movies/create'> --- to create a Movie</Link>
    </div>
  );
};
