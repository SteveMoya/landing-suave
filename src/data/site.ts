export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export const site = {
  name: 'Suave',
  tagline: 'Duerme. Sueña. Flota.',
  description:
    'La app de bienestar y sueño que convierte tus noches en descanso real: sonidos suaves, rutinas guiadas y un diario de sueño que te entiende.',
  url: 'https://suave.stevemoya.me',
  email: 'hola@suave.app',
  founded: 2021,

  nav: [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Método', href: '#metodo' },
    { label: 'Progreso', href: '#progreso' },
    { label: 'Precios', href: '#precios' },
  ] satisfies NavItem[],

  hero: {
    badge: 'Sueño profundo en 3 noches',
    title: { start: 'El descanso que tu cuerpo', accent: 'recuerda.' },
    subtitle:
      'Sonidos envolventes, respiraciones guiadas y un diario de sueño que aprende de ti. Despierta renovada, cada mañana.',
    primaryCta: 'Descansar gratis',
    secondaryCta: 'Ver cómo funciona',
  },

  stats: [
    { value: '850.000', label: 'noches mejoradas' },
    { value: '+41%', label: 'tiempo de sueño profundo' },
    { value: '4,9/5', label: 'en las tiendas' },
    { value: '120+', label: 'sonidos y paisajes' },
  ],

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/suave.app', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/suaveapp', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@suaveapp', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@suaveapp', icon: 'youtube' },
  ] satisfies Social[],

  newsletter: {
    title: 'Consejos para dormir mejor',
    subtitle: 'Un ritual suave cada domingo en tu correo.',
    placeholder: 'tu@correo.com',
    button: 'Unirme al ritual',
    success: 'Bienvenida al ritual. Tu primera noche empieza hoy. 🌙',
  },

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;