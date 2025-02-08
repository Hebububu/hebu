import "./globals.css";
import Link from "next/link";

// 메타데이터 정의
export const metadata = {
  title: "헤부의 블로그",
  description: "헤부의 블로그에 오신 것을 환영합니다.",
};

// 네비게이션 링크 목록
const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/blog", label: "블로그" },
]


// 최상위 레이아웃 구성
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
            <ul className="flex space-x-4 p-4">
              {navItems.map(({ href, label}) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
