/* Five-star Google reviews of My Ashburn Dentist, quoted as published. Only reviewers whose Google
   profile picture is a photo of themselves are included; last names are cut to an initial. Photos are
   local copies in /assets/images/reviews/. `feature` promotes one card to the dark treatment. */

export interface Review {
  name: string;
  photo: string;
  text: string;
  feature?: boolean;
}

export const reviews: readonly Review[] = [
  {
    name: "Kavone B.",
    photo: "/assets/images/reviews/kavone-b.webp",
    text: "The Dr. is an artist. I was able to get a root canal done the same day, on a tooth that had previous work done, that left it looking terrible- he was able to complete rebuild it, to look completely realistic; while still opting out of getting a crown. I had a root canal done a few months ago, from an endodontist specialist; and Dr. Rusnak blew their work out of the water. 10/10 results.",
    feature: true,
  },
  {
    name: "Karen R.",
    photo: "/assets/images/reviews/karen-r.webp",
    text: "Dr. Rusznak has been my Dentist for over 15 years. I have a phobia of the Dentist, but Dr R. Comprehends me and has patience for me. I highly recommend him. Sapura is the hygienist and she is amazing. After seeing her I felt my teeth so smooth. She is very kind and very detailed.",
  },
  {
    name: "Nick P.",
    photo: "/assets/images/reviews/nick-p.webp",
    text: "This is not my regular dentist, but chosen off Google for an emergency. Came in for an emergency appointment that was quickly looked after and deemed a non-emergency that required neither treatment, nor payment. I'm used to going into dentist's offices and coming out with a long treatment list along with a long payment list. None of that this time. How great is that! Plus treated like a longtime patient. Great service ... great staff and office.",
  },
  {
    name: "Matt M.",
    photo: "/assets/images/reviews/matt-m.webp",
    text: "I had my first visit today at My Ashburn Dentist, and I couldn't be more pleased. From the moment I walked in, the reception staff were welcoming and professional. The entire process was smooth, and the atmosphere was clean and comfortable. The doctor was incredibly honest, knowledgeable, and professional. He took the time to explain everything clearly and made me feel confident about the care I was receiving. It's not easy to find a dental office that combines such a high level of professionalism with a genuinely caring attitude, but this place truly stands out. I'm very satisfied with my experience and grateful to have found such a great dental team. Highly recommended!",
  },
  {
    name: "Beant S.",
    photo: "/assets/images/reviews/beant-s.webp",
    text: "First appointment Dr took his time to explain and answer all my questions. Highly recommend. Thanks!",
  },
  {
    name: "Michael S.",
    photo: "/assets/images/reviews/michael-s.webp",
    text: "Over a number of years I’ve had cleanings, a root canal, and a couple crowns done and Dr. Rusznak has always done a great job and is very personable. It is always easy to get an appointment quickly when I need it.",
  },
  {
    name: "Jason F.",
    photo: "/assets/images/reviews/jason-f.webp",
    text: "I've been a patient of Dr. Rusznak for over ten years and must say, he is the only dentist in Loudoun County that I'll ever use. This week I went for a root canal procedure which I was not looking forward to. The funny thing is, I literally fell asleep to a movie they had on for me to watch during the procedure. I highly recommend Dr. Rusznak at My Ashburn Dentist!",
  },
  {
    name: "Cheryl P.",
    photo: "/assets/images/reviews/cheryl-p.webp",
    text: "Dr R., Deb and the team are amazing. So willing to make you comfortable and to coordinate a dental plan that works for your schedule and budget.",
  },
  {
    name: "Daniela P.",
    photo: "/assets/images/reviews/daniela-p.webp",
    text: "I am new to the area. The office not only had a great customer service making my family feel welcome, they did a great job with preventive oral services and referrals. I was specially happy with how they communicated with our insurance and made the whole experience wonderful.",
  },
];
