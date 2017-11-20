function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', theUrl, false) // false for synchronous request
  xmlHttp.send(null)
  return xmlHttp.responseText
}

function legendClick() {
  var display = document.getElementById('s-side-menu').style.display
  if (display === 'none') {
    document.getElementById('s-img-menu').style.display = 'none'
    document.getElementById('s-img-close').style.display = 'initial'
    document.getElementById('s-side-menu').style.display = 'flex'
    document.getElementById('s-legend').style.backgroundColor = '#218c86'
  } else {
    document.getElementById('s-img-close').style.display = 'none'
    document.getElementById('s-img-menu').style.display = 'initial'
    document.getElementById('s-side-menu').style.display = 'none'
    document.getElementById('s-legend').style.backgroundColor = 'lightseagreen'
  }
}