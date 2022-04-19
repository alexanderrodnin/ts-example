# Notes


### Init of typescript project
```bash
npm --init
npm i -g typescript
tcs --init
```

### Switch runnable file to ./distr for example
tsconfig.json:
```
"outDir": "./dist",
```
package.json:
```json
"scripts": {
    "start": "node ./dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```
