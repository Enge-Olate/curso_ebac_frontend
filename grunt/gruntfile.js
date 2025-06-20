
module.exports= function (grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },

        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.css'   
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten: true,
                        src:['views/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.min.css'   
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten: true,
                        src:['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'prebuild/index.html':'views/index.html'
                }
            }
        },

        watch:{
            less:{
                files:['src/styles/*.less'],
                tasks:['less:development']
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.registerTask("minha_tarefa", function(){
        console.log('Trabalhando...');
    });
    grunt.registerTask('default',["minha_tarefa", "watch"]);
    grunt.registerTask('build',["less:production", 'htmlmin:dist', "replace:dist" ]);
}