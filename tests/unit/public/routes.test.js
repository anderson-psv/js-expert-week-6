import { jest, expect, describe, test } from "@jest/globals";
import config from "../../../server/config.js";

const { pages } = config;
describe("#Routes - test site for api response", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test.todo("GET / - should redirect to home page");
    test.todo(`GET /home - should response with ${pages.HomeHTML} file stream`);
    test.todo(
        `GET /controller - should response with ${pages.controller} file stream`
    );
    test.todo(`GET /file.ext - should response with file stream`);
    test.todo(
        `GET /unknow - given an inexistent rout it shoudl response with 404`
    );

    describe("exceptions", () => {
        test.todo('Given inexistent file it should respond with 404')
        test.todo('Given an error file it should respond with 504')
    });
});
