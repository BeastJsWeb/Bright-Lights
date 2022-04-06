
const HandleClick = (event) => {
  document.querySelectorAll(
    ".Section"
  ).forEach(section => {
    if (section.id === event.target.id)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  })
}

export default HandleClick

