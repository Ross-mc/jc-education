export const validateEnquiry = (...items) => {
  return items.every(item => item.length > 0 && item.length < 80)
}
