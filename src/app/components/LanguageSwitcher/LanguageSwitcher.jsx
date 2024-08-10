'use client'

import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const LanguageSwitcher = ({ LanguageSwitcherlocale }) => {
    // console.log(LanguageSwitcherlocale)
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("Lang")
    const changeLanguage = (lang) => {
        console.log(lang)
        // router.pusbh(router.pathname, router.asPath, { locale: lang });
        router.replace(pathname, { locale: lang });
    };


    const changeLanguageBtn = LanguageSwitcherlocale == 'en' ? <div className="flex" >
        <button className='m-px flex items-center gap-1' onClick={() => changeLanguage('ar')} aria-label="Arabic">
            <Image src="/imgs/flags/ar.png"
                width={44}
                height={44}
                alt="Arabic" className="w-8 h-8" />
            <p className='m-px'>{t('title')}</p>
        </button>
    </div>
        : <div className="flex">
            <button className='m-px flex items-center gap-1' onClick={() => changeLanguage('en')} aria-label="English">
                <Image src="/imgs/flags/en.png"
                    width={44}
                    height={44}
                    alt="English" className="w-8 h-8" />

                <p className='m-px'>{t('title')}</p>
            </button>
        </div>

    return (
        <div className="flex items-center space-x-4">
            {changeLanguageBtn}
            {/* <p className='m-px'>{t('title')}</p> */}

        </div>
    );
};

export default LanguageSwitcher;