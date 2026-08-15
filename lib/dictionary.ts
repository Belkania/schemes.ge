import type { Locale } from './i18n';

const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    ka: () => import('../dictionaries/ka.json').then((module) => module.default),
    ru: () => import('../dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    const fn = dictionaries[locale as keyof typeof dictionaries] || dictionaries.ka;
    return fn();
};
