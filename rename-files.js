var gulp = require('gulp'),
    rename = require('gulp-rename'),
    path = require('path'),
    del = require('del'),
	vinylPaths = require('vinyl-paths');

gulp.task('default', function() {
	// you may want to be very specific about this url - I had issue with it copying the folder if it was too general and run more than once.
	return gulp.src('html/*/*.html')
	// delete the original file after it's renamed
	.pipe(vinylPaths(del))
	.pipe(rename(function(filepath) {
        // replace file name to that of the parent directory
        filepath.basename = path.basename(filepath.dirname);
        // log the changes in the console
        console.log('renamed', filepath);
     }))
	// output files in same folder
	.pipe(gulp.dest("."));
})
