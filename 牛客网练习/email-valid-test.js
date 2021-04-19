function isAvailableEmail(sEmail) {
  // 正则匹配
  var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(sEmail);
}