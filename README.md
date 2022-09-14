# Create React Project from Scratch

  1. Create Project direcory `mkdir dirname` and `cd dirname`.
  2. Node Package Manager Initialization `npm init`.
  3. Git initialization `git init`.
  4. Create public directory `mkdir public` and source code directory for react `mkdir src`.
  5. Create index.html file in public file and put follwing code.

```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html;">
      <meta name="viewport" content="width=device-width, initial-scale=1.0,
        maximum-scale=1.0, shrink-to-fit=no">
        <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
      <noscript>Please enable JavaScript to view the <a href="http://localhost">link</a></noscript>
      <script src="../dist/bundle.js"></script>
    </body>
  </html>
```

  6. For ES6 Run `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react` .