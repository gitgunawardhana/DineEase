import url from "@rollup/plugin-url";

export default {
  plugins: [
    url({
      // Include only files smaller than 10kb
      limit: 10 * 1024,
    }),
  ],
};
