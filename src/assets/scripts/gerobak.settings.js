// each package will loaded like waterfall.
// so make sure the most needed script is on the top.
var s = {
	plugin:
	[
		'./scripts/plugins.min.js',
		'./scripts/global.min.js'
	],
	chart:
	[
		'./scripts/datatables.min.js',
		'./scripts/charts.min.js'
	],
	payment:
	[
		'./scripts/payment.min.js'
	],
	product:
	[
		'./scripts/soundmanager.min.js',
		'./scripts/prettyembed.min.js'
	],
	profile:
	[
		'./scripts/profile.min.js'
	],
	init:
	[
		'./scripts/init.min.js'
	]
};