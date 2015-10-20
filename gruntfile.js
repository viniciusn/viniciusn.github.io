module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			dist: {
				files: {
					"index.html": "dev/index.html",
					"blog/index.html": "dev/blog/index.html"
				}
			}
		},
		cssmin: {
			minify: {
				files: {
					"css/estilo.css": "dev/css/estilo.css"
				}
			}
		},
		uglify: {
			my_targets: {
				files: {
					"js/script.js": "dev/js/script.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}