
var data = [
    {name: "Baxter",
     entries : [{type:"init",amt:10},{type:"paid",amt:-5}]
    },
    {name: "Ezra",
     entries : [{type:"init",amt:3}]
    },
    {name: "Noah",
     entries : [{type:"init",amt:1}]
    },
    {name: "Freyja"}

  ];


exports.findAll = function(req, res) {
    res.send(
    	[
    	{name:'Baxter'}, 
    	{name:'Ezra'}, 
    	{name:'Noah'},
    	{name:'Freyja'},
    	]
    );
};
 
exports.findById = function(req, res) {
    res.send(
    	{id:req.params.id, name: "Baxter", }
    );
};