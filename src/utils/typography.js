import Typography from "typography";

const typography = new Typography(
  {
  googleFonts: [
    {
      name: 'Archivo',
      styles: [
        '600', '700'
      ],
    },
    {
      name: 'Bitter',
      styles: [
        '400',
      ],
    },
    {
      name: 'Archivo Black',
      styles: [
      ],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.56,
  headerFontFamily: [
    "Archivo",
    // "Helvetica Neue",
    // "Segoe UI",
    // "Helvetica",
    // "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Bitter","serif"],
  headerWeight: 600,
}
// moragaTheme
);

export default typography;
