import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "헤부의 블로그",
  description: "헤부의 블로그에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ko">
      <body>
        <header className="bg-gray-900 text-white">
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
