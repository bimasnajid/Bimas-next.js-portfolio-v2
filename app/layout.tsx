import "../styles/globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Bimasni | Portfolio",
  description: "Portfolio Bimas",
  icons: {
    icon: "/images/logo_b1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
