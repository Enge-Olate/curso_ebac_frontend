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
        
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.registerTask("minha_tarefa", function(){
        console.log('Hello, Grunt.');
    });
    grunt.registerTask('default',["minha_tarefa"]);
    grunt.registerTask('build',["less:production", "replace:dist"]);
}