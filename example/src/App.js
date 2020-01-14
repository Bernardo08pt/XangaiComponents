import React from 'react'

import { Tree } from 'xangai'

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

const App = () => {
  
    return (
      <div>
        <Tree
          data={exampleData}
        />
      </div>
    ) 
}

export default App;
