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
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				strict: true,
				freeze: true,
				futurehostile: true
			},
			files: {
				src: ['dev/js/script.js']
			}
		},
		watch: {
			js: {
				files: ['dev/js/*.js'],
				tasks: ['jshint','uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['dev/css/*.css'],
				tasks: ['cssmin'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['dev/*.html','dev/blog/*.html'],
				tasks: ['htmlmin'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
}