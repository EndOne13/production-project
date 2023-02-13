import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <h1>{t('Очень главная страница')}</h1>
        </div>
    );
};

export default MainPage;
