import DashboardManager from '@/components/DashboardManager';

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-full m-0 p-4 md:p-8 flex flex-col justify-start items-center overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col">
        <DashboardManager />
      </div>
    </main>
  );
}