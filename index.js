const image = document.querySelector('.image')

function get () {
  axios
  .get('localhost:2409/dimigo_coin')
  .then(res => {
    if (res.data.err) {
      console.error(res.data.err)
    }
    image.src = res.data.url
  })
}

setInterval(get, 3500)
