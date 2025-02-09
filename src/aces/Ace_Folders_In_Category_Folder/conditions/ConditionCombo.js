export const config = {
  highlight: false,
  deprecated: false,
  listName: "Parameter",
  displayText: "[good]◃[h3]🖈[/h3]▹ [i]{1}[/i] [b]{0}[/b][/good]",
  description: "This is a sample condition",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the param",
      type: "string",
      initialValue: "",
    },
    {
      id: "type",
      name: "Type",
      desc: "The type of the param",
      type: "combo",
      initialValue: "ANY",
      items: [
        { ANY: "any" },
        { NUMBER: "number" },
        { STRING: "string" },
        { BOOLEAN: "boolean" },
      ],
    },
  ],
};

export const expose = true;

export default function (name, type) {
  return true;
}
