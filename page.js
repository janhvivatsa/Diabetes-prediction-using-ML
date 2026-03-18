import PredictionForm from '../components/PredictionForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Diabetes <span className="text-blue-600">Predictor AI</span>
        </h1>
        <p className="text-gray-500">Enter your clinical data for a machine learning analysis.</p>
      </header>
      
      <PredictionForm />
      
      <footer className="mt-12 text-xs text-gray-400">
        Note: This is an AI prototype and not for clinical diagnosis.
      </footer>
    </main>
  );
}
