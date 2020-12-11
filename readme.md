# outfit

## Project folder Structure


## Setup

- run expo init `name-of-project`
- select blank typescript project
- add stricter linting rules inside **tsconfig.json** file
  ```
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  ```
- install `eslint-config-react-native-wcandillon` a linting plugin

- create .eslint.rc file to extend the plugin
  ```
  {
    "extends": "react-native-wcandillon"
  }
  ```
- add the following scripts to run **lint** and **typescript compilter**
  ```
    "lint": "eslint --ext .ts,.tsx .",
    "tsc": "tsc",
  ```


