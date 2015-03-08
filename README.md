# react-stint

A port of [timesheet.js](http://sbstjn.github.io/timesheet.js/).  Create simple timelines with JavaScript.

## Install

Available via cjs (browserify or webpack).  Install with npm:

```
npm install react-stint
```

## Usage

Require it in your code, feed it your data, and render to the page:

```js
var React = require('react');
var Timesheet = require('react-stint');

var data = [&#x000A;  ["2002", "09/2002", "A freaking awesome time", "lorem"],&#x000A;  ["06/2002", "09/2003", "Some great memories", "ipsum"],&#x000A;  ["2003", "Had very bad luck"],&#x000A;  ["10/2003", "2006", "At least had fun", "dolor"],&#x000A;  ["02/2005", "05/2006", "Enjoyed those times as well", "ipsum"],&#x000A;  ["07/2005", "09/2005", "Bad luck again", "default"],&#x000A;  ["10/2005", "2008", "For a long time nothing happened", "dolor"],&#x000A;  ["01/2008", "05/2009", "LOST Season #4", "lorem"],&#x000A;  ["01/2009", "05/2009", "LOST Season #4", "lorem"],&#x000A;  ["02/2010", "05/2010", "LOST Season #5", "lorem"],&#x000A;  ["09/2008", "06/2010", "FRINGE #1 &amp; #2", "ipsum"]&#x000A;]);

React.render(&lt;Timesheet min={2002} max={2013} data={data} /&gt;, document.body);</pre>
```

Enjoy!
