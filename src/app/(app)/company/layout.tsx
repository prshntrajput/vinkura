import SiteHeader from '@/components/site-header';
import React from 'react';
import { PageTransition } from '@/components/PageTransition'; // Assuming this is a separate component for page transitions

// Define DashboardLayout
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SiteHeader />

      {/* Wrapping the children with page transition (if needed) */}
      <PageTransition>
        {children}
      </PageTransition>
    </section>
  );
}
