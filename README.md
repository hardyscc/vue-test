# vue-t5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## IDE Setup

```
brew cask install visual-studio-code

code --install-extension EditorConfig.EditorConfig
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension octref.vetur
```

## Setup and empty project using vue-cli

* npm -g i vue-cli
* vue init webpack vue-test
  * select airbnb

### .eslintrc.js
* npm i eslint-config-prettier
* add prettier under extends
* remove vue: 'never'

### jsconfig.json
```
{
  "include": ["./src/**/*"],
  "compilerOptions": {
    "module": "es2015",
    "moduleResolution": "node",
    "target": "es5",
    "sourceMap": true,
    "allowJs": true,
    "checkJs": true
  }
}
```

### .prettierrc
```
{
  "semi": false,
  "singleQuote": true
}
```

### src/vue-shims.d.ts
```
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

### add .vue extension when import vue file
```
import App from './App.vue'
import HelloWorld from '@/components/HelloWorld.vue'
```
