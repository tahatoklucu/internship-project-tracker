export default function Loading() {
    return (
      <main className="p-4 md:p-8 animate-pulse">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-10">
            <div className="space-y-2 w-full sm:w-1/3">
              <div className="h-8 bg-white/5 rounded-xl w-3/4" />
              <div className="h-4 bg-white/5 rounded-lg w-full" />
            </div>
            <div className="h-11 bg-white/5 rounded-xl w-full sm:w-40" />
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-950/20 backdrop-blur-md p-6 rounded-xl border border-white/5 h-28 flex flex-col justify-between">
                <div className="h-3 bg-white/5 rounded w-1/2" />
                <div className="h-7 bg-white/10 rounded-lg w-1/3 mt-2" />
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-950/20 backdrop-blur-md border border-white/5 rounded-xl p-5 h-64 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-5 bg-white/5 rounded-md w-20" />
                    <div className="h-4 bg-white/5 rounded w-16" />
                  </div>
                  <div className="h-6 bg-white/10 rounded-lg w-3/4" />
                  <div className="space-y-2 pt-2">
                    <div className="h-3 bg-white/5 rounded w-full" />
                    <div className="h-3 bg-white/5 rounded w-5/6" />
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                  <div className="h-4 bg-white/5 rounded w-16" />
                  <div className="flex gap-2">
                    <div className="h-7 bg-white/5 rounded-lg w-16" />
                    <div className="h-7 bg-white/5 rounded-lg w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </main>
    );
  }