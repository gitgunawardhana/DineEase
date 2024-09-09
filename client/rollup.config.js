import url from "@rollup/plugin-url";

export default {
  plugins: [
    url({
      limit: 10 * 1024, // Inline files smaller than 10kb
      include: ["**/*.svg", "**/*.png"], // Handle SVG and PNG files
      emitFiles: true,
    }),
  ],
};
