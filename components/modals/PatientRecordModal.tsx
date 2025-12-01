import React from 'react';
import { Patient } from '../../types';
import ModalWrapper from './ModalWrapper';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  patient: Patient | null;
  onEdit: () => void;
  onChangeStatus: () => void;
}

const PatientRecordModal: React.FC<Props> = ({ isOpen, onClose, patient, onEdit, onChangeStatus }) => {
  if (!patient) return null;

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} maxWidthClass="max-w-3xl">
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <span className="material-icons-outlined text-3xl text-primary">person</span>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Prontuário do Paciente
          </h2>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>

      <div className="p-6 overflow-y-auto">
        <div className="space-y-8">
          {/* Patient Info Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 uppercase tracking-wide">
              Informações do Paciente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Nome do Paciente</label>
                <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{patient.name}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Cartão SUS</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.susCard || '-'}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">ID Paciente</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.displayId}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Nascimento</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.birthDate || '-'}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">CPF</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.cpf || '-'}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Sexo</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.gender || '-'}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                onClick={onEdit}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm transition-colors uppercase"
              >
                Editar Informações do Paciente
              </button>
            </div>
          </div>

          {/* Admission Data Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 uppercase tracking-wide">
              Dados da Admissão
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">N. Admissão</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">623</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Admissão em</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">29/11/2023 18:45</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Cadastrado em</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">29/11/2023 18:45</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Leito</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.bed}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Tipo Leito</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.bedType}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Origem</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.origin || 'SPA'}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Risco</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.risk || 'Amarelo'}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Isolamento</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.isolation || 'Nenhum'}</p>
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Diagnóstico</label>
                <p className="mt-1 text-base text-gray-900 dark:text-white">{patient.diagnosis || 'Não informado'}</p>
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={onChangeStatus}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-primary hover:bg-blue-600 rounded-lg shadow-sm transition-colors uppercase"
              >
                Alterar Status da Internação
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PatientRecordModal;