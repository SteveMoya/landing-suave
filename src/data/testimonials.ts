export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: 'mint' | 'coral' | 'lilac' | 'sky';
}

// mock: testimonios ficticios
export const testimonials: Testimonial[] = [
  {
    quote:
      'Llevaba años durmiendo mal sin saberlo. En tres semanas con Suave mi ansiedad al despertar simplemente desapareció.',
    name: 'Lucía Ferrer',
    role: 'Enfermera · Madrid',
    initials: 'LF',
    accent: 'lilac',
  },
  {
    quote:
      'El despertador inteligente cambió mis mañanas. Ya no necesito café para arrancar, y eso nunca me había pasado.',
    name: 'Pablo Duarte',
    role: 'Diseñador · CDMX',
    initials: 'PD',
    accent: 'mint',
  },
  {
    quote:
      'Compré la suscripción para mi madre, que no dormía por turnos. Ahora la llamo por la mañana y me cuenta sus sueños.',
    name: 'Sofía Navarro',
    role: 'Profesora · Valencia',
    initials: 'SN',
    accent: 'coral',
  },
];