export default async function Layout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
  title: "سانیده",
  description: "شرکت سانیده",
};
