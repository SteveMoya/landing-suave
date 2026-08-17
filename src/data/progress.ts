export interface ProgressStat {
  value: string;
  label: string;
  trend: string;
  accent: 'mint' | 'coral' | 'lilac' | 'sky';
  bar: number;
}

export const progress: ProgressStat[] = [
  { value: '7h 32m', label: 'Duración media', trend: '+52 min', accent: 'mint', bar: 88 },
  { value: '2h 04m', label: 'Sueño profundo', trend: '+41%', accent: 'lilac', bar: 72 },
  { value: '12', label: 'Noches seguidas', trend: 'récord', accent: 'coral', bar: 60 },
  { value: '94', label: 'Puntuación de descanso', trend: '+12 pts', accent: 'sky', bar: 94 },
];