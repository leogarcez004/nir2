import React from 'react';
import { Patient } from '../types';

interface Props {
  patients: Patient[];
  onViewPatient: (patient: Patient) => void;
}

const PatientTable: React.FC<Props> = ({ patients, onViewPatient }) => {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'ESTABILIZAÇÃO':
        return 'text-red-700 bg-red-100 dark:text-red-200 dark:bg-red-900/40';
      case 'CLÍNICO':
        return 'text-blue-700 bg-blue-100 dark:text-blue-200 dark:bg-blue-900/40';
      default:
        return 'text-gray-700 bg-gray-100 dark:text-gray-200 dark:bg-gray-800';
    }
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Paciente / ID</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Leito</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Entrada</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Permanência</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-semibold text-gray-900 dark:text-white">{patient.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">ID: {patient.displayId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">{patient.bed}</div>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full tracking-wide ${getBadgeColor(patient.bedType)}`}>
                    {patient.bedType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                  {patient.admissionDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 rounded-full font-medium text-sm w-fit">
                    <span className="material-icons-outlined text-sm">timer</span>
                    <span>{patient.duration}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    onClick={() => onViewPatient(patient)}
                    className="p-2 border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors group"
                  >
                    <span className="material-icons-outlined group-hover:scale-110 transition-transform">visibility</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;