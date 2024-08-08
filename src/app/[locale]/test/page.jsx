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
        </div>
    )
}
