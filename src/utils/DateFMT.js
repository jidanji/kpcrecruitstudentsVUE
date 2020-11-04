export default class DateFMT {
  constructor() { }
  Format(date, fmt) {
    var o = {
      "M+": date.getMonth() + 1, //月份   
      "d+": date.getDate(), //日   
      "h+": date.getHours(), //小时   
      "m+": date.getMinutes(), //分   
      "s+": date.getSeconds(), //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  dateFormate(input) {
    let year = input.getFullYear();
    let month = input.getMonth() + 1;
    let day = input.getDay();
    if (month >= 10) {
    }
    else {
      month = "0" + month
    }
    if (day >= 10) {
    }
    else {
      day = "0" + day;
    }
    return year + "-" + month + "-" + day;
  }



  getDateTime(input) {
    if (input) {
      var d = eval('new ' + input.replace('/', '', 'g').replace('/', '', 'g'));
      return d;
    } else {
      return "";
    }
  }


  datetimeFormate(input) {
    if (input) {
      var d = eval('new ' + input.replace('/', '', 'g').replace('/', '', 'g'));
      return this.Format(d, "yyyy-MM-dd hh:mm:ss");
    } else {
      return "";
    }
  }

}
