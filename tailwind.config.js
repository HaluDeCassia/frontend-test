module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/components/**/*.jsx", "./src/pages/**/*.jsx"],
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
