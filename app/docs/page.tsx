'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Docs | Next App with GTM",
  description: "Test GTM with next app",
};

export default function Docs() {
  return (
    <div className="grid place-content-center min-h-screen">
      <Link
        href="/"
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'go-back' })}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >Go back</Link>
    </div>
  )
}
