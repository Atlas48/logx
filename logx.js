var c = require('ansi-colors');
module.exports.prefix = {
  wrn: c.bold.yellow('WRN') + ':',
  err: c.bold.red('ERR') + ':',
  inf: c.bold.green('INF') + ':'
};
module.exports.wrn = function(out, b){
  if (b) {
    process.stdout.write(module.exports.prefix.wrn + " " + out);
  } else {
    process.stderr.write(module.exports.prefix.wrn + " " + out);
  }
};
module.exports.err = function(out, b){
  if (b) {
    process.stdout.write(module.exports.prefix.err + " " + out);
  } else {
    process.stderr.write(module.exports.prefix.err + " " + out);
  }
};
module.exports.inf = function(out, b){
  if (b) {
    process.stdout.write(module.exports.prefix.inf + " " + out);
  } else {
    process.stderr.write(module.exports.prefix.inf + " " + out);
  }
};
