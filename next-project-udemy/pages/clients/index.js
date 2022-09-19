import React from "react";
import Link from "next/link";

const ClientPage = () => {
  return (
    <div>
      <h1>This is Client Page</h1>
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

export default ClientPage;
