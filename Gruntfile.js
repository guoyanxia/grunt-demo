module.exports = function (grunt) {
  uglify: {
    options: {
      mangle: {
                reserved: ['jQuery', 'Backbone']
                        
      }
                  
    },
    my_target: {
      files: {
                'dest/output.min.js': ['src/input.js']
                        
      }
                 
    }
      
  }
});



      grunt.loadNpmTasks('grunt-contrib-htmlmin');



                  grunt.registerTask('default', ['htmllmin']);





                  };

