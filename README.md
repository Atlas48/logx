# logx
Simple, pretty, traffic-light logger

logx is an incredably lightweight traffic-light pattern logger, only a single, 7-element object in memory

## Example

```js
logx=require('logx');

logx.err('This is an error');
logx.inf('The process ran succesfully');
logx.wrn('You forgot to brush your teeth.');
```

## Commands
**Common Functionality:** all of the functions have an optional second argument that redirects to `stdout` instead of `stderr`
when it is set to true.

### err
Prints red, bold `ERR:` next to the output. It's designed for any fatal errors

### wrn
Prints yellow, bold `WRN:` next to the output. Designed for non-fatal errors and warnings.

### inf
Prints green, bold `INF:` next to the output. Designed for successful processes.
