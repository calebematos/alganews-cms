function generateQueryString(
  params: {[key: string]: string | number | boolean | string[] | undefined}
) : string {

  const convertedParams: {[key: string]: string} = {}

  Object
    .keys(params)
    .forEach(key => {
      const param = params[key]
      if(param)
        convertedParams[key] = String(param)
      
    })

  const urlParams = new URLSearchParams(convertedParams)
  if(urlParams.toString() !== '')
    return `?${urlParams.toString()}`
  return ''
}

export default generateQueryString