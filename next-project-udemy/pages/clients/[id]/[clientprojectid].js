import { useRouter } from "next/router";
import React from "react";

const SelectedClientProjectPAge = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>This project page for a Specific Project for a Selected Client</h1>
    </div>
  );
};

export default SelectedClientProjectPAge;
