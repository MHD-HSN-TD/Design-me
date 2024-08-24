import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Slider from '../components/Slider/Slider';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';



export default function HomePage() {
  const t = useTranslations();

  return <div className=" ">

    <Hero url={`imgs/slider/2.jpg`}></Hero>


    <div className="divider divider-primary">{t('Divider.title')}</div>
    <Section reverse={false} text={'Section'} imgSrc={'/imgs/sofa2.jpg'}></Section>
    {/* <div className="divider divider-primary">HERE LUXURY WERE MADE</div> */}
    <Section reverse={true} text={'Section'} imgSrc={'/imgs/sofa.jpg'}></Section>
    <div className="join join-vertical">
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="retro   "
        value="retro    " />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="luxury"
        value="luxury" />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="coffee"
        value="coffee" />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="cmyk"
        value="cmyk" />

    </div>

    {/* <h1>{t('title')}</h1> */}
  </div>
}
