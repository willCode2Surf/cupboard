var args = process.argv.concat().splice(2),
ops = {};

ops.command = args.shift();
ops.args = [];

//treat the args like a query string at this point
while(args.length)
{
	var arg = args.shift();
	
	if(arg.substr(0,2) == '--')
	{
		//split apart the value
		var keyParts = arg.substr(2).split('=');
		
		
		ops[keyParts.shift()] = keyParts.length ? keyParts[0] : true;
	}
	else
	{
		ops.args.push(arg);
	}
}

require('../lib/index').execute(ops);   