export const formatByStep = (arr: any[], timeStep: number) => {
  let start = new Date(arr[0].uctDate).getTime()
  const end = new Date(arr[arr.length - 1].uctDate).getTime()

  const steps = Math.ceil((end - start) / timeStep)
  const step = steps ? Math.ceil(arr.length / steps) : 1

  const rezArr = []

  for (let i = 0; i < arr.length; i += step) {
    rezArr.push(arr[i])
  }

  return rezArr
}
