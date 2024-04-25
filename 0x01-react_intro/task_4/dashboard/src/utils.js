function getFullYear () {
  let d = new Date();
  let y = d.getFullYear();
  return (y);
}

function getFooterCopy (isIndex) {
  return (isIndex ? 'Holberton School' : 'Holberton School main dashboard');
}
function getLatestNotification () {
  return ('<strong>Urgent requirement</strong> - complete by EOD');
}
export { getFullYear, getFooterCopy, getLatestNotification }
