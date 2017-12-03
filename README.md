# NoOSXOverscroll
![build status](https://travis-ci.org/sheldonbazzell/no-osx-overscroll.svg?branch=master)

## Prevent overscroll browser back navigation on a Mac.

### Why
---
A large portion of what I build at work relies on horizontally scrolling. Browser navigation via Mac's trackpad can yield a frustrating UX, so I sought ways to solve it. I didn't find an npm package for it so I decided to implement one and publish it.

### Usage
---
After the package is added to your package.json dependencies, the library can be imported as desired.
Example:
`const { noMacOverScroll } = require('../../node_modules/no-osx-overscroll/dist')`

### Features
---
This currently only supports browser back navigation.

### Contributors
---
Sheldon Bazzell

### License
---
MIT

