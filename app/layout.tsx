'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReduxProvider} from "@/redux/provider";
import Header from "@/app/common/Header";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ReduxProvider>
      <html>
      <head>
        <title>Next.js 공부중</title>
      </head>

      <body>
      <nav><Header/></nav>
      {children}
      </body>
      </html>
      </ReduxProvider>
  )
}
