import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Privacy policy, Scottish Prime Energy",
  description:
    "How Scottish Prime Energy collects, uses and protects business and personal data submitted through our comparison service.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="June 2026"
      intro="This policy describes how we handle personal and business information you give us when running a quote, signing a contract, or contacting our team. We're a UK GDPR data controller in our own right and act in your best interest."
      sections={[
        {
          heading: "What we collect",
          body: "Quote details (business postcode, business name, MPAN/MPRN, renewal date, estimated consumption), contact details (name, work email, phone), and usage data (pages visited, device/browser type). We never collect payment details — those go directly to the supplier you choose.",
        },
        {
          heading: "Why we collect it",
          body: "To produce accurate quotes against your real consumption profile, route your switch to the supplier you select, and send service updates about your contract. We don't sell your data to third parties.",
        },
        {
          heading: "Who we share it with",
          body: "The supplier you select when you complete a contract. Their privacy policy then governs how they handle your data thereafter. We also use UK-based infrastructure providers (hosting, email delivery, CRM) under standard processor agreements.",
        },
        {
          heading: "Your rights",
          body: "Under UK GDPR you have the right to access, correct, delete, port or restrict processing of your data. Email privacy@scottishprimeenergy.co.uk and we'll respond within 30 days. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk.",
        },
        {
          heading: "Retention",
          body: "Quote enquiries that don't convert are deleted after 12 months. Contract data is retained for the lifetime of the contract plus seven years for tax and audit purposes, in line with HMRC guidance.",
        },
      ]}
    />
  );
}
