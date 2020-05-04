const lockBox = (code, message) => {
  // write code here
  this.prototype = lockBox;
  if (typeof message !== 'string' || typeof code !== 'number') throw 'invalid type';
  let accessCode = code;
  let secretMessage = message;
  return {
    modCode: (code, newCode) => {
      accessCode = newCode;
      return accessCode;
    },
    modMessage: (code, newMessage) => {
      secretMessage = newMessage;
      return secretMessage
    },
    revealMessage: (newCode) => {
      if (newCode === accessCode) return secretMessage;
      if (accessCode !== newCode) throw 'invalid code';
    }
  }
}

module.exports = { lockBox };
