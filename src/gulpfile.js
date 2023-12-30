const gulp = require('gulp');
const uglify = require('gulp-uglify');
const typescript = require('gulp-typescript');

gulp.task('copyIndex', async () => {
  let pageName = 'index';

  compileTypescript(pageName);
});

const compileTypescript = (pageName) => {
  let fileLocations = `front-end/pages/${pageName}/**/*.ts`;
  let project = typescript.createProject('../tsconfig.json');

  //--🠋 Compile all Page TypeScript files to JavaScript 🠋--//
  gulp
    //--| Get Source Locations |--//
    .src(`src/${fileLocations}`)
    //--| Pipe TypeScript specifications |--//
    .pipe(project())
    //--| Compress JavaScript |--//
    .pipe(uglify())
    //--| Copy 'src' to 'dist'  |--//
    .pipe(gulp.dest([`dist/front-end/pages/${pageName}//`]));
};
