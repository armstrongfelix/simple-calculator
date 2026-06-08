import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Calculator />
      </main>
    </div>
  );
}
