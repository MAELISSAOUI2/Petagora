import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          pricing: {
            title: 'Pricing',
            subtitle: 'Choose the perfect plan for you',
            billing: {
              monthly: 'Monthly',
              annual: 'Annual',
              save: 'Save 20%'
            },
            most_popular: 'Most Popular',
            upfront_collar: 'Collar price: {{price}}',
            currency: '$',
            per: {
              month: '/mo',
              year: '/yr'
            },
            select_plan: 'Select Plan'
          }
        }
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 