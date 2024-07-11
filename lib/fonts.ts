import localFont from 'next/font/local';

export const TtCommon = localFont({
  src: [
    {
      path: '../fonts/tt-commons/Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/tt-commons/Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-ttcommons',
});