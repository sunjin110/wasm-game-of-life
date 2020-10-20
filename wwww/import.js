// console.log('init import.js');

// const js = import("./wasm_game_of_life.js");
// js.then(js => {
//     js.greet("WebAssembly!!!");
// });

import * as wasm from "./wasm_game_of_life";
wasm.greet();
