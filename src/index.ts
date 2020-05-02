import mimeDb from "mime-db";

const isValidMime = (mime: string): boolean => {
	if (typeof mime !== "string") {
		throw new TypeError(
			"expected isValidMime() parameter 1 to be a string"
		);
	}
	return mime in mimeDb;
};

export default isValidMime;
