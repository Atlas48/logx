require! 'ansi-colors':c

module.exports.prefix =
  wrn: c.bold.yellow \WRN + \:
  err: c.bold.red \ERR + \:
  inf: c.bold.green \INF + \:

module.exports.wrn = (out, b) !->
  if b
    console.log "#{module.exports.prefix.wrn} #out"
  else
    console.error "#{module.exports.prefix.wrn} #out"
module.exports.err = (out, b) !->
  if b
    console.log "#{module.exports.prefix.err} #out"
  else
    console.error "#{module.exports.prefix.err} #out"
module.exports.inf = (out, b) !->
  if b
    console.log "#{module.exports.prefix.inf} #out"
  else
    console.error "#{module.exports.prefix.inf} #out"
