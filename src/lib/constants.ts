const problems_base = '/problems';

export const Problems = {
  Spotting: `${problems_base}/spotting-periods`,
  'Irregular Periods': `${problems_base}/irregular-periods`,
  'Vaginal Yeast Infection': `${problems_base}/vaginal-yeast-infection`
};

export const Routes = {
  Home: '/',
  'About Us': '/about-us',
  'About Periods': '/about-periods',
  'Our Products': '/products',
  'Contact Us': '/contact-us'
} as const;

export const RoutesWithProblems = {
  Home: '/',
  'About Us': '/about-us',
  'About Periods': '/about-periods',
  'Problems In Periods': Problems,
  'Our Products': '/products',
  'Contact Us': '/contact-us'
};

export const Slides = [
  '/videos/slide1.mp4',
  '/videos/slide2.mp4',
  '/videos/slide4.mp4',
  '/videos/slide5.mp4'
];
