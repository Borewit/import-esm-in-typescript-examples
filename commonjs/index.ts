import {loadEsm} from 'load-esm';

async function main() {
  const { default: autocomplete } = await loadEsm(
    "inquirer-autocomplete-standalone"
  );
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
