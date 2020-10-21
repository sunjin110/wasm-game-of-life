'use strict';

import init, { Universe } from './wasm_game_of_life.js';

const pre = document.querySelector('#game-of-life-canvas');

async function run() {
    await init();

    // console.log("greet!");
    // greet();

    const universe = Universe.new();

    const renderLoop = () => {
        pre.textContent = universe.render();
        universe.tick();

        requestAnimationFrame(renderLoop);
    };

    requestAnimationFrame(renderLoop);


}

run();