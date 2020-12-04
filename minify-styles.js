const { readFileSync, writeFileSync } = require("fs");

const minified = readFileSync("./src/core/styles.ts")
  .toString()
  .replace(/css`[^`]*`/g, (g) =>
    g.replace(/(  |\n)/g, "").replace(/(:|,) /g, "$1")
  );

writeFileSync("./src/core/styles.ts", minified);
