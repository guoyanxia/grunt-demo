module.exports = function (grunt) {
  imagemin: {
    dynamic: {
      files: [{
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.{png}'],
                        dest: 'dist/'
                                                                                               
      }]
              
    }               
    }
  ;

      grunt.loadNpmTasks('grunt-contrib-imagemin');

                  grunt.registerTask('default', ['imagemin']);


                  };

