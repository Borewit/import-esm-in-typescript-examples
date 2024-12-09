"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_esm_1 = require("load-esm");
async function main() {
    const { default: autocomplete } = await (0, load_esm_1.loadEsm)("inquirer-autocomplete-standalone");
    const answer = await autocomplete({
        message: "What city?",
        source: async () => {
            return [
                {
                    value: "choice 1",
                },
            ];
        },
    });
}
main();
