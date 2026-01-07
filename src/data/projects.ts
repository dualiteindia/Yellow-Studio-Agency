export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  heroImage: string;
  gridImage: string;
  images: string[];
  description: string;
  process: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  outcome: {
    title: string;
    description: string;
  };
}

// Image Constants
const IMG_RELATION =
  "https://www.dropbox.com/scl/fi/3pnz9pgh97018aef11zs5/2148792986.avif?rlkey=dla4wtgu4nkjw9mq3dg7gwioa&st=3a6bkufm&raw=1";
const IMG_GREY_SPACE =
  "https://www.dropbox.com/scl/fi/cg4843m1hx0c1eakcg425/3d-rendered-abstract-design-elements-composition.avif?rlkey=rhgofq07xd0crxa9z1blepih3&st=hxqcqmhn&raw=1";
const IMG_REFLECTIONS =
  "https://www.dropbox.com/scl/fi/r85x2ktupilytyu094slu/envato-labs-image-edit-19.avif?rlkey=yg5zv0uxa4m2aah69z1x0qyvr&st=5yr9ewc0&raw=1";
const IMG_BUBBLE =
  "https://www.dropbox.com/scl/fi/ih7guwro5yjfm9677o3og/20849708_6364976.avif?rlkey=rye7rt3g1v4w4sfuirsxk3jki&st=huzug4iz&raw=1";
const IMG_REACT =
  "https://www.dropbox.com/scl/fi/ahbp985x38l5cqy59r56w/9866.avif?rlkey=xb19w8wmgp091u4bobwh7a51x&st=wk7rx4gi&raw=1";
const IMG_BUY_HEJ =
  "https://www.dropbox.com/scl/fi/rjfdd1nb4kmoh94bdlouj/20443691_6299913-1.avif?rlkey=oidi0idkunyto4w0uk1kndlc7&st=ogun4h9t&raw=1"; // Extra 1

// Extra Images for details
const IMG_EXTRA_2 =
  "https://www.dropbox.com/scl/fi/1v6ykynb49wnwuh0f7kwp/74879019_9808781.avif?rlkey=3yx3po8nqcplwjj5mkk7bhpyp&st=eeujr2vn&raw=1";
const IMG_EXTRA_3 =
  "https://www.dropbox.com/scl/fi/z8ov7vjd2ydtesx0xvkob/8422370_3897478.avif?rlkey=2bptpi5sysgnnz832qxr8jcx2&st=dyeny17s&raw=1";

export const projects: Project[] = [
  {
    id: "relation",
    index: "001",
    title: "RELATION",
    category: "Branding / UI",
    year: "2024",
    heroImage: IMG_RELATION,
    gridImage: IMG_RELATION,
    images: [IMG_EXTRA_2, IMG_EXTRA_3],
    description:
      "A complete brand overhaul for a modern dating app focusing on meaningful connections.",
    process: {
      title: "PROCESS",
      description: "We started by deconstructing the current dating landscape.",
      steps: [
        {
          title: "Research",
          description:
            "Conducting in-depth user research to understand pain points in modern dating.",
        },
        {
          title: "Strategy",
          description:
            "Defining a voice that speaks to authenticity rather than gamification.",
        },
        {
          title: "Design",
          description:
            "Creating a visual system that feels warm, tactile, and human.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "A 40% increase in user retention and a brand that feels distinctly human in a digital space.",
    },
  },
  {
    id: "grey-space",
    index: "002",
    title: "GREY SPACE",
    category: "Architecture",
    year: "2023",
    heroImage: IMG_GREY_SPACE,
    gridImage: IMG_GREY_SPACE,
    images: [IMG_EXTRA_3, IMG_RELATION],
    description:
      "Minimalist architectural visualization for a new cultural center in Copenhagen.",
    process: {
      title: "PROCESS",
      description: "Balancing light, shadow, and concrete.",
      steps: [
        {
          title: "Concept",
          description:
            "Exploring the relationship between brutalism and nature.",
        },
        {
          title: "Modeling",
          description:
            "High-fidelity 3D modeling of the structure and surrounding landscape.",
        },
        {
          title: "Rendering",
          description:
            "Achieving photorealistic lighting conditions for various times of day.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "The visualization helped secure funding for the project's next phase of development.",
    },
  },
  {
    id: "reflections",
    index: "003",
    title: "REFLECTIONS",
    category: "Art Direction",
    year: "2024",
    heroImage: IMG_REFLECTIONS,
    gridImage: IMG_REFLECTIONS,
    images: [IMG_EXTRA_2, IMG_GREY_SPACE],
    description:
      "An editorial campaign exploring the duality of modern fashion.",
    process: {
      title: "PROCESS",
      description: "Using mirrors and light to create distortion.",
      steps: [
        {
          title: "Art Direction",
          description:
            "Curating a moodboard centered around glass, water, and reflection.",
        },
        {
          title: "Production",
          description:
            "A two-day shoot in a custom-built set with complex lighting rigs.",
        },
        {
          title: "Post-Production",
          description:
            "Minimal retouching to maintain the raw, optical effects.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "Featured in three major design publications and set a new visual tone for the brand.",
    },
  },
  {
    id: "bubble",
    index: "004",
    title: "BUBBLE INTRO",
    category: "Motion Design",
    year: "2023",
    heroImage: IMG_BUBBLE,
    gridImage: IMG_BUBBLE,
    images: [IMG_EXTRA_3, IMG_REFLECTIONS],
    description:
      "A playful, physics-based motion language for a fintech startup.",
    process: {
      title: "PROCESS",
      description: "Making finance feel friendly and soft.",
      steps: [
        {
          title: "Motion Study",
          description:
            "Experimenting with soft-body physics and fluid dynamics.",
        },
        {
          title: "Implementation",
          description:
            "Translating After Effects prototypes into Lottie files for web.",
        },
        {
          title: "System",
          description: "Creating a motion guideline for the internal team.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "Increased engagement on the landing page by 25% due to interactive elements.",
    },
  },
  {
    id: "react",
    index: "005",
    title: "REACT",
    category: "Development",
    year: "2024",
    heroImage: IMG_REACT,
    gridImage: IMG_REACT,
    images: [IMG_EXTRA_2, IMG_BUBBLE],
    description:
      "A high-performance headless commerce build for a global retailer.",
    process: {
      title: "PROCESS",
      description: "Speed, scale, and stability.",
      steps: [
        {
          title: "Architecture",
          description:
            "Designing a microservices architecture using Next.js and Shopify Plus.",
        },
        {
          title: "Development",
          description:
            "Building reusable component libraries for rapid page assembly.",
        },
        {
          title: "Optimization",
          description:
            "Achieving perfect Lighthouse scores through aggressive caching and code splitting.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "Page load times reduced by 60%, leading to a significant boost in conversion rates.",
    },
  },
  {
    id: "buy-hej",
    index: "006",
    title: "BUY HEJ",
    category: "Ecommerce",
    year: "2023",
    heroImage: IMG_BUY_HEJ,
    gridImage: IMG_BUY_HEJ,
    images: [IMG_EXTRA_3, IMG_REACT],
    description: "Direct-to-consumer furniture brand launch.",
    process: {
      title: "PROCESS",
      description: "Scandinavian simplicity meets digital commerce.",
      steps: [
        {
          title: "UX Design",
          description:
            "Simplifying the purchase flow for customizable furniture.",
        },
        {
          title: "Visual Design",
          description: "Letting the product photography take center stage.",
        },
        {
          title: "Launch",
          description:
            "Coordinating a multi-channel launch across social and search.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description: "Sold out of initial inventory within 48 hours of launch.",
    },
  },
];
