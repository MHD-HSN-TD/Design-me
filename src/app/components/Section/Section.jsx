import clsx from "clsx"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Section = ({ reverse, imgSrc, text }) => {
    const t = useTranslations(text)
    return (
        <div className={`flex ${clsx(!reverse && "flex-row", reverse && "flex-row-reverse")} container  m-auto lg:px-20`}>
            <div className="p-10 basis-1/2"
                style={{}}> <Image src={imgSrc} width='500' height='500' alt='' /></div>
            <div className="basis-1/2 p-10 leading-loose" >
                <h1 className="font-bold text-xl my-7">{t('title')}</h1>{t('description')}</div>
        </div>
    )
}

export default Section
