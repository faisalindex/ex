
var express =require('express');
var app =express();
/*
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' }); 
app.engine('handlebars',  handlebars.engine);
app.set('view engine', 'handlebars');
*/



app.set('port', process.env.PORT || 3000);


// Routing=========Start
app.use(express.static(__dirname + '/static'));




app.get('/',function(req,res){
	
	res.status('200');
	res.send('hi <img src="/google.png">');
});
// Routing=========End

app.listen(app.get('port'),function(){
	console.log('hi')
})


