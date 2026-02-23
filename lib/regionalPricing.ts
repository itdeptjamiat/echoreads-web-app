/**
 * Static regional prices from Google Play Console.
 * Echo Plus: monthly, 6 months, yearly.
 * Echo Pro: monthly, 6 months, yearly.
 * For live prices, users should check the mobile app.
 */

export type PeriodKey = 'monthly' | 'sixMonth' | 'yearly';

export interface PlanPrices {
  monthly: string;   // e.g. "300" or "4.99"
  sixMonth: string;
  yearly: string;
}

export interface RegionalPrice {
  code: string;     // ISO 3166-1 alpha-2
  name: string;
  currency: string;
  plus: PlanPrices;
  pro: PlanPrices;
}

export const REGIONAL_PRICES: RegionalPrice[] = [
  { code: 'PK', name: 'Pakistan', currency: 'PKR', plus: { monthly: '300', sixMonth: '1,500', yearly: '3,000' }, pro: { monthly: '500', sixMonth: '2,500', yearly: '5,000' } },
  { code: 'US', name: 'United States', currency: 'USD', plus: { monthly: '4.99', sixMonth: '24.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '99.99' } },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', plus: { monthly: '4.39', sixMonth: '21.99', yearly: '44.49' }, pro: { monthly: '8.99', sixMonth: '44.49', yearly: '88.99' } },
  { code: 'IN', name: 'India', currency: 'INR', plus: { monthly: '520', sixMonth: '2,650', yearly: '5,300' }, pro: { monthly: '1,050', sixMonth: '5,300', yearly: '10,600' } },
  { code: 'AE', name: 'United Arab Emirates', currency: 'AED', plus: { monthly: '50.99', sixMonth: '279.99', yearly: '509.99' }, pro: { monthly: '104.99', sixMonth: '509.99', yearly: '384.99' } },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', plus: { monthly: '57.99', sixMonth: '309.99', yearly: '579.99' }, pro: { monthly: '114.99', sixMonth: '579.99', yearly: '429.99' } },
  { code: 'CA', name: 'Canada', currency: 'CAD', plus: { monthly: '6.99', sixMonth: '33.99', yearly: '67.99' }, pro: { monthly: '13.99', sixMonth: '67.99', yearly: '134.99' } },
  { code: 'AU', name: 'Australia', currency: 'AUD', plus: { monthly: '7.99', sixMonth: '40.99', yearly: '81.99' }, pro: { monthly: '15.99', sixMonth: '81.99', yearly: '164.99' } },
  { code: 'DE', name: 'Germany', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '24.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '99.99' } },
  { code: 'FR', name: 'France', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '24.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '99.99' } },
  { code: 'AT', name: 'Austria', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '24.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '99.99' } },
  { code: 'BE', name: 'Belgium', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '25.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '104.99' } },
  { code: 'BH', name: 'Bahrain', currency: 'USD', plus: { monthly: '14.99', sixMonth: '79.99', yearly: '149.99' }, pro: { monthly: '28.99', sixMonth: '149.99', yearly: '109.99' } },
  { code: 'BD', name: 'Bangladesh', currency: 'BDT', plus: { monthly: '700', sixMonth: '3,500', yearly: '7,000' }, pro: { monthly: '1,400', sixMonth: '7,000', yearly: '14,000' } },
  { code: 'EG', name: 'Egypt', currency: 'EGP', plus: { monthly: '269.99', sixMonth: '1,349.99', yearly: '2,699.99' }, pro: { monthly: '539.99', sixMonth: '2,699.99', yearly: '5,449.99' } },
  { code: 'HK', name: 'Hong Kong', currency: 'HKD', plus: { monthly: '38', sixMonth: '198', yearly: '389' }, pro: { monthly: '78', sixMonth: '389', yearly: '778' } },
  { code: 'ID', name: 'Indonesia', currency: 'IDR', plus: { monthly: '84,000', sixMonth: '419,000', yearly: '790,000' }, pro: { monthly: '169,000', sixMonth: '790,000', yearly: '1,690,000' } },
  { code: 'JP', name: 'Japan', currency: 'JPY', plus: { monthly: '860', sixMonth: '4,300', yearly: '8,600' }, pro: { monthly: '1,720', sixMonth: '8,600', yearly: '17,200' } },
  { code: 'KW', name: 'Kuwait', currency: 'USD', plus: { monthly: '12.99', sixMonth: '69.99', yearly: '129.99' }, pro: { monthly: '26.99', sixMonth: '129.99', yearly: '99.99' } },
  { code: 'MY', name: 'Malaysia', currency: 'MYR', plus: { monthly: '21.99', sixMonth: '109.99', yearly: '219.99' }, pro: { monthly: '43.99', sixMonth: '219.99', yearly: '439.99' } },
  { code: 'MX', name: 'Mexico', currency: 'MXN', plus: { monthly: '105', sixMonth: '519', yearly: '1,049' }, pro: { monthly: '209', sixMonth: '1,049', yearly: '2,099' } },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '25.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '104.99' } },
  { code: 'NZ', name: 'New Zealand', currency: 'NZD', plus: { monthly: '9.99', sixMonth: '48.99', yearly: '99.99' }, pro: { monthly: '19.99', sixMonth: '99.99', yearly: '199.99' } },
  { code: 'NG', name: 'Nigeria', currency: 'NGN', plus: { monthly: '7,750', sixMonth: '39,000', yearly: '77,500' }, pro: { monthly: '15,500', sixMonth: '77,500', yearly: '155,500' } },
  { code: 'OM', name: 'Oman', currency: 'USD', plus: { monthly: '13.99', sixMonth: '74.99', yearly: '139.99' }, pro: { monthly: '27.99', sixMonth: '139.99', yearly: '99.99' } },
  { code: 'QA', name: 'Qatar', currency: 'QAR', plus: { monthly: '49', sixMonth: '260', yearly: '485' }, pro: { monthly: '97', sixMonth: '485', yearly: '365' } },
  { code: 'SG', name: 'Singapore', currency: 'SGD', plus: { monthly: '6.99', sixMonth: '34.99', yearly: '69.99' }, pro: { monthly: '13.99', sixMonth: '69.99', yearly: '139.99' } },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', plus: { monthly: '95.99', sixMonth: '479.99', yearly: '959.99' }, pro: { monthly: '189.99', sixMonth: '959.99', yearly: '1,899.99' } },
  { code: 'KR', name: 'South Korea', currency: 'KRW', plus: { monthly: '7,900', sixMonth: '39,000', yearly: '79,000' }, pro: { monthly: '16,000', sixMonth: '79,000', yearly: '160,000' } },
  { code: 'ES', name: 'Spain', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '25.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '104.99' } },
  { code: 'SE', name: 'Sweden', currency: 'SEK', plus: { monthly: '59', sixMonth: '285', yearly: '569' }, pro: { monthly: '115', sixMonth: '569', yearly: '1,149' } },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', plus: { monthly: '3.90', sixMonth: '20', yearly: '39' }, pro: { monthly: '7.90', sixMonth: '39', yearly: '80' } },
  { code: 'TH', name: 'Thailand', currency: 'THB', plus: { monthly: '175', sixMonth: '850', yearly: '1,675' }, pro: { monthly: '325', sixMonth: '1,675', yearly: '3,375' } },
  { code: 'TR', name: 'Türkiye', currency: 'TRY', plus: { monthly: '254.99', sixMonth: '1,289.99', yearly: '2,579.99' }, pro: { monthly: '509.99', sixMonth: '2,579.99', yearly: '5,149.99' } },
  { code: 'VN', name: 'Vietnam', currency: 'VND', plus: { monthly: '131,000', sixMonth: '657,000', yearly: '1,300,000' }, pro: { monthly: '263,000', sixMonth: '1,300,000', yearly: '2,650,000' } },
  { code: 'PL', name: 'Poland', currency: 'PLN', plus: { monthly: '21.99', sixMonth: '109.99', yearly: '219.99' }, pro: { monthly: '43.99', sixMonth: '219.99', yearly: '439.99' } },
  { code: 'IT', name: 'Italy', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '25.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '104.99' } },
  { code: 'IE', name: 'Ireland', currency: 'EUR', plus: { monthly: '4.99', sixMonth: '25.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '104.99' } },
  { code: 'BR', name: 'Brazil', currency: 'BRL', plus: { monthly: '27.99', sixMonth: '139.99', yearly: '274.99' }, pro: { monthly: '54.99', sixMonth: '274.99', yearly: '549.99' } },
  { code: 'RU', name: 'Russia', currency: 'RUB', plus: { monthly: '379', sixMonth: '1,899', yearly: '3,799' }, pro: { monthly: '790', sixMonth: '3,799', yearly: '7,690' } },
  { code: 'CN', name: 'China', currency: 'USD', plus: { monthly: '4.99', sixMonth: '24.99', yearly: '49.99' }, pro: { monthly: '9.99', sixMonth: '49.99', yearly: '99.99' } },
];

const BY_CODE = new Map(REGIONAL_PRICES.map((r) => [r.code, r]));

export function getRegionalPriceByCode(code: string): RegionalPrice | undefined {
  return BY_CODE.get(code.toUpperCase());
}

export function getRegionalPriceByCountryName(name: string): RegionalPrice | undefined {
  const n = name.toLowerCase();
  return REGIONAL_PRICES.find((r) => r.name.toLowerCase() === n || r.name.toLowerCase().includes(n));
}

/** Default region when location cannot be determined (pricing page only). */
export function getDefaultRegionCode(): string {
  if (typeof window === 'undefined') return 'US';
  try {
    const locale = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage;
    const country = locale.split('-')[1]?.toUpperCase();
    if (country && BY_CODE.has(country)) return country;
  } catch (_) {}
  return 'US';
}
