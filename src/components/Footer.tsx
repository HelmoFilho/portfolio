import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-950 flex items-center justify-center py-5">
      <p className="copyright">
        {t("copyright")}
      </p>
    </footer>
  )
}

export default Footer
