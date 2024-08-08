'use client'
// components/LanguageSwitcher.js
// import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';

import { usePathname, useRouter } from '@/navigation';
import Image from 'next/image';

const LanguageSwitcher = ({ locale }) => {
    // const t = useTranslations('common');
    const pathname = usePathname();
    const router = useRouter();

    const changeLanguage = (lang) => {
        // router.push(router.pathname, router.asPath, { locale: lang });
        router.replace(pathname, { locale: lang });
    };
    const canDrive = locale == 'en' ? <button onClick={() => changeLanguage('ar')} aria-label="Arabic">
        <Image src="/imgs/flags/ar.png"
            width={44}
            height={44}
            alt="Arabic" className="w-8 h-8" />
    </button>
        : <button onClick={() => changeLanguage('en')} aria-label="English">
            <Image src="/imgs/flags/en.png"
                width={44}
                height={44}
                alt="English" className="w-8 h-8" />
        </button>

    return (
        <div className="flex items-center space-x-4">
            {
                canDrive
            }
            {/* <button onClick={() => changeLanguage('en')} aria-label="English">
                <Image src="/imgs/flags/en.png"
                    width={44}
                    height={44}
                    alt="English" className="w-8 h-8" />
            </button>
            <button onClick={() => changeLanguage('ar')} aria-label="Arabic">
                <Image src="/imgs/flags/ar.png"
                    width={44}
                    height={44}
                    alt="Arabic" className="w-8 h-8" />
            </button> */}
        </div>
    );
};

export default LanguageSwitcher;