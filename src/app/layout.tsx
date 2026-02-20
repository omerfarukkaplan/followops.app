import "./globals.css";

export const metadata = {
  title: "FollowOps",
  description: "Canlı yoğunluk ve kampanya platformu"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F0F12" />
        <script
          src="https://cdn.paddle.com/paddle/v2/paddle.js"
          defer
        ></script>
      </head>
      <body className="bg-[#0F0F12] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
