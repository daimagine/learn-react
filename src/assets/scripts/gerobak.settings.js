// each package will loaded like waterfall.
// so make sure the most needed script is on the top.
var s = {
	plugin:
	[
		'./assets/scripts/plugins.min.js',
		'./assets/scripts/global.min.js'
	],
	chart:
	[
		'./assets/scripts/datatables.min.js',
		'./assets/scripts/charts.min.js'
	],
	payment:
	[
		'./assets/scripts/payment.min.js'
	],
	product:
	[
		'./assets/scripts/soundmanager.min.js',
		'./assets/scripts/prettyembed.min.js'
	],
	profile:
	[
		'./assets/scripts/profile.min.js'
	],
	init:
	[
		'./assets/scripts/init.min.js',
		'./assets/scripts/app.min.js'
	],
	app:
	[
		'./assets/scripts/app.min.js',
		'https://www.google.com/recaptcha/api.js'
	]
};