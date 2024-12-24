export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Experience working in the Software, AI, and Space Industry",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I have worked in companies across Canada",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to learn new skills",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Do you want to work on a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 5,
      title: "Currently looking for full-time Software Engineering opportunities for 2025",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center md:w-96",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Crypto Tracker",
      des: "A crypto price and news tracking application created using React and Redux",
      img: "/krypto_thumbnail.PNG",
      iconLists: ["/react.svg", "/redux.svg", "/tail.svg"],
      link: "https://kryptoverse.vercel.app/",
      git: "https://github.com/s-sameer/krypto"
    },
    {
      id: 2,
      title: "WebCommerce",
      des: "An e-commerce application with payment functionality built using React, Sanity and Stripe",
      img: "/ecom_thumb.PNG",
      iconLists: ["/react.svg", "/ts.svg", "/stripe.svg"],
      link: "https://ecom-app-1.vercel.app/",
      git: "https://github.com/s-sameer/ecom-app-1"
    },
    {
      id: 3,
      title: "Portfolio",
      des: "A personal portfolio website created using Next.js, TypeScript, and Tailwind CSS",
      img: "/portfolio-3.PNG",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://ssameer.dev/",
      git: "https://github.com/s-sameer/react-portfolio-v3"
    },
    {
      id: 4,
      title: "Keeper",
      des: "A full stack note taking application built using React, Node.js, and Firebase",
      img: "/keeper.PNG",
      iconLists: ["/react.svg", "/node.svg", "/firebase.svg"],
      link: "https://velvety-duckanoo-8dc08a.netlify.app/",
      git: "https://github.com/s-sameer/keeper-app"
    },
  ];

  const todo = [
    {
      id: 1,
      title: "Link Click",
      desc: "A social media application for sharing images and videos, developed using React, Node.js, Express and MongoDB.",
      img: "",
      iconLists: [],
      link: "",
      git: ""
    },
    {
      id: 3,
      title: "Lyriks",
      des: "A music streaming and charts application developed using React and Tailwind CSS",
      img: "/lyriks_thumbnail.PNG",
      iconLists: ["/react.svg", "redux.svg", "ts.svg", "/tail.svg"],
      link: "https://lyriks-phi.vercel.app/",
      git: "https://github.com/s-sameer/lyriks"
    },
  ]
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineering Student",
      company: "Nasdaq",
      desc: "Developed a serverless expiry notification system to alert users of expiring queries using AWS Lambda, SES, and DynamoDB",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "AI/Software Engineering Co-op",
      company: "Mission Control Space Services",
      desc: "Contributed to the development of a deep learning model for real-time fire event detection using Python and Pytorch",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: "Full Stack Developer (Co-op)",
      company: "SiftMed",
      desc: "Implemented new features, developed robust APIs, and optimized application performance using React, Python, and AWS",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 4,
      title: "Software Engineering Co-op",
      company: "Memorial University",
      desc: "Developed a data visualization application to extract insights from satellite data using React, Tailwind, and Rust",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 5,
      title: "Software Developer Co-op",
      company: "C-CORE",
      desc: "Created several responsive landing pages for the company’s product line, using HTML, CSS, and JavaScript",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/s-sameer"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/-sameer/"
    },
  ];