export const sortByParams = (
  array: any[],
  sortProperty: string,
  sortOrder: string
) =>
  array.sort((aV, bV) => {
    const a = aV[sortProperty]
    const b = bV[sortProperty]

    const sortFactor = sortOrder === "desc" ? 1 : -1

    if (!isNaN(a) && !isNaN(b)) {
      return Number(a) > Number(b) ? -sortFactor : sortFactor
    }

    return a > b ? -sortFactor : sortFactor
  })

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
