# Gulp v4 + React

### Compile your projects developed with React using Gulp v4 with support for importing npm modules.

#### Installation
```
npm install --save-dev gulp gulp-babel gulp-watch gulp-util babelify browserify browser-sync vinyl-source-stream vinyl-buffer @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react
```

#### Run
```
gulp default
```

#### Additional
It is possible to directly import React into your javascript files.

```
npm install --save react react-dom @types/react @types/react-dom
```

##### Example:
```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("app"));
```
