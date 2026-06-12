import { Thermometer, Droplets, Wind, Cpu, Database, Zap } from 'lucide-react';

export const RISK_LOCATIONS = [
  { id: 1, name: 'San Pedro Sula', risk: 'high', x: '25%', y: '30%' },
  { id: 2, name: 'Tegucigalpa', risk: 'high', x: '40%', y: '65%' },
  { id: 3, name: 'La Ceiba', risk: 'medium', x: '45%', y: '20%' },
  { id: 4, name: 'Choluteca', risk: 'medium', x: '35%', y: '85%' },
  { id: 5, name: 'Copán Ruinas', risk: 'low', x: '10%', y: '45%' },
  { id: 6, name: 'Roatán', risk: 'low', x: '70%', y: '10%' },
];

export const TECH_FEATURES = [
  {
    title: 'Modelado Térmico',
    desc: 'Análisis de rangos óptimos de temperatura para el ciclo biológico del vector.',
    icon: Thermometer,
    color: 'text-tech-green'
  },
  {
    title: 'Higrometría Avanzada',
    desc: 'Monitoreo de humedad relativa para predecir la longevidad del mosquito adulto.',
    icon: Droplets,
    color: 'text-tech-green'
  },
  {
    title: 'Dinámica de Vientos',
    desc: 'Estudio de corrientes de aire que facilitan el desplazamiento del vector en zonas urbanas.',
    icon: Wind,
    color: 'text-tech-green'
  },
  {
    title: 'Patrones Geográficos',
    desc: 'Identificación geoespacial de zonas críticas y factores de riesgo para la población en áreas específicas.',
    icon: Cpu,
    color: 'text-orange-500'
  },
  {
    title: 'Base de Datos Integrada',
    desc: 'Procesamiento masivo de datos espaciales y registros de terreno para la determinación de puntos de riesgo.',
    icon: Database,
    color: 'text-orange-500'
  },
  {
    title: 'Alertas Tempranas',
    desc: 'Predicciones georreferenciadas de brotes para guiar la toma de decisiones y acciones de control en salud pública.',
    icon: Zap,
    color: 'text-tech-green'
  }
];