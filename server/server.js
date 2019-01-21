const app = require('./app');

const PORT = 4433;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${ PORT }...`);
});
