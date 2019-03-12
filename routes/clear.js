

    
    // This function resets all of the data in our tables. This is intended to let you restart a demo.
	function clearTable(){

		var currentURL = window.location.origin;
		$.ajax({url: currentURL + "/api/clear", method: "POST"})

	}

	$("#clear").on('click', function(){
		alert("Clearing...");
		clearTable();

		// Refresh the page after data is cleared
		location.reload();
	})


	// Run Queries!
	// ==========================================
	runTableQuery();
	runWaitListQuery();

	// make modules available for server.js
	module.exports.clearTable;

	//require statement to go in main JS
	// require('./clear')


