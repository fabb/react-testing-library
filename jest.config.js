/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '.*\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
    verbose: true,
}
