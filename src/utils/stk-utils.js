/* eslint-disable no-debugger */

const utils = (function(utils){
	const freezeStack = [];
	utils.mutateFreezeStack = function(op, freezeCB){
		if(op === 'push'){
			freezeStack.push(freezeCB);
		}
		else{
			let freezeCB = freezeStack.pop();
			freezeCB();
		}
	};

	return utils;
})({});

export default utils;