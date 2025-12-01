import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import PatientTable from './components/PatientTable';
import PatientRecordModal from './components/modals/PatientRecordModal';
import EditPatientModal from './components/modals/EditPatientModal';
import SelectExitReasonModal from './components/modals/SelectExitReasonModal';
import RegisterExitModal from './components/modals/RegisterExitModal';
import { MOCK_PATIENTS, STATS } from './constants';
import { Patient, ModalType } from './types';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>('none');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleViewPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setActiveModal('record');
  };

  const closeModal = () => {
    setActiveModal('none');
    // Note: We don't clear selectedPatient immediately to avoid content flashing during close animation if we had one
  };

  const handleEditPatient = () => {
    setActiveModal('edit');
  };

  const handleSaveEdit = () => {
    // Logic to save would go here
    setActiveModal('record'); // Return to record view
  };

  const handleChangeStatus = () => {
    setActiveModal('exitReason');
  };

  const handleSelectExitReason = (reason: string) => {
    console.log(`Selected reason: ${reason}`);
    setActiveModal('registerExit');
  };

  const handleConfirmExit = () => {
    // Logic to confirm exit
    console.log('Exit confirmed');
    closeModal();
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-sans text-gray-900 dark:text-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
        <Header />
        
        <StatsCards stats={STATS} />
        
        <PatientTable 
          patients={MOCK_PATIENTS} 
          onViewPatient={handleViewPatient} 
        />
      </main>

      {/* Modals */}
      <PatientRecordModal 
        isOpen={activeModal === 'record'} 
        onClose={closeModal} 
        patient={selectedPatient}
        onEdit={handleEditPatient}
        onChangeStatus={handleChangeStatus}
      />

      <EditPatientModal 
        isOpen={activeModal === 'edit'} 
        onClose={() => setActiveModal('record')} 
        patient={selectedPatient}
        onSave={handleSaveEdit}
      />

      <SelectExitReasonModal 
        isOpen={activeModal === 'exitReason'} 
        onClose={() => setActiveModal('record')}
        onSelect={handleSelectExitReason}
      />

      <RegisterExitModal 
        isOpen={activeModal === 'registerExit'} 
        onClose={() => setActiveModal('exitReason')}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
};

export default App;