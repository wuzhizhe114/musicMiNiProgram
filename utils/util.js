const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatSongDuration = hm => {
  const m = parseInt(hm / 1000 / 60) > 9 ? parseInt(hm / 1000 / 60) : '0' + parseInt(hm / 1000 / 60)
  const s = parseInt(hm / 1000 % 60) > 9 ? parseInt(hm / 1000 % 60) : '0' + parseInt(hm / 1000 % 60)

  return m+':'+s
}

module.exports = {
  formatTime: formatTime,
  formatSongDuration
}
