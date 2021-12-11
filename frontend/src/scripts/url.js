export function getURLParams(window, env = process.env.NODE_ENV) {
  const queries = window.location.search.slice(1).split(`&`)
  const parameters = queries.reduce((config, current) => {
    const [name, value] = current.split(`=`)
    if (
      [`stargate`, `rpc`, `experimental`, `insecure`, `graphql`].includes(name)
    ) {
      return {
        ...config,
        [name]: value
      }
    }
    return config
  }, {})

  if (env === `production` && (parameters.stargate || parameters.rpc)) {
    alert(
      `The ability to set the remote stargate and full node was removed in production to improve security.`
    )
  }

  return parameters
}

export function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
