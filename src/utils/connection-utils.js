if(!window.stk){
	window.stk = {};
}
window.stk.connectionUtils = (function(){
	const ajax = function(method, url, body, headers = {'content-type': 'application/json'}){
		return new Promise(function(resolve, reject){
			let xhr = new XMLHttpRequest();
			xhr.open(method, url, true);
			if(headers){
				Object.keys(headers).forEach(function(key){
					if(key === 'content-type' && headers[key] === 'application/json' && body){
						body = JSON.stringify(body);
					}
					xhr.setRequestHeader(key, headers[key]);
				});
			}
			xhr.send(body);

			xhr.onload = function(res){
				debugger;
				resolve(res);
			};

			xhr.onerror = function(error){
				debugger;
				reject(error);
			};
		});
	};
	return {
		ajax
	};
})();