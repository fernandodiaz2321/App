// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'My App',
	dialog: {
		title: 'My App',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnComprar').on('click', function () {
  app.dialog.alert('¡Tu compra fue realizada correctamente!');
});

$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Seguro desea procesar su compra?', function () {
    app.dialog.alert('Tu compra fue realizada correctamente');
  });
});
 

