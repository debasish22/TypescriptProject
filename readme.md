

Webpack Basic Settings

1. create a webpack.config.js file and add the necessary configurations

2. in tsconfig.json remove the previous compiler options and add the one below 
//Compiler Options for Webpack

{
  "compilerOptions":{
    "target": "es5", 
    "noImplicitAny": false,
  }
}

3. In package.json add these

//added in packag.json for WebPack

 "build":"webpack - d --watch",  "build:prod":"webpack -p"

 4. in index.html remove all references and add the script tag referrring to bundle.js