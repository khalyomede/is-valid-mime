# isValidMime

Returns true if the string corresponds to a valid MIME type.

![npm](https://img.shields.io/npm/v/is-valid-mime) ![NPM](https://img.shields.io/npm/l/is-valid-mime) [![Build Status](https://travis-ci.com/khalyomede/is-valid-mime.svg?branch=master)](https://travis-ci.com/khalyomede/is-valid-mime) [![codecov](https://codecov.io/gh/khalyomede/is-valid-mime/branch/master/graph/badge.svg)](https://codecov.io/gh/khalyomede/is-valid-mime) [![Maintainability](https://api.codeclimate.com/v1/badges/e2c8f777723374c82350/maintainability)](https://codeclimate.com/github/khalyomede/is-valid-mime/maintainability) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/is-valid-mime) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/is-valid-mime)

## Summary

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)
- [API](#api)
- [Changelog](CHANGELOG.md)

## About

I created this package to have a straight forward way to check if a MIME type is valid in my code.

Note that if you do not want to pull a dependency, here is how you can do it without this package:

```typescript
import mimeDb from "mime-db";

const mimeType = "text/html";

if (mimeType in mimeDb) {
  console.log(`${mimeType} is a valid MIME type`);
} else {
  console.log(`${mimeType} is not a valid MIME type`);
}
```

This package provides its own Typescript definition.

## Features

- Returns true if the mime passed in parameter is valid, else returns false

## Requirements

[NPM](https://nodejs.org/en/download/) or [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed on your machine.

## Installation

Using NPM

```bash
npm install is-valid-mime
```

Using Yarn

```bash
yarn add is-valid-mime
```

## Examples

- [1. Getting started](#1-getting-started)
- [2. Catch errors](#2-catch-errors)

### 1. Getting started

In this example, you will see how to check if a variable is a valid mime type.

```javascript
import isValidMime from "is-valid-mime";

const mimeType = "cats";

if (isValidMime(mimeType)) {
  console.log("valid");
} else {
  console.log("not valid");
}
```

### 2. Catch errors

In this example, you will see how to catch errors that are thrown by this function.

```javascript
import isValidMime from "is-valid-mime";

const mimeType = 42;
let valid = false;

try {
  valid = isValidMime(mimeType);
} catch (exception) {
  if (exception instanceof TypeError) {
    console.log("expected isValidMime to be called with a string parameter");
  } else {
    console.log("Unhandled error happened");
  }
}

if (valid) {
  console.log("valid");
} else {
  console.log("not valid");
}
```

## API

```typescript
const isValidMime = (mime: string): boolean;
```

### Exceptions

- `TypeError`: if the first parameter is not a string.
