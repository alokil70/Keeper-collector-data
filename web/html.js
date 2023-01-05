const html = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HORECA BOT</title>
        <link rel="stylesheet" href="app.css">
    </head>
    <body>
        <h1>Now using HTML</h1>
        <button>Push</button>
        <script src="app.js"></script>
    </body>
</html>
`;
const css = `
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    h1 {
        background-color: #999;
        color: white;
        padding: .5em;
        font-family: 'Consolas';
    }
}`;
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Pushing'))
`;

function onRequest(req, res) {
    switch (req.url) {
    case '/':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    case '/app.css':
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(css);
    case '/app.js':
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(js);
    default:
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<div>404 не найден</div>');
    }
}

module.exports = { onRequest };
