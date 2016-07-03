var exitListener = function(){
	console.log('프로그램 종료');
};

process.on('exit', exitListener);

//process.removeListener('exit', exitListener);
//process.removeAllListeners('exit');
//process.removeAllListeners();