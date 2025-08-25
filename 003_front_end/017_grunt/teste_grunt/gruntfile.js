module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {  
                options: {
                    compress: false, 
                },
                files: {
                    "dev/styles/main.css": "source/styles/main.less"
                }
            },
            production: {  
                options: {
                    compress: true, 
                },
                files: {
                    "dist/styles/main.min.css": "source/styles/main.less"
                }
            }
        },

        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                        match: 'endereco_css',
                        replacement: './styles/main.css'
                        },
                        {
                        match: 'endereco_js',
                        replacement: '../source/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['source/index.html'], 
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                        match: 'endereco_css',
                        replacement: './styles/main.min.css'
                        },
                        {
                        match: 'endereco_js',
                        replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['source/index.html'], 
                        dest: 'temp/'
                    }
                ]
            }
        },

        htmlmin: {
            dist: { 
                options: {
                    removeComments: true,   
                    collapseWhitespace: true 
                },
                files: {
                    'dist/index.html': 'temp/index.html'
                }
            }
        },

        clean: {
            temp: ['temp']
        },

        uglify: {
            build: {
                files: {
                    'dist/scripts/main.min.js': ['source/scripts/*.js'] 
                }
            }
        },

        watch: {
            less: {
                files: ['source/styles/**/*.less'], 
                tasks: ['less:development'],       
                options: {
                spawn: false,
                atBegin: true                     
                }
            },
            html: {
                files: ['source/index.html'], 
                tasks: ['replace:dev']
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'replace:dist', 'htmlmin:dist','uglify:build', 'clean']);
};