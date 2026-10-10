export const MONTHLY_PLANS = [
  { name: 'Single Student',      price: 149, discount: null,  featured: true },
  { name: 'Family — 2 Members',  price: 283, discount: '5% off'  },
  { name: 'Family — 3 Members',  price: 402, discount: '10% off' },
  { name: 'Family — 4 Members',  price: 506, discount: '15% off' },
  { name: 'Family — 5+ Members', price: 596, discount: '20% off' },
]

/* Aula feminina (sabado 9h). Sem descontos de familia. */
export const WOMEN_PLANS = [
  { name: 'Monthly', price: 100, discount: null, featured: true },
]

export const PREPAID_PLANS = [
  { name: 'Trimester', duration: '3 months',  price: '$402'   },
  { name: 'Semester',  duration: '6 months',  price: '$759',  highlight: true },
  { name: 'Annual',    duration: '12 months', price: '$1,430' },
]

export const DROP_IN_FEE = 30

export const PRICING_PDF = '/assets/docs/Flecha-JiuJitsu-Pricing.pdf'
