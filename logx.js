var c = require('ansi-colors');
module.exports.prefix = {
  wrn: c.bold.yellow('WRN') + ':',
  err: c.bold.red('ERR') + ':',
  inf: c.bold.green('INF') + ':'
};
module.exports.wrn = function(out, b){
  if (b) {
    console.log(module.exports.prefix.wrn + " " + out);
  } else {
    console.error(module.exports.prefix.wrn + " " + out);
  }
};
module.exports.err = function(out, b){
  if (b) {
    console.log(module.exports.prefix.err + " " + out);
  } else {
    console.error(module.exports.prefix.err + " " + out);
  }
};
module.exports.inf = function(out, b){
  if (b) {
    console.log(module.exports.prefix.inf + " " + out);
  } else {
    console.error(module.exports.prefix.inf + " " + out);
  }
};
