# hmdcc-version-comp

## Install
npm install @bryter/hmdcc-version-comp

## Usage
var isSame = Comparitator.compWithStr(
    [
      118,
      49,
      46,
      56,
      46,
      49,
      0,
    ]
    , "v1.8.1"
);
if ( isSame ) console.log("Is the same.");

## Testing
npm test
mocha --recursive


