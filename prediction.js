"use client";
import { useState } from 'react';

export default function PredictionForm() {
  const [formData, setFormData] = useState({
    glucose: '',
    bmi: '',
    age: '',
    insulin: ''
  });
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your actual FastAPI URL
    const res = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setResult(data.diabetes_likelihood);
  };

  return (
    <div className="p-8 bg-white shadow-xl rounded-2xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Health Checkup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="number" 
          placeholder="Glucose Level" 
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({...formData, glucose: e.target.value})}
        />
        <input 
          type="number" 
          placeholder="BMI" 
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({...formData, bmi: e.target.value})}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Analyze Risk
        </button>
      </form>

      {result !== null && (
        <div className={`mt-6 p-4 rounded-lg text-center font-bold ${result === 1 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {result === 1 ? "High Risk Detected" : "Low Risk Detected"}
        </div>
      )}
    </div>
  );
}
