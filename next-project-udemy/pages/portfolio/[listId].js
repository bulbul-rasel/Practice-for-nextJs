import { useRouter } from "next/router";
import React from "react";

const PortfolioProjectList = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>This is Dynamic Portfolio Project List</h1>
    </div>
  );
};

export default PortfolioProjectList;
