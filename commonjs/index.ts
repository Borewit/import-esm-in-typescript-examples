async function main() {
  const { default: autocomplete } = await import(
    "inquirer-autocomplete-standalone"
  );
  const answer = await autocomplete({
    message: "What city?",
    source: async (input) => {
      return [
        {
          value: "choice 1",
        },
      ];
    },
  });
}

main();
