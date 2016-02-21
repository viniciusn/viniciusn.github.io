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
					"blog/index.html": "dev/blog/index.html",
					"schedule/index.html": "dev/schedule/index.html"
				}
			}
		},
		cssmin: {
			minify: {
				files: {
					"css/estilo.css": "dev/css/estilo.css",
					"schedule/css/style.css": "dev/schedule/css/style.css"
				}
			}
		},
		uglify: {
			my_targets: {
				files: {
					"js/script.js": "dev/js/script.js",
					"schedule/js/script.js": "dev/schedule/js/script.js"
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
				futurehostile: true,
				globals: {
					'$': true,
					'jQuery': true,
					'window': true,
					'document': true,
					'module': true
				}
			},
			files: {
				src: ['dev/js/script.js','dev/schedule/js/script.js']
			}
		},
		imagemin: {
			static: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{removeViewBox: false}]
				},
				files: {
					'images/images/office.jpg': 'dev/images/office.jpg',
					'images/images/VN icon.png': 'dev/images/VN icon.png',
					'images/images/VN icon-black.png': 'dev/images/VN icon-black.png',
					'images/images/VN logo2.png': 'dev/images/VN logo2.png',
					'images/images/VN logo-fundo-branco2.png': 'dev/images/VN logo-fundo-branco2.png',
					'images/images/VN logo-green-sea-fundo-branco.png': 'dev/images/VN logo-green-sea-fundo-branco.png',
					'images/images/VN logo-green-sea-norma.png': 'dev/images/VN logo-green-sea-norma.png'
				}
				},
				dynamic: {
					files: [{
						expand: true,
						cwd: 'dev/images',
						src: ['**/*.{png,jpg,gif}'],
						dest: 'images/'
					}]
				}
		},
		watch: {
			js: {
				files: ['dev/js/*.js','dev/schedule/js/*.js'],
				tasks: ['jshint','uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['dev/css/*.css','dev/schedule/css/*.css'],
				tasks: ['cssmin'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['dev/*.html','dev/blog/*.html','dev/schedule/*.html'],
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
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
}
