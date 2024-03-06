import {authentication, generateSessionToken, random} from "./index";
import jwt from "jsonwebtoken";
import process from "process";

describe('Helpers functions', () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = {...env}
    })

    afterEach(() => {
        process.env = env
    })

    it('random', () => {
        const string1 = random();
        const string2 = random();
        expect(typeof string1).toBe('string');
        expect(typeof string2).toBe('string');
        expect(string1).not.toBe(string2);
    });

    it('generateSessionToken', () => {
        process.env.SECRET_KEY = 'secret-test-key';

        const userId = 'user123';
        const token = generateSessionToken(userId);

        expect(typeof token).toBe('string');

        const decoded = jwt.decode(token);

        expect(decoded).toHaveProperty('userId', userId);

        const verified = jwt.verify(token, process.env.SECRET_KEY);
        expect(verified).toHaveProperty('userId', userId);
    });

    it('should return a hash as a string', () => {
        const salt = 'salt123';
        const password = 'password123';

        const hash = authentication(salt, password);
        expect(typeof hash).toBe('string');
        expect(hash.length).toBe(64);
    });

    it('should return the expected hash for given inputs', () => {
        const salt = 'salt123';
        const password = 'password123';
        const expectedHash = 'd0f45c055c8d25583f7892607727808b4a289c68d81a3e522de4b5dd7f671c22';

        const hash = authentication(salt, password);

        expect(hash).toBe(expectedHash);
    });
});

