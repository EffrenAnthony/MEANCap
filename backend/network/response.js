const statuses = {
  '200': 'Ok',
  '201': 'Created',
  '400': 'Invalid Format',
  '500': 'Internal Server Error'
}

exports.success = function(req, res, message, status){
  let code = status
  let statusMessage = message
  if (!status) {
    status = 200
  }
  if (!message) {
    statusMessage = statuses[status]
  }
  res.status(code).send({
    error:'',
    data: statusMessage
  })
}

exports.error = function (req, res,message, status, detail){
  // DESARROLLO
  console.error('[res error]' + detail);
  res.status(status || 500).send({
    error: message,
    data: ''
  })
}