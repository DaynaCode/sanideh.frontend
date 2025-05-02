import PopUps from "@/components/templates/popUps/PopUps";
import { language } from "@/utils/dataContainer/language/language";

export default async function Layout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen relative">
        {children}
        <PopUps lang={language.en} />
      </body>
    </html>
  );
}
export const metadata = {
  title: "sanideh",
  description: "sanideh company",
};
