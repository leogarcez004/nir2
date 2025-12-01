import React from 'react';
import ModalWrapper from './ModalWrapper';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RegisterExitModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidthClass="max-w-2xl">
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30">
              <span className="material-icons-outlined text-red-500 dark:text-red-400">logout</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Registrar Saída do Paciente</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Confirme a data e hora do evento para finalizar.</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <span className="material-icons-outlined">close</span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data do Evento</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:text-white">
                  <option>30</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
              </div>
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:text-white">
                  <option>11</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
              </div>
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:text-white">
                  <option>2024</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
              </div>
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:text-white">
                  <option>20</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
              </div>
              <div className="relative">
                <select className="w-full appearance-none pl-3 pr-8 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:text-white">
                  <option>33</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Observações</label>
            <textarea 
              rows={4} 
              className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:text-white placeholder-gray-400"
              placeholder="Adicione observações sobre a saída do paciente..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 flex justify-end items-center gap-4 border-t border-gray-200 dark:border-gray-700 rounded-b-xl">
        <button 
          onClick={onClose}
          className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          CANCELAR
        </button>
        <button 
          onClick={onConfirm}
          className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors shadow-sm"
        >
          CONFIRMAR SAÍDA
        </button>
      </div>
    </ModalWrapper>
  );
};

export default RegisterExitModal;