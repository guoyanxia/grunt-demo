module.exports = function (grunt) {

  grunt.initConfig({

    mochacli:{
      options:{
                reporter:'spec',
             bail:true      
      },
  all:['test/*.js']  
  }     
                                        
  });
 // mochacli:{
   // options:{
   //   reporter:'spec',
    //  bail:true
   // },
    //all:['test/*.js']
//  },
//  run:{
 // apiServer:{
   // options:{
     // wait:false
    // },
   //  args:['node app.js']
 //   }
  //}
  //});
  grunt.loadNpmTasks('grunt-mocha-cli');
  //grunt.loadNpmTasks('run');
  grunt.registerTask('default',['mochacli']);
  //grunt.registerTask('default',['run','mochacli','stop'])


}
