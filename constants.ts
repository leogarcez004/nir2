import { Patient, StatData } from './types';

export const MOCK_PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'FULANO DE TAL HIATO',
    displayId: 683,
    bed: 'Leito E-EST-02',
    bedType: 'ESTABILIZAÇÃO',
    admissionDate: '30/11 20:33',
    duration: '18h 38m',
    susCard: '980016283451111',
    birthDate: '30/11/1985',
    cpf: '123.456.789-00',
    gender: 'Masculino',
    diagnosis: 'GRIPE',
    risk: 'Amarelo',
    isolation: 'Nenhum',
    origin: 'SPA',
    motherName: 'Maria da Silva',
    phone: '(11) 98765-4321',
    address: {
      zip: '01001-000',
      street: 'Praça da Sé',
      number: '123',
      neighborhood: 'Sé',
      city: 'São Paulo',
      state: 'SP'
    }
  },
  {
    id: '2',
    name: 'Leonardo Gonzaga',
    displayId: 517,
    bed: 'Leito 01',
    bedType: 'CLÍNICO',
    admissionDate: '30/11 19:26',
    duration: '19h 45m',
    susCard: '754826159348215',
    diagnosis: 'PNEUMONIA'
  },
  {
    id: '3',
    name: 'Luiz Gonzaga Nogueira',
    displayId: 521,
    bed: 'Leito 02',
    bedType: 'CLÍNICO',
    admissionDate: '30/11 12:00',
    duration: '1d 3h',
    diagnosis: 'HIPERTENSÃO'
  },
  {
    id: '4',
    name: 'Fulano de Tal Caio',
    displayId: 527,
    bed: 'Leito 03',
    bedType: 'CLÍNICO',
    admissionDate: '30/11 19:45',
    duration: '19h 26m',
    diagnosis: 'DIABETES'
  },
  {
    id: '5',
    name: 'Fulano de Tal Brisa',
    displayId: 597,
    bed: 'Leito 04',
    bedType: 'CLÍNICO',
    admissionDate: '30/11 20:28',
    duration: '18h 43m',
    diagnosis: 'COVID-19'
  }
];

export const STATS: StatData[] = [
  { label: 'CLÍNICO', value: 6, total: 10, color: '#3b82f6' }, // blue-500
  { label: 'ISOLAMENTO', value: 0, total: 8, color: '#9ca3af' }, // gray-400
  { label: 'OBSERVAÇÃO', value: 3, total: 4, color: '#f97316' }, // orange-500
  { label: 'ESTABILIZAÇÃO', value: 1, total: 2, color: '#ef4444' }, // red-500
];