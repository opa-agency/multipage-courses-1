import { createHighlighter } from 'shiki'
import { transformerColorizedBrackets } from '@shikijs/colorized-brackets'
import theme from '../styles/syntax-theme.json'

let highlighter = null

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      langs: ['javascript', 'css', 'html', 'typescript', 'json', 'python', 'bash', 'shell'],
      themes: [theme],
    })
  }
  return highlighter
}

export async function highlightCode(code, lang = 'javascript') {
  const h = await getHighlighter()
  return h.codeToHtml(code, {
    lang,
    theme: theme.name,
    transformers: [
      transformerColorizedBrackets({
        themes: {
          'Tailwind CSS': [
            'var(--color-purple-200)',
            'var(--color-cyan-300)',
            'var(--color-blue-300)',
            'var(--color-emerald-300)',
            'var(--color-pink-300)',
            'var(--color-amber-200)',
          ],
        },
      }),
    ],
  })
}
