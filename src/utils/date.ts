export const formatDate = (date: string) =>
  new Date(date)
    .toLocaleDateString("pt-br", { day: "2-digit", month: "short" })
    .replace(/\./, "")
    .replace("de", "");
