'use client'

import { usePathname, useRouter } from '@/navigation';
import Image from 'next/image';

const LanguageSwitcher = ({ LanguageSwitcherlocale }) => {
    console.log(LanguageSwitcherlocale)
    const pathname = usePathname();
    const router = useRouter();

    const changeLanguage = (lang) => {
        console.log(lang)
        // router.push(router.pathname, router.asPath, { locale: lang });
        router.replace(pathname, { locale: lang });
    };


    const changeLanguageBtn = LanguageSwitcherlocale == 'en' ? <button onClick={() => changeLanguage('ar')} aria-label="Arabic">
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
            {changeLanguageBtn}
        </div>
    );
};

export default LanguageSwitcher;