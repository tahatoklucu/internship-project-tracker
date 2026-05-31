export default function StatCard({ title, value, color }) {
    return (
      <div className={`bg-gray-800 p-6 rounded-xl border-l-4 ${color} shadow-lg`}>
        <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</p>
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
      </div>
    );
  }