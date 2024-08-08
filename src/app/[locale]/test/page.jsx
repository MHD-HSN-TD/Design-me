'use client';

import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function page({ params }) {
    const t = useTranslations('test');

    const pathname = usePathname();
    const router = useRouter();
    // console.log(params)

    const changeLang = () => {

        let lan = params.locale
        // console.log(lan)
        if (lan == 'ar') {
            router.replace(pathname, { locale: 'en' });
        } else {
            router.replace(pathname, { locale: 'ar' });
        }

        console.log(lan)
    }

    return (
        <div>
            <button type="button" onClick={changeLang}> change</button>
            <br />
            {/* <button type="button" onClick={changeLang}> ar</button> */}
            <div>{t('title')}</div>

            <div className="join join-vertical">
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    aria-label="Default"
                    value="default" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    aria-label="primaryTheme"
                    value="primaryTheme" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    aria-label="Dark"
                    value="dark" />
                <input
                    type="radio"
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    aria-label="night"
                    value="night" />

            </div>
        </div>
    )
}
