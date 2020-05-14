export function genId(start = 0) {
  return () => {
    return start++
  }
}

export const id = genId(1)