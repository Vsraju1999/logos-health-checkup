export const metrics = [
  {
    code: 'HB',
    title: 'Hemoglobin',
    value: 14.2,
    unit: 'g/dL',
    status: 'normal',
    range: '13.5 – 17.5',
  },
  {
    code: 'GLU',
    title: 'Blood Sugar (Fasting)',
    value: 112,
    unit: 'mg/dL',
    status: 'high',
    range: '70 – 99',
  },
  {
    code: 'HBA1C',
    title: 'HbA1c',
    value: 5.9,
    unit: '%',
    status: 'high',
    range: '4.0 – 5.6',
  },
  {
    code: 'CHOL',
    title: 'Total Cholesterol',
    value: 186,
    unit: 'mg/dL',
    status: 'normal',
    range: '< 200',
  },
  {
    code: 'VITD',
    title: 'Vitamin D',
    value: 22,
    unit: 'ng/mL',
    status: 'low',
    range: '30 – 100',
  },
  {
    code: 'TSH',
    title: 'TSH',
    value: 2.1,
    unit: 'mIU/L',
    status: 'normal',
    range: '0.4 – 4.0',
  },
];

export const hemoglobinTrend = [
  { month: 'Jan', value: 13.8 },
  { month: 'Feb', value: 14.0 },
  { month: 'Mar', value: 13.6 },
  { month: 'Apr', value: 14.1 },
  { month: 'May', value: 14.4 },
  { month: 'Jun', value: 14.2 },
  { month: 'Jul', value: 14.2 },
];

export const cholesterolTrend = [
  { month: 'Jan', total: 210, ldl: 130, hdl: 45 },
  { month: 'Feb', total: 205, ldl: 128, hdl: 46 },
  { month: 'Mar', total: 198, ldl: 122, hdl: 48 },
  { month: 'Apr', total: 195, ldl: 120, hdl: 49 },
  { month: 'May', total: 190, ldl: 116, hdl: 50 },
  { month: 'Jun', total: 188, ldl: 114, hdl: 51 },
  { month: 'Jul', total: 186, ldl: 112, hdl: 52 },
];

export const glucoseComparison = [
  { month: 'Jan', fasting: 98, postMeal: 132 },
  { month: 'Feb', fasting: 102, postMeal: 138 },
  { month: 'Mar', fasting: 105, postMeal: 141 },
  { month: 'Apr', fasting: 108, postMeal: 145 },
  { month: 'May', fasting: 110, postMeal: 148 },
  { month: 'Jun', fasting: 113, postMeal: 152 },
  { month: 'Jul', fasting: 112, postMeal: 150 },
];

export const reports = [
  {
    id: 'r-1',
    original_name: 'CBC_Report_July2026.pdf',
    lab_name: 'Apollo Diagnostics',
    report_date: '2026-07-05',
    file_size: 284000,
    status: 'ready',
    tests: 6,
  },
  {
    id: 'r-2',
    original_name: 'LipidPanel_June2026.pdf',
    lab_name: 'Dr. Lal PathLabs',
    report_date: '2026-06-12',
    file_size: 214000,
    status: 'ready',
    tests: 4,
  },
  {
    id: 'r-3',
    original_name: 'ThyroidProfile_May2026.pdf',
    lab_name: 'Metropolis Healthcare',
    report_date: '2026-05-20',
    file_size: 198000,
    status: 'ready',
    tests: 3,
  },
  {
    id: 'r-4',
    original_name: 'FullBodyCheckup_Apr2026.pdf',
    lab_name: 'Thyrocare',
    report_date: '2026-04-08',
    file_size: 512000,
    status: 'ready',
    tests: 12,
  },
  {
    id: 'r-5',
    original_name: 'Vitamin_Profile_Mar2026.pdf',
    lab_name: 'Apollo Diagnostics',
    report_date: '2026-03-15',
    file_size: 176000,
    status: 'processing',
    tests: 0,
  },
];

export const patient = {
  full_name: 'Madhukar Kothari',
  date_of_birth: '1992-04-15',
  gender: 'male',
  blood_group: 'B+',
  height_cm: 178,
  weight_kg: 74,
};

export const reportDetail = {
  id: 'r-1',
  original_name: 'CBC_Report_July2026.pdf',
  lab_name: 'Apollo Diagnostics',
  report_date: '2026-07-05',
  results: [
    { test_name: 'Hemoglobin', value: 14.2, unit: 'g/dL', ref_low: 13.5, ref_high: 17.5, status: 'normal' },
    { test_name: 'Blood Glucose (Fasting)', value: 112, unit: 'mg/dL', ref_low: 70, ref_high: 99, status: 'high' },
    { test_name: 'HbA1c', value: 5.9, unit: '%', ref_low: 4.0, ref_high: 5.6, status: 'high' },
    { test_name: 'Total Cholesterol', value: 186, unit: 'mg/dL', ref_low: 0, ref_high: 200, status: 'normal' },
    { test_name: 'Vitamin D', value: 22, unit: 'ng/mL', ref_low: 30, ref_high: 100, status: 'low' },
    { test_name: 'TSH', value: 2.1, unit: 'mIU/L', ref_low: 0.4, ref_high: 4.0, status: 'normal' },
  ],
};
