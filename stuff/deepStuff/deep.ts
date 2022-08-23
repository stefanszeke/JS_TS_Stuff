import { deepCopy } from "deep-copy-ts";
import deepEqual from "deep-equal";

const item1 = [{ a: [2, 3], b: ["dog", "cat"] }];
const item2 = deepCopy(item1);

const item3 = [{ a: [2, 4], b: ["dog", "cat"] }];

console.log(item1 === item2);

console.log(deepEqual(item1, item2));
console.log(deepEqual(item1, item3));


item2[0].b[0] = "TEST"

console.log(item1)
console.log(item2)
