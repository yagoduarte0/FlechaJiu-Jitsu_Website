export const SCHEDULE_ROWS = [
  {
    time: '9:00 – 10:00 AM',
    mon:   { category: 'adults',  label: 'Adults',         type: 'Gi',        level: 'Age 14+' },
    tues:  { category: 'adults',  label: 'Adults',         type: 'No Gi',     level: 'Age 14+' },
    wed:   { category: 'adults',  label: 'Adults',         type: 'Gi',        level: 'Age 14+' },
    thurs: { category: 'adults',  label: 'Adults',         type: 'No Gi',     level: 'Age 14+' },
    fri:   { category: 'adults',  label: 'Adults',         type: 'Gi',        level: 'Age 14+' },
    sat:   { category: 'kids',    label: 'Kids & Juniors', type: 'Gi',        level: 'Age 4–13' },
  },
  {
    time: '10:00 – 11:00 AM',
    mon:   null,
    tues:  null,
    wed:   null,
    thurs: null,
    fri:   null,
    sat:   { category: 'adults',  label: 'Adults',         type: 'Open Mat',  level: 'Age 14+' },
  },
  {
    time: '5:00 – 5:50 PM',
    mon:   { category: 'kids',    label: 'Kids Class',     type: 'Gi',        level: 'Age 4–8' },
    tues:  { category: 'kids',    label: 'Kids Class',     type: 'No Gi',     level: 'Age 4–8' },
    wed:   { category: 'kids',    label: 'Kids Class',     type: 'Gi',        level: 'Age 4–8' },
    thurs: { category: 'kids',    label: 'Kids Class',     type: 'No Gi',     level: 'Age 4–8' },
    fri:   { category: 'kids',    label: 'Kids Class',     type: 'Gi',        level: 'Age 4–8' },
    sat:   null,
  },
  {
    time: '6:00 – 6:50 PM',
    mon:   { category: 'juniors', label: 'Junior Class',   type: 'Gi',        level: 'Age 9–13' },
    tues:  { category: 'juniors', label: 'Junior Class',   type: 'No Gi',     level: 'Age 9–13' },
    wed:   { category: 'juniors', label: 'Junior Class',   type: 'Gi',        level: 'Age 9–13' },
    thurs: { category: 'juniors', label: 'Junior Class',   type: 'No Gi',     level: 'Age 9–13' },
    fri:   { category: 'juniors', label: 'Junior Class',   type: 'Gi',        level: 'Age 9–13' },
    sat:   null,
  },
  {
    time: '7:00 – 8:00 PM',
    mon:   { category: 'adults',  label: 'Adults',         type: 'Gi',        level: 'Age 14+' },
    tues:  { category: 'adults',  label: 'Adults',         type: 'No Gi',     level: 'Age 14+' },
    wed:   { category: 'adults',  label: 'Adults',         type: 'Gi',        level: 'Age 14+' },
    thurs: { category: 'adults',  label: 'Adults',         type: 'No Gi',     level: 'Age 14+' },
    fri:   { category: 'adults',  label: 'Adults',         type: 'Gi',        level: 'Age 14+' },
    sat:   null,
  },
]

export const DAYS = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
export const DAY_LABELS = { mon: 'Mon', tues: 'Tues', wed: 'Wed', thurs: 'Thurs', fri: 'Fri', sat: 'Sat' }
