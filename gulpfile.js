var gulp = require("gulp"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  watch = require("gulp-watch"),
  gutil = require("gulp-util"),
  browserify = require("browserify"),
  browserSync = require("browser-sync"),
  babelify = require("babelify");

/** Transform JSX => Babel => VanillaJS */
const transform = () => {
  return browserify("src/main.js")
    .transform(
      babelify.configure({
        presets: ["@babel/preset-env", "@babel/react"],
        plugins: ["@babel/plugin-proposal-class-properties"]
      })
    )
    .bundle()
    .on("error", gutil.log)
    .pipe(source("dist/main.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./"));
};

/** BrowserSync */
const server = browserSync.create();

const reload = done => {
  server.reload();
  done();
};

const serve = done => {
  server.init({
    server: {
      baseDir: "dist/"
    }
  });
  done();
};

// Watch for changes
const watcher = () => gulp.watch("src/**/*.js", gulp.series(transform, reload));

gulp.task("default", gulp.series(transform, serve, watcher));
