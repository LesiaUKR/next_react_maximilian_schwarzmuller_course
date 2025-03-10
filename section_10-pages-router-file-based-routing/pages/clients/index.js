import Link from "next/link";


export default function ClientsPage() {
   const clients = [
      { id: '1', name: 'Client 1' },
      { id: '2', name: 'Client 2' },
      { id: '3', name: 'Client 3' },
   ]

  return (
    <div>
        <h1>The Clients Page</h1>
        <ul>
           {clients.map(client => (
              <li key={client.id}>
                 <Link href={{
                    pathname: '/clients/[id]',
                    query: {
                       id: client.id
                    },
                 }}>{client.name}</Link>
              </li>
           ))}
        </ul>
    </div>
  );
}