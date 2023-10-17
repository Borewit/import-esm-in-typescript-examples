import autocomplete from "inquirer-autocomplete-standalone";

await autocomplete({
  message: "what city?",
  source: async (input) => {
    return [
      {
        value: "choice 1",
      },
    ];
  },
});
