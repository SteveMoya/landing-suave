export interface MethodStep {
  num: string;
  title: string;
  description: string;
  accent: 'mint' | 'coral' | 'lilac' | 'sky';
}

export const method: MethodStep[] = [
  {
    num: '01',
    title: 'Baja el ritmo',
    description:
      'La app atenúa la luz de tu pantalla y te invita a una respiración de 60 segundos. Eso es todo para empezar.',
    accent: 'lilac',
  },
  {
    num: '02',
    title: 'Elige tu paisaje',
    description:
      'Un sonido que te envuelve: lluvia en el tejado, olas suaves o viento entre pinos. Suena igual toda la noche.',
    accent: 'sky',
  },
  {
    num: '03',
    title: 'Duerme en fases',
    description:
      'Suave mixa los sonidos según tu etapa de sueño: más intensos al inicio, casi silencio en la fase profunda.',
    accent: 'mint',
  },
  {
    num: '04',
    title: 'Despierta ligera',
    description:
      'El despertador elige el momento exacto de tu sueño ligero. La alarma no rompe nada: te completa.',
    accent: 'coral',
  },
];