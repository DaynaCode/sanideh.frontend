import Footer from "@/components/templates/footer/Footer";
import PopUps from "@/components/templates/popUps/PopUps";
import { language } from "@/utils/dataContainer/language/language";

export default async function Layout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="w-full h-screen relative bg-background">
        {children}
        <Footer />
        <PopUps lang={language.fa} />
      </body>
    </html>
  );
}
export const metadata = {
  title: "سانیده",
  description: "شرکت سانیده",
};
