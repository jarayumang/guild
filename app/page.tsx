import { getXataClient } from "@/src/xata";

export default async function Home() {
  const xata = getXataClient();
  const records = await xata.db.authentication.getAll();

  return (
    <div className="flex flex-col items-center justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
      <ul className="mt-4">
        {records.map((record) => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
}
