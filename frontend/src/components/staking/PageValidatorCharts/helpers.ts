export const formatByStep = (arr: any[], timeStep: number) => {
  let start = new Date(arr[0].uctDate).getTime()
  const end = new Date(arr[arr.length - 1].uctDate).getTime()

  const steps = Math.ceil((end - start) / timeStep)
  const step = steps > 0 ? Math.ceil(arr.length / steps) : 1

  const rezArr = []

  for (let i = 0; i < arr.length; i += step) {
    rezArr.push(arr[i])
  }

  return rezArr
}

interface IEvent {
  block: string
  date: string
  total_stake_before: number
  total_stake_after: number
}

export const generateEventHistory = (
  arr: any[]
): { increased?: IEvent; decreased?: IEvent } => {
  let increased, decreased

  const genEvent = (prev: any, next: any): IEvent => {
    return {
      block: "3",
      date: next.uctDate,
      total_stake_before: prev.total_stake,
      total_stake_after: next.total_stake
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const current = arr[i]
    const prev = arr[i - 1]

    if (!increased && prev.total_stake < current.total_stake) {
      increased = genEvent(prev, current)
    }

    if (!decreased && prev.total_stake > current.total_stake) {
      decreased = genEvent(prev, current)
    }
  }

  return { increased, decreased }
}
