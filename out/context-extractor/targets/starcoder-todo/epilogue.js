"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prelude_1 = require("./prelude");
const sketch_1 = require("./sketch");
// utility
const num_todos = (m) => {
    return m[1].length;
};
// tests
// Add adds
const test1 = () => {
    return {
        result: num_todos((0, sketch_1.update)(["Breath", []], { type: "AddTodo" })) > num_todos(["Breath", []]),
        values: [num_todos((0, sketch_1.update)(["Breath", []], { type: "AddTodo" })), num_todos(["Breath", []])]
    };
};
// Add uses name, initial status set
const test2 = () => {
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(["Breath", []], { type: "AddTodo" }), ["", [["Breath", false]]]),
        values: [
            (0, sketch_1.update)(["Breath", []], { type: "AddTodo" }),
            ["", [["Breath", false]]]
        ]
    };
};
// Add nonempty (too impl spec? test add + remove eqs)
const test3 = () => {
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(["Chop wood", [["Carry water", false]]], { type: "AddTodo" }), ["", [["Carry water", false], ["Chop wood", false]]]),
        values: [
            (0, sketch_1.update)(["Chop wood", [["Carry water", false]]], { type: "AddTodo" }),
            ["", [["Carry water", false], ["Chop wood", false]]]
        ]
    };
};
// add then remove doesn't change todos
const test4 = () => {
    let todos = [["Breath", false]];
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)((0, sketch_1.update)(["Remove this", todos], { type: "AddTodo" }), { type: "RemoveTodo", id: 1 }), ["", todos]),
        values: [
            (0, sketch_1.update)((0, sketch_1.update)(["Remove this", todos], { type: "AddTodo" }), { type: "RemoveTodo", id: 1 }),
            ["", todos]
        ]
    };
};
// Toggle preserves length
const test5 = () => {
    let model = ["", [["1", false], ["2", false]]];
    return {
        result: num_todos((0, sketch_1.update)(model, { type: "ToggleTodo", id: 1 })) === num_todos(model),
        values: [num_todos((0, sketch_1.update)(model, { type: "ToggleTodo", id: 1 })), num_todos(model)]
    };
};
// Toggle toggles right index
const test6 = () => {
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(["", [["Chop", false], ["Carry", true]]], { type: "ToggleTodo", id: 1 }), ["", [["Chop", false], ["Carry", false]]]),
        values: [
            (0, sketch_1.update)(["", [["Chop", false], ["Carry", true]]], { type: "ToggleTodo", id: 1 }),
            ["", [["Chop", false], ["Carry", false]]]
        ]
    };
};
// Toggle out of bounds
const test7 = () => {
    let model = ["", [["Chop", false], ["Carry", false]]];
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(model, { type: "ToggleTodo", id: 2 }), model),
        values: [
            (0, sketch_1.update)(model, { type: "ToggleTodo", id: 2 }),
            model
        ]
    };
};
// Remove removes
const test8 = () => {
    let model = ["", [["1", false]]];
    return {
        result: num_todos((0, sketch_1.update)(model, { type: "RemoveTodo", id: 0 })) < num_todos(model),
        values: [num_todos((0, sketch_1.update)(model, { type: "RemoveTodo", id: 0 })), num_todos(model)]
    };
};
// Remove removes right index
const test9 = () => {
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(["", [["1", false], ["2", false]]], { type: "RemoveTodo", id: 1 }), ["", [["1", false]]]),
        values: [
            (0, sketch_1.update)(["", [["1", false], ["2", false]]], { type: "RemoveTodo", id: 1 }),
            ["", [["1", false]]]
        ]
    };
};
// Remove out of bounds
const test10 = () => {
    let model = ["", [["1", false]]];
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(model, { type: "RemoveTodo", id: 2 }), model),
        values: [
            (0, sketch_1.update)(model, { type: "RemoveTodo", id: 2 }),
            model
        ]
    };
};
// Update Input
const test11 = () => {
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(["", []], { type: "UpdateBuffer", name: "Breath" }), ["Breath", []]),
        values: [
            (0, sketch_1.update)(["", []], { type: "UpdateBuffer", name: "Breath" }),
            ["Breath", []]
        ]
    };
};
// Don't add blank description
const test12 = () => {
    let model = ["", [["1", false]]];
    return {
        result: (0, prelude_1.model_eq)((0, sketch_1.update)(model, { type: "AddTodo" }), model),
        values: [
            (0, sketch_1.update)(model, { type: "AddTodo" }),
            model
        ]
    };
};
const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12];
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