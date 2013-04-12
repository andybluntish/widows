# Widows.js

Remove typographic widows from blocks of text.

## Usage

Widows comes in two flavours, jQuery plugin or vanilla JavaScript.

### jQuery

Call `widows()` on a jQuery object.

    $('p').widows();

### JavaScript

Call `Widows.remove()` and pass in a query selector (calls `document.querySelectorAll()` internally).

    Widows.remove('p');
