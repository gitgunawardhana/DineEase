module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
      },
    ],
  },
};
