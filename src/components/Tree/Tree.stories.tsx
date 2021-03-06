
import * as React from 'react';
import Tree from "./Tree" 
  
const exampleData = [
    {
      id: "1",
      value: "Root Directory 1",
      children: [
        {
          id: "1.1",
          value: "Root Directory 1 Child 1",
          children: [
            {
              id: "1.1.1",
              value: "Root Directory 1 Child 1 Child 1",
              children: [
                {
                  id: "1.1.1.1",
                  value: "Root Directory 1 Child 1 Child 1 Child 1",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "2",
      value: "Root Directory 2"
    },
    {
      id: "3",
      value: "Root Directory 3"
    },
    {
      id: "4",
      value: "Root Directory 4"
    },
    {
      id: "5",
      value: "Root Directory 5"
    }
  ]


  export default {
    title: 'Tree View',
    parameters: {
      info: { inline: true },
    },
  };
  
  export const Draggable = () => 
    <Tree data={exampleData} />
  ;