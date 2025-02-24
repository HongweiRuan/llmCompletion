"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prelude_1 = require("./prelude");
const sketch_1 = require("./sketch");
const PlayListState_eq = (s1, s2) => {
    if (s1.type === "Playing" && s2.type === "Playing") {
        return s1.id === s2.id;
    }
    else if (s1.type === "PausedOn" && s2.type === "PausedOn") {
        return s1.id === s2.id;
    }
    else {
        return s1.type === "NoSongSelected" && s2.type === "NoSongSelected";
    }
};
const PlayList_eq = (p1, p2) => {
    return (PlayListState_eq((0, prelude_1.get_state)(p1), (0, prelude_1.get_state)(p2)) &&
        (0, prelude_1.get_songs)(p1).length === (0, prelude_1.get_songs)(p2).length &&
        (0, prelude_1.get_songs)(p1).every((id, i) => id === (0, prelude_1.get_songs)(p2)[i]));
};
// Testing PlaySong
const test1 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "PlaySong", id: 0 }), [[0, 1, 2], { type: "Playing", id: 0 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "PlaySong", id: 0 }),
        [[0, 1, 2], { type: "Playing", id: 0 }]
    ]
});
const test2 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 1 }], { type: "PlaySong", id: 1 }), [[0, 1, 2], { type: "Playing", id: 1 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 1 }], { type: "PlaySong", id: 1 }),
        [[0, 1, 2], { type: "Playing", id: 1 }]
    ]
});
const test3 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 0 }], { type: "PlaySong", id: 1 }), [[0, 1, 2], { type: "Playing", id: 1 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 0 }], { type: "PlaySong", id: 1 }),
        [[0, 1, 2], { type: "Playing", id: 1 }]
    ]
});
// Testing PauseCurrentSong
const test4 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "PauseCurrentSong" }), [[0, 1, 2], { type: "NoSongSelected" }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "PauseCurrentSong" }),
        [[0, 1, 2], { type: "NoSongSelected" }]
    ]
});
const test5 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 1 }], { type: "PauseCurrentSong" }), [[0, 1, 2], { type: "PausedOn", id: 1 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 1 }], { type: "PauseCurrentSong" }),
        [[0, 1, 2], { type: "PausedOn", id: 1 }]
    ]
});
const test6 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 0 }], { type: "PauseCurrentSong" }), [[0, 1, 2], { type: "PausedOn", id: 0 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 0 }], { type: "PauseCurrentSong" }),
        [[0, 1, 2], { type: "PausedOn", id: 0 }]
    ]
});
// Testing RemoveSong
const test7 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "RemoveSong", id: 0 }), [[1, 2], { type: "NoSongSelected" }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "RemoveSong", id: 0 }),
        [[1, 2], { type: "NoSongSelected" }]
    ]
});
const test8 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 0 }], { type: "RemoveSong", id: 0 }), [[1, 2], { type: "NoSongSelected" }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 0 }], { type: "RemoveSong", id: 0 }),
        [[1, 2], { type: "NoSongSelected" }]
    ]
});
const test9 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 0 }], { type: "RemoveSong", id: 0 }), [[1, 2], { type: "NoSongSelected" }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 0 }], { type: "RemoveSong", id: 0 }),
        [[1, 2], { type: "NoSongSelected" }]
    ],
});
const test10 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 1 }], { type: "RemoveSong", id: 0 }), [[1, 2], { type: "Playing", id: 1 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 1 }], { type: "RemoveSong", id: 0 }),
        [[1, 2], { type: "Playing", id: 1 }]
    ],
});
const test11 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 1 }], { type: "RemoveSong", id: 0 }), [[1, 2], { type: "PausedOn", id: 1 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 1 }], { type: "RemoveSong", id: 0 }),
        [[1, 2], { type: "PausedOn", id: 1 }]
    ],
});
const test12 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 1 }], { type: "RemoveSong", id: 3 }), [[0, 1, 2], { type: "Playing", id: 1 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 1 }], { type: "RemoveSong", id: 3 }),
        [[0, 1, 2], { type: "Playing", id: 1 }]
    ],
});
// Testing AddSong
const test13 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "AddSong", id: 3 }), [[0, 1, 2, 3], { type: "NoSongSelected" }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "NoSongSelected" }], { type: "AddSong", id: 3 }),
        [[0, 1, 2, 3], { type: "NoSongSelected" }]
    ],
});
const test14 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 0 }], { type: "AddSong", id: 3 }), [[0, 1, 2, 3], { type: "Playing", id: 0 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "Playing", id: 0 }], { type: "AddSong", id: 3 }),
        [[0, 1, 2, 3], { type: "Playing", id: 0 }]
    ],
});
const test15 = () => ({
    result: PlayList_eq((0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 0 }], { type: "AddSong", id: 3 }), [[0, 1, 2, 3], { type: "PausedOn", id: 0 }]),
    values: [
        (0, sketch_1.update)([[0, 1, 2], { type: "PausedOn", id: 0 }], { type: "AddSong", id: 3 }),
        [[0, 1, 2, 3], { type: "PausedOn", id: 0 }]
    ],
});
const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, test14, test15];
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