import React from "react";
import { useRouter } from "next/router";

const ClientResourcePage = () => {
  const router = useRouter();

  console.log(router.query);
  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>This is dynamic Client resource page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientResourcePage;
