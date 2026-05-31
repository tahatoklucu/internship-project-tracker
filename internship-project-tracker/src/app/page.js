import DashboardManager from '@/components/DashboardManager';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <DashboardManager />
      </div>
    </main>
  );
}