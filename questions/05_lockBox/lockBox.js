const lockBox = (code, message) => {
  // write code here
  this.prototype = lockBox;
  if (typeof message !== 'string') throw 'error';

  const revealMessage = (newCode2) => {
    if (newCode === code) return message;
    if (code !== newCode2) throw 'error';
  }
};
lockBox.prototype.modCode = (code, newCode) => {
  this.code = newCode;
  return this.code;
}
lockBox.prototype.modMessage = (code, newMessage) => {
  this.message = newMessage;
  return this.message
}
lockBox.prototype.revealMessage = (newCode2) => {
  if (newCode2 === this.code) return this.message;
  if (this.code !== newCode2) throw 'error';
}
module.exports = { lockBox };
