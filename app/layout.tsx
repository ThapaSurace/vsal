import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleTheme } from "@/components/ToggleTheme";
import ScrollProgress from "@/components/ui/scroll-progress";
import NavBar from "@/components/NavBar";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bishal Dahal Khatri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress className="top-0" />
          <main>
            <NavBar />

            <div className="">
              <div className="fixed top-4 sm:top-10 right-4 sm:right-20 hidden sm:block">
                <ToggleTheme />
              </div>
              {children}
            </div>
            <div>
              <footer className="text-center py-10 border-t">
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} Bishal Dahal Khatri. All
                  rights reserved.
                </p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
