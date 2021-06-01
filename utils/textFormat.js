export const formatText = (text) => text.split("\n");

export const formatTitle = (title) => {
  const letters = title.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("")
}