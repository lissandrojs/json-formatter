import JsonFormatter from '../components/JsonFormatter';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Formatador de JSON</h1>
      <JsonFormatter />
    </main>
  );
}