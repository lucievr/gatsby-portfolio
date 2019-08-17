/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({
    stage, getConfig, rules, loaders, actions
   }) => {
     actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(woff(2)?|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: `${__dirname}/public/static/fonts/`,
                        }
                      }
                    ]
                  }
            ],
          },
     });
   }