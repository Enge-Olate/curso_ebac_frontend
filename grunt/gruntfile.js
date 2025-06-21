
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
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        
        uglify:{
            target:{
                files:{

                    'dist/scripts/main.min.js': 'src/scripts/*.js',
                    'dev/scripts/main.js':'src/scripts/*js'
                
                }
            }
        },
        
        
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
   
    grunt.registerTask("minha_tarefa", function(){
        console.log('Trabalhando...');
    });
    grunt.registerTask('default',["minha_tarefa"]);
    grunt.registerTask('build',["less:production", "less:development", "uglify"]);
}
