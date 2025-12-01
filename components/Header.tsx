import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center bg-white dark:bg-surface-dark text-primary rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <span className="material-icons-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MAPA DE LEITOS</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Gestão e Ocupação em Tempo Real</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            type="text" 
            placeholder="Buscar paciente..." 
            className="w-72 pl-10 pr-4 py-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm dark:text-white shadow-sm"
          />
        </div>
        <button className="p-2 bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-400 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:text-primary transition-colors">
          <span className="material-icons-outlined">refresh</span>
        </button>
      </div>
    </header>
  );
};

export default Header;