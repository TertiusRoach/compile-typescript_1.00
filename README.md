# Compile TypeScript

To make use of the command terminals provided below, it's essential to have [Node.js](https://nodejs.org/en) installed on your system. The compiling process for [TypeScript](https://en.wikipedia.org/wiki/TypeScript) is streamlined using [Gulp Tasks](https://marketplace.visualstudio.com/items?itemName=nickdodd79.gulptasks) within [Visual Studio Code](https://code.visualstudio.com/).

> Terminal Commands

    npm init -y
    npm install --save-dev gulp
    npm install --save-dev gulp-uglify
    npm install --save-dev gulp-typescript

The configuration file, [gulpfile.js](https://github.com/TertiusRoach/compile-typescript_1.00/blob/main/src/gulpfile.js), is situated in the [src](https://github.com/TertiusRoach/compile-typescript_1.00/tree/main/src) directory, a strategic placement that prevents unnecessary clutter in the [root](https://github.com/TertiusRoach/compile-typescript_1.00/tree/main) folder.

> Development Layout

![Gulp Tasks Extension](src/front-end/pages/index/~content/jpg-files/gulp-tasks.jpg)
