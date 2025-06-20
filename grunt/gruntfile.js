const { task } = require("grunt");

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
        watch:{
            less:{
                files: 'scr/styles/*.less',
                task: 'less:development'
            }
            
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("minha_tarefa", function(){
        console.log('Trabalhando...');
    });
    grunt.registerTask('default',["minha_tarefa", "watch"]);
    grunt.registerTask('build',["less:production"]);
}