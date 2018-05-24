export function observe (receive) {
  setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  ]), 500)
}

export const ItemTypes = {
  KNIGHT: 'knight'
}
