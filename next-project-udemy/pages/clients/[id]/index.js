import Link from "next/link";
import React from "react";

const ClientResourcePage = () => {
  return (
    <div>
      <h1>This is dynamic Client resource page</h1>
      <ul>
        <li>
          <Link href="/clients/max">MAx</Link>
        </li>
        <li>
          <Link href="/clients/min">MiN</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientResourcePage;
