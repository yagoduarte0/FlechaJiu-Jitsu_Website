export const EMAIL = 'support@flechabjj.com'

const TRIAL_SUBJECT = 'Free Trial Class — Flecha Jiu-Jitsu'

const TRIAL_BODY = `Hi Flecha Jiu-Jitsu,

I'd like to book my free trial class. Here are my details:

Name:
Age:
Class I'd like to try (Kids / Teens / Adults Gi / No-Gi):
Day and time that works for me:
Phone number:

Thank you!`

/* Abre o app de e-mail com assunto e corpo ja preenchidos — a pessoa so completa os campos. */
export const TRIAL_MAILTO =
  `mailto:${EMAIL}` +
  `?subject=${encodeURIComponent(TRIAL_SUBJECT)}` +
  `&body=${encodeURIComponent(TRIAL_BODY)}`

/* Bloco do QR code de matricula, no rodape. */
export const ENROLL_ANCHOR = '#enroll'

/* Link direto da pagina de cadastro, para quem esta no desktop e nao consegue ler o QR.
   Deixe em null enquanto a URL nao for conhecida — o botao so aparece quando ela existir. */
export const ENROLL_URL = null

/* Waiver em PDF. Coloque o arquivo em public/assets/docs/ e aponte o caminho aqui;
   enquanto for null o bloco do waiver nao aparece no rodape. */
export const WAIVER_PDF = null
