const dummyData = {
  firstName: "Ethan",
  lastName: "Owens",
  jobTitle: "Full Stack Developer",
  address: "123 Innovation Street, Nairobi, Kenya",
  phone: "+254 712 345 678",
  email: "ethan.owens@example.com",
  themeColor: "#f97316",
  summary:
    "Experienced Full Stack Developer with a strong background in designing and building scalable web applications using the MERN stack. Passionate about clean code, modern UI/UX practices, and building impactful user experiences. Over 4 years of hands-on experience in both frontend and backend development.",

  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      companyName: "TechBridge Africa",
      city: "Nairobi",
      county: "Nairobi County",
      startDate: "Jan 2022",
      endDate: "",
      currentlyWorking: true,
      workSummary:
        "Lead development of enterprise web applications, managed a team of 5 junior developers, and integrated third-party APIs for payment and authentication services.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      companyName: "PixelWave Studios",
      city: "Mombasa",
      state: "Mombasa County",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      currentlyWorking: false,
      workSummary:
        "Worked on several UI-rich web projects using React, Tailwind CSS, and Framer Motion. Improved performance and accessibility across client applications.",
    },
  ],

  education: [
    {
      id: 1,
      universityName: "University of Nairobi",
      startDate: "2016-09-01",
      endDate: "2020-06-30",
      degree: "Bachelor of Science",
      major: "Computer Science",
      description:
        "Graduated with First Class Honors. Participated in research on scalable web architectures and cloud-based deployments.",
    },
    {
      id: 2,
      universityName: "Moi High School, Kabarak",
      startDate: "2012-01-01",
      endDate: "2015-12-01",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      major: "Science Stream",
      description:
        "Graduated with a strong emphasis on mathematics and computer studies.",
    },
  ],

  skills: [
    { id: 1, name: "JavaScript", rating: 90 },
    { id: 2, name: "React", rating: 85 },
    { id: 3, name: "Node.js", rating: 80 },
    { id: 4, name: "MongoDB", rating: 75 },
    { id: 5, name: "Tailwind CSS", rating: 88 },
    { id: 6, name: "Git & GitHub", rating: 92 },
  ],

  languages: [
    { id: 1, name: "English", fluency: "Fluent" },
    { id: 2, name: "Kiswahili", fluency: "Native" },
  ],

  certifications: [
    {
      id: 1,
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: 2023,
    },
    {
      id: 2,
      title: "Meta Front-End Developer Certificate",
      issuer: "Coursera",
      year: 2022,
    },
  ],

  socialProfiles: [
    { id: 1, platform: "GitHub", url: "https://github.com/ethanowens" },
    { id: 2, platform: "LinkedIn", url: "https://linkedin.com/in/ethanowens" },
    { id: 3, platform: "X", url: "https://x.com/ethan_codes" },
  ],

  referees: [
    {
      id: 1,
      name: "Grace Mutiso",
      company: "TechBridge Africa",
      position: "Engineering Manager",
      email: "grace.mutiso@techbridgeafrica.com",
      phone: "+254 711 234 567",
    },
    {
      id: 2,
      name: "Samuel Kariuki",
      company: "PixelWave Studios",
      position: "Creative Director",
      email: "samuel.k@pixelwave.co.ke",
      phone: "+254 733 456 789",
    },
    {
      id: 3,
      name: "Dr. Wanjiru Njoroge",
      company: "University of Nairobi",
      position: "Lecturer, Computer Science Dept.",
      email: "wanjiru.njoroge@uonbi.ac.ke",
      phone: "+254 700 123 321",
    },
  ],
};

export default dummyData;