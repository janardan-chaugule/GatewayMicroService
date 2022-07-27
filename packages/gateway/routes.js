const ROUTES = [
    {
        url: '/user-api/**',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:3002/user-api/",
            changeOrigin: true,
            pathRewrite: {
                [`^/user-api`]: '',
            },
        }
    },
    {
        url: '/order-api/**',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3001/order-api/",
            changeOrigin: true,
            pathRewrite: {
                [`^/order-api`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;