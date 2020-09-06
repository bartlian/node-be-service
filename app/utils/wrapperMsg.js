const wrapperMsg = function(status, msgOrData) {
  const propName = typeof msgOrData === 'string' ? 'msg' : 'data';

  return {
    status,
    [propName]: msgOrData,
  }
}

module.exports = wrapperMsg;