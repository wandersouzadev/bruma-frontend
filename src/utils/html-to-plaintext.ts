export const htmlToPlainText = (html: string) => html.replace(/<[^>]+>/g, "");
