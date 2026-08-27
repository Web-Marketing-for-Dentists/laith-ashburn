export const site = {
  name: "My Ashburn Dentist",
  title: "Dental Implants | My Ashburn Dentist",
  description: "Dental implant consultations and general dentistry in Ashburn, Virginia.",
  url: "https://offer.dentist-in-ashburn.com",
  phoneDisplay: "(571) 248-5413",
  phoneHref: "tel:+15712485413",
  address: "20925 Professional Plaza, Suite 330, Ashburn, VA 20147",
};

export const procedures = [
  { slug: "dental-implants", name: "Dental Implants", price: "$2,999", description: "A considered path to restoring a missing tooth with an implant, abutment, and crown." },
  { slug: "dental-crowns", name: "Dental Crowns", price: "$799", description: "Protect and restore a worn, damaged, or weakened tooth with a carefully made crown." },
  { slug: "wisdom-tooth-extractions", name: "Wisdom Tooth Extractions", price: "$299", description: "Clear guidance and gentle care for wisdom teeth that need attention." },
  { slug: "root-canal-treatment", name: "Root Canal Treatment", price: "$699", description: "Relieve pain and preserve a natural tooth with focused endodontic treatment." },
  { slug: "general-dentistry", name: "General Dentistry", price: "", description: "Preventive and restorative care built around your comfort and goals." },
] as const;

export const procedureOptions = [
  "Dental Implants",
  "Dental Crowns",
  "Wisdom Tooth Extractions",
  "Root Canal Treatment",
  "General Dentistry",
  "Second Opinion",
  "Other",
] as const;

export const resolveProcedure = (value?: string | null) => {
  const normalized = value?.trim().toLowerCase() ?? "";
  const aliases: Record<string, string> = {
    "single dental implant": "Dental Implants",
    implants: "Dental Implants",
    crowns: "Dental Crowns",
    "root canal": "Root Canal Treatment",
    "wisdom tooth extraction": "Wisdom Tooth Extractions",
  };
  return procedureOptions.includes(value as (typeof procedureOptions)[number])
    ? value!
    : aliases[normalized] ?? "Dental Implants";
};
