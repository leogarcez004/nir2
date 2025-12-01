import React from 'react';
import ModalWrapper from './ModalWrapper';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (reason: string) => void;
}

const SelectExitReasonModal: React.FC<Props> = ({ isOpen, onClose, onSelect }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidthClass="max-w-2xl">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Selecionar Motivo de Saída</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <span className="material-icons-outlined text-3xl">close</span>
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Selecione uma das opções abaixo para registrar a saída do paciente do sistema. Esta ação não poderá ser desfeita.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button onClick={() => onSelect('Alta Médica')} className="group flex flex-col items-center justify-center p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all transform hover:-translate-y-1">
            <span className="material-icons-outlined text-4xl text-blue-500 mb-3 group-hover:scale-110 transition-transform">medical_services</span>
            <span className="font-semibold text-blue-800 dark:text-blue-300">ALTA MÉDICA</span>
          </button>

          <button onClick={() => onSelect('Óbito')} className="group flex flex-col items-center justify-center p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-all transform hover:-translate-y-1">
            <span className="material-icons-outlined text-4xl text-red-500 mb-3 group-hover:scale-110 transition-transform">sentiment_very_dissatisfied</span>
            <span className="font-semibold text-red-800 dark:text-red-300">ÓBITO</span>
          </button>

          <button onClick={() => onSelect('Transferência')} className="group flex flex-col items-center justify-center p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-all transform hover:-translate-y-1">
            <span className="material-icons-outlined text-4xl text-yellow-500 mb-3 group-hover:scale-110 transition-transform">transfer_within_a_station</span>
            <span className="font-semibold text-yellow-800 dark:text-yellow-300 text-sm">TRANSFERÊNCIA</span>
          </button>

          <button onClick={() => onSelect('Evasão')} className="group flex flex-col items-center justify-center p-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-all transform hover:-translate-y-1">
            <span className="material-icons-outlined text-4xl text-orange-500 mb-3 group-hover:scale-110 transition-transform">directions_run</span>
            <span className="font-semibold text-orange-800 dark:text-orange-300">EVASÃO</span>
          </button>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SelectExitReasonModal;