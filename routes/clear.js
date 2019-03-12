

	function clearTable () {
			
		app.post('/api/clear', function()   {
			tableData = [];
			waitListData = [];
	
			console.log(tableData);
			console.log(waitListData);
		})
	}

	
	// make modules available for server.js
	module.exports.clearTable;

	//require statement to go in main JS
	// require('./clear')


