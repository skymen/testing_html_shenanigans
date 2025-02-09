import { action, condition, expression } from "../template/aceDefine.js";

const category = "Aces_In_Single_File";

action(
  category,
  "SampleAction",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Sample Action",
    displayText:
      "{my} [b]{0}[/b] [i]{0}[/i] [s]{0}[/s] [u]{0}[/u] [sub]{0}[/sub] [sup]{0}[/sup] [small]{0}[/small] [mark]{0}[/mark] [code]{0}[/code] [bad]{0}[/bad] [good]{0}[/good] [info]{0}[/info] [h1]{0}[/h1] [h2]{0}[/h2] [h3]{0}[/h3] [h4]{0}[/h4] [item]{0}[/item]",
    description: "This is a sample action",
    params: [
      {
        id: "param1",
        name: "Param1",
        desc: "This is a sample param",
        type: "string",
        initialValue: '"Hello World"',
      },
    ],
  },
  function (param) {
    console.log(param);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Sample Action");
        resolve();
      }, 1000);
    });
  }
);

condition(
  category,
  "SampleCondition",
  {
    highlight: false,
    deprecated: false,
    listName: "Sample Condition",
    displayText: "Sample Condition",
    description: "This is a sample condition",
    params: [],
  },
  function () {
    console.log("Sample Condition");
    return true;
  }
);

expression(
  category,
  "SampleExpression",
  {
    highlight: false,
    deprecated: false,
    returnType: "string",
    description: "This is a sample expression",
    params: [],
  },
  function () {
    console.log("Sample Expression");
    return "Sample Expression";
  },
  false
);
