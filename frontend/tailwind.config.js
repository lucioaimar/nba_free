/* @vite-ignore */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ATL: '#C8102E',
        BOS: '#007A33',
        CLE: '#860038',
        NOP: '#0C2340',
        CHI: '#CE1141',
        DAL: '#00538C',
        DEN: '#0E2240',
        GSW: '#1D428A',
        HOU: '#CE1141',
        LAC: '#C8102E',
        LAL: '#552583',
        MIA: '#5D76A9',
        MIL: '#00471B',
        MIN: '#0C2340',
        BKN: '#000000',
        NYK: '#006BB6',
        ORL: '#0077C0',
        IND: '#002D62',
        PHI: '#006BB6',
        PHX: '#1D1160',
        POR: '#E03A3E',
        SAC: '#5A2D81',
        SAS: '#C4CED4',
        OKC: '#007AC1',
        TOR: '#CE1141',
        UTA: '#002B5C',
        MEM: '#5D76A9',
        WAS: '#002B5C',
        DET: '#C8102E',
        CHA: '#1D1160',
      },
    },
  },
  plugins: [],
};
