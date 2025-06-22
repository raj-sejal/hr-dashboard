"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function AnalyticsPage() {
  const data = {
    labels: ['HR', 'Engineering', 'Sales', 'Marketing'],
    datasets: [
      {
        label: 'Average Performance',
        data: [3, 4, 2, 5],
        backgroundColor: 'rgba(59, 246, 121, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Department Wise Performance' }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Analytics</h1>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
