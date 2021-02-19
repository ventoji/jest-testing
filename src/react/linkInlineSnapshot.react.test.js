// Copyright 2004-present Facebook. All Rights Reserved.

"use strict";

import React from "react";
import Link from "./Link.react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="https://prettier.io">Prettier</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="https://prettier.io"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Prettier
    </a>
  `);
});
