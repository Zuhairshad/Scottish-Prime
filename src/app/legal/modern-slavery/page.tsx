import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Modern slavery statement, Scottish Prime Energy",
  description:
    "Scottish Prime Energy's annual statement under section 54 of the Modern Slavery Act 2015.",
};

export default function ModernSlaveryPage() {
  return (
    <LegalPage
      title="Modern slavery statement"
      updated="Financial year 2025"
      intro="This statement is published under section 54 of the Modern Slavery Act 2015. It sets out the steps Scottish Prime Energy Ltd has taken during the financial year to ensure modern slavery is not taking place in our business or supply chain."
      sections={[
        {
          heading: "Our business",
          body: "We're a UK business energy comparison and procurement service. Our supply chain is small and predominantly UK-based: cloud infrastructure, payroll and accounting providers, marketing and design contractors, and the energy suppliers we resell.",
        },
        {
          heading: "Our policies",
          body: "All employees are paid at or above the Real Living Wage. We operate a public whistleblowing channel and require all suppliers to confirm compliance with the Modern Slavery Act before onboarding. We provide annual modern-slavery awareness training to all staff in customer-facing or procurement roles.",
        },
        {
          heading: "Risk assessment",
          body: "We consider our direct modern-slavery risk to be low: our supply chain is short and operates exclusively within the UK and EEA. The most material risk sits with our suppliers' supply chains for equipment manufacture (smart meters, network hardware) sourced outside the UK.",
        },
        {
          heading: "Due diligence",
          body: "We require modern-slavery compliance attestations from all energy supplier partners and our top-20 contractors by spend. We monitor public modern-slavery statements from each annually and review against our internal risk register.",
        },
        {
          heading: "Approval",
          body: "This statement was approved by the Board of Scottish Prime Energy Ltd and signed by our CEO on behalf of the company. Future updates will be published on this page within six months of each financial year end.",
        },
      ]}
    />
  );
}
