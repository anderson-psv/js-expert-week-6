import { jest, expect, describe, test } from "@jest/globals";
import config from "../../../server/config.js";

const { pages } = config;
describe("#Service - test site for api response", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test.todo("GET / - should redirect to home page");

    describe("exceptions", () => {
        test.todo('Given inexistent file it should respond with 404')
        test.todo('Given an error file it should respond with 504')
    });
});
