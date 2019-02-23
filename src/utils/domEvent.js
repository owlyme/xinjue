export default (fn) => {
  let timer
  window.addEventListener('resize', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, 300)
  })
}
