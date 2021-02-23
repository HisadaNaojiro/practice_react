const presets = [
    {
        presets: [
            [
                "@babel/preset-env",
            ],
            [
                "@babel/preset-react",
                {
                    runtime: "automatic",
                    development: process.env.NODE_ENV === "development",
                },
            ],
        ],
        plugins: [
        ],
    },
];

module.exports = { presets };