import React from "react";
import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "MaX" },
    { id: "min", name: "MiN" },
  ];
  return (
    <div>
      <h1>This is Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
