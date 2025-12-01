export interface Patient {
  id: string;
  name: string;
  displayId: number;
  bed: string;
  bedType: 'CLÍNICO' | 'ESTABILIZAÇÃO' | 'ISOLAMENTO' | 'OBSERVAÇÃO';
  admissionDate: string;
  duration: string;
  susCard?: string;
  birthDate?: string;
  cpf?: string;
  gender?: string;
  diagnosis?: string;
  risk?: string;
  isolation?: string;
  origin?: string;
  motherName?: string;
  phone?: string;
  address?: {
    zip: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  }
}

export type ModalType = 'none' | 'record' | 'edit' | 'exitReason' | 'registerExit';

export interface StatData {
  label: string;
  value: number;
  total: number;
  color: string;
}