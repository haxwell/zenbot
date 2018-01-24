var Moment = require('moment')

module.exports = (function (get, set, clear) {

  	var exchangeService = get('lib.exchange-service')(get, set, clear)

	return (trade_id, data) => { 

		if (data !== undefined) {
			process.stdout.clearLine();
			process.stdout.write("Processed trades up to " + Moment(data.time).fromNow() + "." );
			process.stdout.cursorTo(0);
		}
	}

})
