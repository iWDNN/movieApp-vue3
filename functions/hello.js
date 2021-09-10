exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'chans',
      age: 26,
      email: 'cksgh@github.com'
    })
  }
}