"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prelude_1 = require("./prelude");
const sketch_1 = require("./sketch");
// EMOJIPAINT MVU EPILOGUE
const test1 = () => {
    const [grid, ,] = (0, sketch_1.update)(prelude_1.model_init, { type: "StampEmoji", row: 0, col: 0 });
    return {
        result: grid[0][0] === "😄" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "",
        values: [grid, [["😄", "", ""], ["", "", ""], ["", "", ""]]],
    };
};
const test2 = () => {
    const [grid, ,] = (0, sketch_1.update)(prelude_1.model_init, { type: "FillRow", row: 1 });
    return {
        result: grid[0][0] === "" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "😄" && grid[1][1] === "😄" && grid[1][2] === "😄" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "",
        values: [grid, [["", "", ""], ["😄", "😄", "😄"], ["", "", ""]]],
    };
};
const test3 = () => {
    let model = (0, sketch_1.update)(prelude_1.model_init, { type: "SelectEmoji", emoji: "😅" });
    const [grid, selectedEmoji,] = (0, sketch_1.update)(model, { type: "StampEmoji", row: 2, col: 2 });
    return {
        result: grid[0][0] === "" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "😅" && selectedEmoji === "😅",
        values: [grid, [["", "", ""], ["", "", ""], ["", "", "😅"]], selectedEmoji, "😅"],
    };
};
const test4 = () => {
    let model = (0, sketch_1.update)(prelude_1.model_init, { type: "FillRow", row: 0 });
    const [grid, ,] = (0, sketch_1.update)(model, { type: "ClearCell", row: 0, col: 1 });
    return {
        result: grid[0][0] === "😄" && grid[0][1] === "" && grid[0][2] === "😄" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "",
        values: [grid, [["😄", "", "😄"], ["", "", ""], ["", "", ""]]],
    };
};
const test5 = () => {
    let model = (0, sketch_1.update)(prelude_1.model_init, { type: "StampEmoji", row: 1, col: 1 });
    const [grid, ,] = (0, sketch_1.update)(model, { type: "ClearGrid" });
    return {
        result: grid[0][0] === "" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "",
        values: [grid, [["", "", ""], ["", "", ""], ["", "", ""]]],
    };
};
const test6 = () => {
    const [, selectedEmoji,] = (0, sketch_1.update)(prelude_1.model_init, { type: "SelectEmoji", emoji: "😊" });
    const [grid_init, , emojiList_init] = prelude_1.model_init;
    const [grid, ,] = (0, sketch_1.update)([grid_init, selectedEmoji, emojiList_init], { type: "StampEmoji", row: 1, col: 2 });
    return {
        result: grid[0][0] === "" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "😊" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "",
        values: [grid, [["", "", ""], ["", "", "😊"], ["", "", ""]]],
    };
};
const test7 = () => {
    const [, selectedEmoji, emojiList] = prelude_1.model_init;
    const model = (0, sketch_1.update)(prelude_1.model_init, { type: "FillRow", row: 2 });
    const [grid, ,] = (0, sketch_1.update)(model, { type: "ClearCell", row: 2, col: 0 });
    return {
        result: grid[0][0] === "" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "" && grid[2][0] === "" && grid[2][1] === "😄" && grid[2][2] === "😄",
        values: [grid, [["", "", ""], ["", "", ""], ["", "😄", "😄"]]],
    };
};
const test8 = () => {
    let model = (0, sketch_1.update)(prelude_1.model_init, { type: "StampEmoji", row: 0, col: 0 });
    model = (0, sketch_1.update)(model, { type: "StampEmoji", row: 1, col: 1 });
    model = (0, sketch_1.update)(model, { type: "StampEmoji", row: 2, col: 2 });
    const [grid, ,] = (0, sketch_1.update)(model, { type: "ClearGrid" });
    return {
        result: grid[0][0] === "" && grid[0][1] === "" && grid[0][2] === "" && grid[1][0] === "" && grid[1][1] === "" && grid[1][2] === "" && grid[2][0] === "" && grid[2][1] === "" && grid[2][2] === "",
        values: [grid, [["", "", ""], ["", "", ""], ["", "", ""]]],
    };
};
const test9 = () => {
    const [grid_init, , emojiList_init] = prelude_1.model_init;
    let model = (0, sketch_1.update)(prelude_1.model_init, { type: "FillRow", row: 0 });
    const [, selectedEmoji,] = (0, sketch_1.update)(model, { type: "SelectEmoji", emoji: "😆" });
    const [grid, ,] = model;
    const [updatedGrid, ,] = (0, sketch_1.update)([grid, selectedEmoji, emojiList_init], { type: "StampEmoji", row: 1, col: 1 });
    return {
        result: updatedGrid[0][0] === "😄" && updatedGrid[0][1] === "😄" && updatedGrid[0][2] === "😄" && updatedGrid[1][0] === "" && updatedGrid[1][1] === "😆" && updatedGrid[1][2] === "" && updatedGrid[2][0] === "" && updatedGrid[2][1] === "" && updatedGrid[2][2] === "",
        values: [updatedGrid, [["😄", "😄", "😄"], ["", "😆", ""], ["", "", ""]]],
    };
};
const test10 = () => {
    let model = (0, sketch_1.update)(prelude_1.model_init, { type: "StampEmoji", row: 0, col: 0 });
    model = (0, sketch_1.update)(model, { type: "FillRow", row: 2 });
    const [grid, , emojiList] = model;
    model = (0, sketch_1.update)(model, { type: "SelectEmoji", emoji: "😉" });
    model = (0, sketch_1.update)(model, { type: "StampEmoji", row: 1, col: 1 });
    model = (0, sketch_1.update)(model, { type: "ClearCell", row: 2, col: 2 });
    const [updatedGrid, selectedEmoji, _] = model;
    return {
        result: updatedGrid[0][0] === "😄" && updatedGrid[0][1] === "" && updatedGrid[0][2] === "" && updatedGrid[1][0] === "" && updatedGrid[1][1] === "😉" && updatedGrid[1][2] === "" && updatedGrid[2][0] === "😄" && updatedGrid[2][1] === "😄" && updatedGrid[2][2] === "" && selectedEmoji === "😉",
        values: [updatedGrid, [["😄", "", ""], ["", "😉", ""], ["😄", "😄", ""]], selectedEmoji, "😉"],
    };
};
const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10];
let score = 0;
for (let i = 0; i < tests.length; ++i) {
    try {
        const run = tests[i]();
        console.assert(run.result === true, "%o", { i: i + 1, values: run.values });
        if (run.result) {
            score++;
        }
    }
    catch (err) {
        console.log(err);
    }
}
console.log(`score: ${score} / ${tests.length}`);
//# sourceMappingURL=epilogue.js.map