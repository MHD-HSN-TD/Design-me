// "use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';



export default function HomePage() {
  const t = useTranslations('HomePage');

  return <div>

    <Link href="/" locale="en">Switch to en</Link>
    <br />
    <Link href="/" locale="ar">Switch to ar</Link>

    <br />
    <Link href="/test" >go to the test</Link>

    <h1>{t('title')}</h1>
  </div>
}
