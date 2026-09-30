/* Rola ate o elemento descontando a altura da nav fixa.
   Usa getBoundingClientRect para funcionar tambem com alvos aninhados (ex.: #enroll, dentro do rodape). */
export default function scrollTo(id) {
  const el = document.querySelector(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 96
  window.scrollTo({ top, behavior: 'smooth' })
}
