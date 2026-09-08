import { Inter, Rubik } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400'],
});

const geistSans = GeistSans;
const geistMono = GeistMono;
const geistPixelSquare = GeistPixelSquare;

export { inter, rubik, geistSans, geistMono, geistPixelSquare };
