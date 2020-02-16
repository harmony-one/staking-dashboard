export const formatByStep = (arr: any[], timeStep: number) => {
  let start = new Date(arr[0].uctDate).getTime()
  const end = new Date(arr[arr.length - 1].uctDate).getTime()

  const steps = Math.ceil((end - start) / timeStep)
  const step = Math.round(arr.length / steps)

  const rezArr = []

  for (let i = 0; i < arr.length; i += step) {
    console.log(arr[i].uctDate);
    rezArr.push(arr[i])
  }

  return rezArr
}
