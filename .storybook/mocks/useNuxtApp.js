import MarkdownIt from "markdown-it"

export const useNuxtApp = () => {
  const markdown = new MarkdownIt({
    breaks: true,
  })
  return { $markdown: markdown }
}
