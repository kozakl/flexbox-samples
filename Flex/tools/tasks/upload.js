const SERVER = 'c:/Users/Luke/kozakluke.bitbucket.org/';
const del  = require('del'),
      gulp = require('gulp'),
      exec = require('child_process').exec,
      fs   = require('fs');

gulp.task('upload', (cb)=> {
    const project = JSON.parse(fs.readFileSync('./package.json')).description;
    
    del.sync([SERVER + project], {force: true});
    gulp.src('./public/**/*', {base: './public'})
        .pipe(gulp.dest(SERVER + project))
        .on('end', ()=> {
            const v = Math.random();
            fs.renameSync(SERVER + project + '/bundle.js',
                          SERVER + project + `/bundle-${v}.js`);
            fs.writeFileSync(SERVER + project + '/index.html',
                fs.readFileSync(SERVER + project + '/index.html', 'utf8')
                .replace('bundle.js', `bundle-${v}.js`));
            
            const process = exec(`c: & cd ${SERVER} & git add . & git commit -m "Update: ${project}." & git push origin`);
            process.stdout.on('data', console.log);
            process.stderr.on('data', console.log);
            process.on('exit', cb);
        });
});
