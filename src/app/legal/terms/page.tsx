import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Terms of service, Scott Prime Energy",
  description:
    "Terms governing the use of Scott Prime Energy's website and comparison services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="June 2026"
      intro="These terms govern your use of the Scott Prime Energy website and our business energy comparison service. By using the site you accept these terms in full."
      sections={[
        {
          heading: "About us",
          body: "Scott Prime Energy Ltd is a Third-Party Intermediary (TPI) registered in England and Wales (placeholder Companies House no. 04967449), with its registered office at Bothwell Street, Glasgow, G2 4JR. References to 'we', 'us' and 'our' mean Scott Prime Energy Ltd.",
        },
        {
          heading: "Our service",
          body: "We display live business energy tariffs from supplier partners and facilitate switching. We don't supply energy directly — your supply contract is always with the supplier you choose. Quote figures shown on this site are indicative until validated against your meter point (MPAN/MPRN) and supplier-confirmed.",
        },
        {
          heading: "Fees",
          body: "Our service is free for businesses to use. We receive a commission from suppliers when a customer completes a contract through us. The commission, where applicable to your unit rate, is disclosed on every quote in line with Ofgem's TPI transparency rules.",
        },
        {
          heading: "Liability",
          body: "We rank tariffs based on the data supplied to us by suppliers and your stated annual consumption. Final pricing is set by the supplier in your signed contract. We exclude liability for any commercial loss arising from estimates differing from final supplier-confirmed pricing, to the maximum extent permitted by law.",
        },
        {
          heading: "Changes to these terms",
          body: "We may update these terms from time to time; material changes will be highlighted on this page with the updated date above. Continued use of the site after a change means you accept the revised terms.",
        },
      ]}
    />
  );
}
