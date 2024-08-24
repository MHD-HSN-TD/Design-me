import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Slider from '../components/Slider/Slider';



export default function HomePage() {
  const t = useTranslations('HomePage');

  return <div className=" ">

    <div className="h-auto" dir='LTR'>

      <Slider></Slider>
    </div>
    <Link href="/" locale="en">Switch to en</Link>
    <br />
    <Link href="/" locale="ar">Switch to ar</Link>

    <br />
    <Link href="/test" >go to the test</Link>

    <h1>{t('title')}</h1>
  </div>
}
