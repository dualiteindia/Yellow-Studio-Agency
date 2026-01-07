export interface Insight {
  id: string;
  title: string;
  category: string;
  length: string;
  date: string;
  image: string;
}

// Insight Images
const IMG_SPRINT =
  "https://www.dropbox.com/scl/fi/km0r2mghncwtik5gskg9e/Gemini_Generated_Image_1v5gvh1v5gvh1v5g_converted.avif?rlkey=x9109m7izjpnb1dwcxjc9u8a8&st=a7200vr5&raw=1";
const IMG_PIXELS =
  "https://www.dropbox.com/scl/fi/0h0cjikfhgksh6jb518ev/Gemini_Generated_Image_qm5gcjqm5gcjqm5g_converted.avif?rlkey=ad0s61tizvd9p7uut9hcmxa61&st=062a4jut&raw=1";
const IMG_FLAGS =
  "https://www.dropbox.com/scl/fi/8g0joucj3emjzkdqb4zwd/Gemini_Generated_Image_bcbp3bcbp3bcbp3b_converted.avif?rlkey=qp4cadizr5u6cr7ly2vphw8t6&st=ne18csg9&raw=1";
const IMG_ACCESS =
  "https://www.dropbox.com/scl/fi/d2uxtgv1u0x0sl8p98rpz/Gemini_Generated_Image_crpyccrpyccrpycc_converted.avif?rlkey=zr4tm5qlq80o71cjkhj8le6xt&st=gd8j31ur&raw=1";

export const insights: Insight[] = [
  {
    id: "design-sprints",
    title: "DESIGN SPRINTS DONE RIGHT",
    category: "Process",
    length: "5 mins",
    date: "Jun 24, 2025",
    image: IMG_SPRINT,
  },
  {
    id: "beyond-pixels",
    title: "BEYOND PIXELS: MEASURING DESIGN IMPACT",
    category: "Strategy",
    length: "4 mins",
    date: "Jun 18, 2025",
    image: IMG_PIXELS,
  },
  {
    id: "feature-flags",
    title: "SHIPPING FASTER WITH FEATURE FLAGS",
    category: "Engineering",
    length: "7 mins",
    date: "Jun 12, 2025",
    image: IMG_FLAGS,
  },
  {
    id: "accessibility-myths",
    title: "ACCESSIBILITY MYTHS",
    category: "Design",
    length: "6 mins",
    date: "May 30, 2025",
    image: IMG_ACCESS,
  },
];
