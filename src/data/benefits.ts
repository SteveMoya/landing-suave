export interface Benefit {
  icon: 'moon' | 'wind' | 'heart' | 'sparkles' | 'drop' | 'shield';
  title: string;
  description: string;
  accent: 'mint' | 'coral' | 'lilac' | 'sky' | 'coral' | 'mint';
}

export const benefits: Benefit[] = [
  {
    icon: 'moon',
    title: 'Sonidos envolventes',
    description:
      'Lluvia, olas, tormenta lejana o ruido rosa. Paisajes sonoros de horas, sin bucles que se notan.',
    accent: 'mint',
  },
  {
    icon: 'wind',
    title: 'Respiraciones guiadas',
    description:
      'Sesiones de 60 segundos a 20 minutos para bajar el ritmo antes de apagar la luz.',
    accent: 'lilac',
  },
  {
    icon: 'heart',
    title: 'Diario de sueño',
    description:
      'Registra tus noches sin esfuerzo: Suave detecta tu descanso y te muestra patrones que no sabías que tenías.',
    accent: 'coral',
  },
  {
    icon: 'sparkles',
    title: 'Rituales nocturnos',
    description:
      'Rutinas de 10 minutos: estiramientos suaves, luz cálida y sonidos que te preparan para dormir.',
    accent: 'sky',
  },
  {
    icon: 'drop',
    title: 'Sueño inteligente',
    description:
      'El despertador se adapta a tu fase más ligera del sueño. Despiertas despejada, no de mal humor.',
    accent: 'mint',
  },
  {
    icon: 'shield',
    title: 'Privacidad total',
    description:
      'Tus datos de sueño son tuyos. Sin anuncios, sin venta de datos, sin grises en la letra pequeña.',
    accent: 'lilac',
  },
];