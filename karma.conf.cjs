// karma.conf.cjs
module.exports = function (config) {
    config.set({
    frameworks: ['jasmine'],
    files: [
        'src/test/setupTests.js',
        'src/test/**/*.spec.jsx',
        'src/test/coverageEntry.js',
    ],
    preprocessors: {
        'src/test/setupTests.js': ['webpack'],
        'src/test/**/*.spec.jsx': ['webpack'],
        'src/test/coverageEntry.js': ['webpack'],
    },
    webpack: {
        mode: 'development',
        devtool: 'inline-source-map',
        module: {
        rules: [
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                plugins: [['istanbul', { exclude: ['src/test/**'] }]],
                },
            },
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
        ],
        },
        resolve: {
        extensions: ['.js', '.jsx'],
        },
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
        dir: 'coverage/',
        reporters: [
        { type: 'html', subdir: '.' },
        { type: 'text-summary' },
        ],
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true,
    plugins: [
        'karma-jasmine',
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-coverage',
        'karma-jasmine-html-reporter',
    ],
    });
};