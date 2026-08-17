export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  accent: 'mint' | 'coral' | 'lilac';
}

export const plans: Plan[] = [
  {
    name: 'Brisa',
    price: '$0',
    period: 'para siempre',
    description: 'Para probar el descanso suave.',
    features: ['10 sonidos esenciales', '3 respiraciones guiadas', 'Despertador inteligente', 'Diario básico'],
    cta: 'Empezar gratis',
    accent: 'lilac',
  },
  {
    name: 'Refugio',
    price: '$6',
    period: 'por mes',
    description: 'Todo el ritual, sin límites.',
    features: ['120+ paisajes sonoros', 'Meditaciones ilimitadas', 'Rituales nocturnos', 'Análisis de patrones', 'Modo offline'],
    cta: 'Probar 7 noches gratis',
    featured: true,
    accent: 'mint',
  },
  {
    name: 'Nido',
    price: '$48',
    period: 'por año',
    description: 'Un año entero de descanso.',
    features: ['Todo lo de Refugio', '2 meses de regalo', 'Estadísticas avanzadas', 'Sonidos exclusivos'],
    cta: 'Ahorrar un 33%',
    accent: 'coral',
  },
];