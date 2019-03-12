
module.exports = function (grunt) {
  htmlmin: {                                     // Task
        dev: { 
        options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
        files: {
                  'dist/index.html': 'index.html',
                                                           
        }
          }
    }  });

      grunt.loadNpmTasks('grunt-contrib-htmlmin');

            grunt.registerTask('default', ['htmllmin']);


};

