module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    "src/*.js"
                ],
                dest: "src/build/master.js"
            },
            dev: {
                src: [
                    "src/*.js"
                ],
                dest: "src/build/development.js"
            }
        },
        //this configures the minify functionality
        uglify: {
            build: {
                src: "src/build/master.js",
                dest: "src/build/master.min.js"
            }
        },
        
        less: {
            development: {
                options: {
                    paths: ["less/"]
                },
                files: {
                    "css/styles.css" : "less/source.less"
                }
            }
        },
        
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    //this will load the minify function in grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //this loads the less plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);
    //this task will do the same thing as the above command when running "grunt combine"
    grunt.registerTask('dev', ['concat:dev']);
    //this task creates the minified files
    grunt.registerTask('minify', ['concat', 'uglify']);
    grunt.registerTask('less', ['less']);

};