# JS-Form-Validator
Form and JS Validator

The form was designed with Bootstrap and meant to be included in Jekyll or Octopress. The form is setup to use on 900dpi platform. Just edit the email, redirect, and file name in form.html.

I recommend putting `form.html` in the `_include` folder and the `form.js` folder in your `js` file. Then use the code `{% include form.html %}` in Jekyll or Octopress.

The javascript requires [JQuery UI (both the css and script links)](https://developers.google.com/speed/libraries/devguide#jqueryui), JQuery, and `bootstrap.min.js`.

Useful links:
* `<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />`
* `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>`
* `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>`
* `<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>`
* `<script src="/pat/to/form.js"></script>`
