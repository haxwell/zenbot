const superagent = require('superagent')

module.exports = function container (get, set, clear) {
	//var c = get('conf') || {}
	var theExchange = {}

  	// TODO: phase out, in favor of calling the method getDirection().
  	//  It will help define a clean interface/design for future exchange plugins.
  	theExchange.historyScan = 'backward'

  	// TODO: phase the use of the name out.. define a cleaner interface for exchanges, so its easier to define how to write one.
    theExchange.name = 'stub'
    theExchange.getName = function() {
  		return 'stub';
  	}
  	
  	theExchange.getDirection = function() {
  		return 'backward';
  	}

  	theExchange.getMakerFee = function() {
  		return 0.1;
  	}

  	theExchange.getTakerFee = function() {
  		return 0.1;
  	}

    theExchange.getProducts = function () {
      return require('./products.json')
    }

    theExchange.getTrades = function (opts, cb) {
    	var url = "http://localhost:7802/"

    	if (opts.from !== undefined) {
    		url += "?mostRecentTradeId=" + opts.from
    	}

    	superagent.get(url).end(function (err, response) {
    		var v = JSON.parse(response.text)

    		rtn = [];
    		v.forEach((vv) => { 
    			var obj = JSON.parse(vv); 

    			obj.id = 

    			rtn.push(obj); })

    		cb(null, rtn)
    		// todo: handle teh case where there is no server on the other end
    	})
    }

  return theExchange;
}
