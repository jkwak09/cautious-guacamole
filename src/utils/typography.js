import Typography from "typography";
// import moragaTheme from 'typography-theme-moraga';
// import url('https://fonts.googleapis.com/css2?family=Proza+Libre:wght@600&display=swap');

const typography = new Typography(
  {
  googleFonts: [
    {
      name: 'Proza Libre',
      styles: [
        '600',
      ],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.56,
  headerFontFamily: [
    "Proza Libre",
    // "Helvetica Neue",
    // "Segoe UI",
    // "Helvetica",
    // "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
}
// moragaTheme
);

export default typography;
