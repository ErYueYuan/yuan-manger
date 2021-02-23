/**
 * Created by dai.
 * Vue.filter
 */

/**
 * 评论信息时间差
 * @param item 评论日期
 * @return 相差时间
 */
let customTime = item => {
  let nowTime = new Date().getTime()
  let minuteTime = 60 * 1000
  let hourTime = 60 * minuteTime
  let dayTime = 24 * hourTime
  let monthTime = dayTime * 30
  let yearTime = monthTime * 12

  let publishTime = new Date(item).getTime()
  let historyTime = parseInt(nowTime) - parseInt(publishTime)
  let descTime
  if (historyTime >= yearTime) {
    //按年算
    descTime = parseInt(historyTime / yearTime) + '年前'
  } else if (historyTime < yearTime && historyTime >= monthTime) {
    //按月算
    descTime = parseInt(historyTime / monthTime) + '月前'
  } else if (historyTime < monthTime && historyTime >= dayTime) {
    //按天算
    descTime = parseInt(historyTime / dayTime) + '天前'
  } else if (historyTime < dayTime && historyTime >= hourTime) {
    //按小时算
    descTime = parseInt(historyTime / hourTime) + '小时前'
  } else if (historyTime < hourTime && historyTime >= minuteTime) {
    //按分钟算
    descTime = parseInt(historyTime / minuteTime) + '分钟前'
  } else {
    descTime = '刚刚'
  }
  return descTime
}

/**
 * 日期格式化
 * @param value 需要格式化时间，fmt  格式化类型：yyyy-MM-dd
 * @return 格式化后日期格式
 */
let dataFormat = (value, fmt) => {
  let getDate
  if (typeof(value) == 'string' && value.indexOf('-') != -1) {
    getDate = new Date(value.replace(/-/g, '/'));
  } else {
    getDate = new Date(value);
  }
  let o = {
    'M+': getDate.getMonth() + 1,
    'd+': getDate.getDate(),
    'h+': getDate.getHours(),
    'm+': getDate.getMinutes(),
    's+': getDate.getSeconds(),
    'q+': Math.floor((getDate.getMonth() + 3) / 3),
    'S': getDate.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt;
}

/**
 * 时间差计算（含时分秒，暂未用）
 * @param startTime 开始日期
 * @return 时间差：天 时 分
 */
let timeDiff = startTime => {
  let stime = Date.parse(new Date(startTime))
  let etime = Date.parse(new Date())
  let usedTime = etime - stime
  let days = Math.floor(usedTime / (24 * 3600 * 1000))
  let leave1 = usedTime % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000));
  let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000)); //计算出剩余分
  let time = days + "天" + hours + "时" + minutes + "分"
  // let xiaos = Number(days * 24) + Number(hours)
  return time;
}

/**
 * 时间差计算
 * @param firstDate 开始日期
 * @return 时间差：天
 */
let dayDiff = firstDate => {
  let stime, etime, timestamp
  stime = dataFormat(firstDate, 'yyyy-MM-dd')
  etime = dataFormat(new Date(), 'yyyy-MM-dd')
  // 两个时间格式的时间转时间戳之后再相减
  timestamp = Date.parse(new Date(etime)) - Date.parse(new Date(stime))
  // 取绝对值
  timestamp = Math.abs(timestamp)
  // 除以一天的毫秒数（默认时间戳是到毫秒的，就算取到秒级的时间戳后面也带了3个0)
  timestamp = timestamp / (24 * 3600 * 1000);
  // 取整
  timestamp = Math.floor(timestamp)
  if (timestamp == '0') {
    timestamp = '今'
  }
  return timestamp;
}

export default {
  customTime,
  dataFormat,
  dayDiff,
  timeDiff
};