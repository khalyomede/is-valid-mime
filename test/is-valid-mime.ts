import { expect } from "chai";
import { describe, it } from "mocha";
import isValidMime from "../lib";

describe("isValidMime", () => {
	it("should return true if the mime is valid", () => {
		expect(isValidMime("text/html")).to.be.true;
	});

	it("should return false if the mime is not valid", () => {
		expect(isValidMime("cats")).to.be.false;
	});

	it("should throw an exception if the parameter is not a string", () => {
		expect(() => {
			// @ts-ignore
			isValidMime(42);
		}).to.throw("expected isValidMime() parameter 1 to be a string");
	});
});
