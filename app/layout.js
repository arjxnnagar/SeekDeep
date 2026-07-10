import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import AuthProvider from "@/context/AuthContext";


const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SeekDeep",
  description: "A clone based of original DeepSeek",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AuthProvider>
        <html lang="en" className={`${inter.className} h-full antialiased`}>
          <body className="min-h-full flex flex-col ">{children}</body>
        </html>
      </AuthProvider>
    </ClerkProvider>
  );
}
