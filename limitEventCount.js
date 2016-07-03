process.setMaxListeners(11);

process.on('exit', function(){ console.log('프로그램 종료1'); });
process.on('exit', function(){ console.log('프로그램 종료2'); });
process.on('exit', function(){ console.log('프로그램 종료3'); });