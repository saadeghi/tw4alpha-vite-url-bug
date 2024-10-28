export default ({ addComponents }) => {
  addComponents({
    ".circlemask": {
      "mask-image": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    }
  })
}
