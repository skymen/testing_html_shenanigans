export const config = {
  highlight: false,
  deprecated: false,
  isTrigger: true,
  listName: "On Function",
  displayText: "[h3][info]◃[h2]𝑓[/h2]▹ [b]{0}[/b][/info][/h3]",
  description: "This is a sample trigger",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the function",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (name) {
  return true;
}
