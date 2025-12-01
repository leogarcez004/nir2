import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 z-30">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
            <span className="material-icons-outlined text-gray-500 dark:text-gray-400 text-xl">local_hospital</span>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-bold text-gray-900 dark:text-white truncate">NIR</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Hosp. Coroadinho</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-sm hover:bg-green-600 transition-colors mb-4">
            <span className="material-icons-outlined">add_circle_outline</span>
            NOVA ADMISSÃO
          </button>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <span className="material-icons-outlined">dashboard</span>
            Painel Geral
          </a>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-primary font-semibold rounded-lg">
            <span className="material-icons-outlined">bed</span>
            Painel de Leitos
          </a>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <span className="material-icons-outlined">groups</span>
            Banco de Pacientes
          </a>
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="https://picsum.photos/40/40" 
                alt="Avatar" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white dark:ring-surface-dark"></span>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900 dark:text-white">Visitante</p>
              <p className="text-[10px] text-green-500 font-medium">● Conectado</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <span className="material-icons-outlined">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;