import { devices, type PlaywrightTestConfig } from '@playwright/test'
export const config = (_,): PlaywrightTestConfig => ({
    testMatch: /.*\.spec\.ts$/,
    testDir: './pages',
    reporter: [
        ['list'],
        ['html', {open: 'never', outputFolder: './test-results/'}],
        ['junit', {outputFile:'./test-results/results.xml' }]
    ],
    use: {
        baseURL: 'http://localhost:3000/',
        headless: false,
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chromium']
            }
        }
    ]
})