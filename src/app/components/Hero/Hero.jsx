import { useTranslations } from "next-intl"

const Hero = ({ url }) => {

    const t = useTranslations('Hero')
    return (
        <div className="h-auto" >
            <div className="container">
                <div
                    className="hero min-h-screen bg-fixed"
                    style={{
                        backgroundImage: `url(${url})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{t('title')}</h1>
                            <p className="mb-5 opacity-50">
                                {t('description')}
                            </p>
                            <button className="btn  btn-outline btn-primary">{t('btn')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
