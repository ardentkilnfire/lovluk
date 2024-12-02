const problems_base = '/problems';

export const Routes = {
  Home: '/',
  'About Us': '/about-us',
  'About Periods': '/about-periods',
  'Problems In Periods': {
    Spotting: `${problems_base}/spotting`,
    'Irregular Periods': `${problems_base}/irregular-periods`,
    'Vaginal Yeast Infection': `${problems_base}/vaginal-yeast-infection`
  },
  'Our Products': '/products',
  'Contact Us': '/contact-us'
} as const;

export const Slides = [
  '/videos/slide1.mp4',
  '/videos/slide2.mp4',
  '/videos/slide4.mp4',
  '/videos/slide5.mp4'
];
