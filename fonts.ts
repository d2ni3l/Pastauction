import { Montserrat } from 'next/font/google'
import {Inter} from 'next/font/google'

export const inter = Inter({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const montserrat = Montserrat({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })