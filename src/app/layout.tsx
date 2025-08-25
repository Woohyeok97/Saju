import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// 페이지 메타 데이터
export const metadata: Metadata = {
  title: '청월아씨 정통사주 무료 운세 결과 - 청담동 프리미엄 종합사주 | 운세박사',
  description:
    '청담동 프리미엄 종합사주. 세계 1위 청담동 사주팔자 전문가 청월아씨의 운세 해석 결과를 무료로 확인하세요! 재벌, 연예인들이 찾는 점술가 청월아씨의 사주 해석을 통해 평생 운세를 알아보세요. AI 사주, 인터넷 사주, 사주 사이트, 사주 잘보는 곳! 안좋은 운세도 솔직하게 알려드립니다. 청담동 점짐 청월아씨가 봐주는 사주 운세!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
