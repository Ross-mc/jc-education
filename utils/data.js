const titleCard = {
  name: "Jacki Clarke",
  role: "CND Education Ambassador",
  image: "/images/jacki-clarke.jpg",
  links: [
    {
      company: "Sweet Squared",
      href: "https://www.sweetsquared.com/",
    },
  ],
  tagline:
    "Specialist in Beauty Education for brands including CND, Lecentè, wax:one, Light Elegance, LashUS and more",
};

const blurb =
  "Jacki started in the beauty industry by completing Beauty Therapy Levels 2&3 at college aged 21 before working in a salon for 10 years where she was introduced to CND. Completing her Brisa Gel Beginners in 2015 created a passion for nails and a thirst for the knowledge starting a journey to achieving her CND Grand Master qualification in 2018. Jacki also loves the ever growing lash sector of the industry and now passes on her knowledge and skills as part of the LASHUS Education Team.";

const brands = {
  cnd: {
    name: "CND",
    blurb: [
      "Through the courses and workshops of its Creative Academy, to its respected master technician programs, CND™ has advanced the state of the industry through education. Over the years, CND™, has earned a reputation as the most user-friendly, knowledgeable, and well-equipped educational resource in the industry.",
      "Nail Professionals worldwide advocate that CND™, has increased their knowledge of products and procedures, enhancing their credibility with customers, and helping them to build stronger businesses. Among the hundreds of thousands of Nail Professionals who have benefited from CND™ educational programs, today more than 10,000 are certified Masters in either Liquid & Powder Enhancements, Gel Enhancements, or Natural Nail Care.",
    ],
    courses: [
      {
        title: "CND™ Brisa Gel Beginners",
        brief:
          "The CND™ Gel Beginners course will enable you to create thin, light natural looking enhancements using CND’s Brisa Gel. The pre-class home study is added to enhance your learning and increase your hands-on time in class.",
        price: "£725.00 + VAT / €870.00",
        details: "https://my.sweetsquared.com/education/course/85",
      },
      {
        title: "CND™ Shellac™ Beginners",
        brief:
          "During this 2 day course, you will discover and learn the complete CND™ Shellac™ system and be well equipped with tips and tricks to provide the world's most wanted manicure to your future clients. Pre-class home study is added to enhance your learning and increase your hands-on time in class.",
        price: "£435.00 + VAT / €522",
        details: "https://my.sweetsquared.com/education/course/84",
      },
      {
        title: "CND™ Shellac™ Conversion",
        brief:
          "CND™ Shellac™ Conversion class is designed for existing nail professionals to discover and learn the complete CND™ Shellac™ system from application to removal.  This class is product focused on ensuring the correct use of the CND™ Shellac™ systems.",
        price: "£95.00 + VAT /€114.00",
        details: "https://my.sweetsquared.com/education/course/87",
      },
      {
        title: "CND Liquid & Powder Beginners",
        brief:
          "Over the duration of your 6-day course, we will be discussing and learning how to create beautiful, natural looking nail enhancements using Retention+™ Liquid and Powder in order to protect, strengthen and lengthen your future client's nails.",
        price: "£625.00 + VAT / €750.00",
        details: "https://my.sweetsquared.com/education/course/86",
      },
      {
        title: "CND Pedicure Beginners",
        brief:
          "During this class, you will be provided with understanding and techniques to increase your pedicure service options with CND™ Spa. You will be able to upgrade your pedicure services with exfoliation and unique massage techniques. CND's 4 step system will allow you to customise services with a choice of fragrance and add-ons for personalised results.",
        price: "£295.00+vat / €354.00",
        details: "https://my.sweetsquared.com/education/course/152",
      },
    ],
    image: "/images/cnd-shellac.jpg"
  },
  lashus: {
    name: "LASHUS",
    blurb: [
      "LASHUS is the premium lash lifting and extension brand that is making waves in the industry.",
      "The brand was developed, crafted and delivered to the market by a team with a combination of 50 years experience in the professional lash treatment industry. By collaborating with best-in-class chemists, laboratories, raw ingredient suppliers and educators, we have developed products and techniques that rewrite the rule book and exceed expectations.",
    ],
    courses: [
      {
        title: "LASH GRAD",
        brief:
          "Become a LASH GRAD in just one day, suitable for beginners and conversion, learn techniques for applying single lashes and pre-made fans to create classic and hybrid looks.",
        price: "£350+vat / €420",
        details: "https://my.sweetsquared.com/education/course/361",
      },
      {
        title: "LashUS The Lift",
        brief:
          "With Lash Lifts becoming one of the fastest growing beauty treatments around , and clients looking everywhere for trained technicians isn’t it about time you learned to turn it up and become one of US.",
        price: "£295.00 + VAT / €354.00",
        details: "https://my.sweetsquared.com/education/course/260",
      },
      {
        title: "LashUS Master Volume",
        brief:
          "Become a LASHUS Extension Master in just 1 day. Learn advanced techniques and enhance your skill to Master level by creating stunning volume hand made fans!",
        price: "£299+vat / €358 ",
        details: "https://my.sweetsquared.com/education/course/390",
      },
    ],
    image: "/images/cnd-shellac.jpg"
  },
};

const courses = [
  {
    title: "Light Elegance Beginners Course",
    brief:
      "The Light Elegance Beginners course will provide you with the fundamental techniques that will assist you on your journey in creating perfect enhancement services. Learn the difference between all of the 6 different Lexy Line hard gels allowing you the nail professional the complete control and creativity to achieve the perfect nail every time.",
    price: "£545.00 + VAT / €654.00",
    details: "https://my.sweetsquared.com/education/course/394",
  },
  {
    title: "CND™ Brisa Gel Beginners",
    brief:
      "The CND™ Gel Beginners course will enable you to create thin, light natural looking enhancements using CND’s Brisa Gel. The pre-class home study is added to enhance your learning and increase your hands-on time in class.",
    price: "£725.00 + VAT / €870.00",
    details: "https://my.sweetsquared.com/education/course/85",
  },
  {
    title: "CND™ Shellac™ Beginners",
    brief:
      "During this 2 day course, you will discover and learn the complete CND™ Shellac™ system and be well equipped with tips and tricks to provide the world's most wanted manicure to your future clients. Pre-class home study is added to enhance your learning and increase your hands-on time in class.",
    price: "£435.00 + VAT / €522",
    details: "https://my.sweetsquared.com/education/course/84",
  },
  {
    title: "Light Elegance Beginners Course",
    brief:
      "The Light Elegance Beginners course will provide you with the fundamental techniques that will assist you on your journey in creating perfect enhancement services. Learn the difference between all of the 6 different Lexy Line hard gels allowing you the nail professional the complete control and creativity to achieve the perfect nail every time.",
    price: "£545.00 + VAT / €654.00",
    details: "https://my.sweetsquared.com/education/course/394",
  },
  {
    title: "CND™ Shellac™ Conversion",
    brief:
      "CND™ Shellac™ Conversion class is designed for existing nail professionals to discover and learn the complete CND™ Shellac™ system from application to removal.  This class is product focused on ensuring the correct use of the CND™ Shellac™ systems.",
    price: "£95.00 + VAT /€114.00",
    details: "https://my.sweetsquared.com/education/course/87",
  },
];

const bio = [
  "Jacki started in the beauty industry by completing Beauty Therapy Levels 2&3 at college aged 21 before working in a salon for 10 years where she was introduced to CND. Completing her Brisa Gel Beginners in 2015 created a passion for nails and a thirst for the knowledge starting a journey to achieving her CND Grand Master qualification in 2018. Jacki also loves the ever growing lash sector of the industry and now passes on her knowledge and skills as part of our LASHUS Education Team. Her desire for knowledge and love for the CND brand and products continues making her a great addition to the team.",
  "I have always had a passion for people and initially thought my place within the industry would be on a holistic treatment path. But after being sent to Creative Academy Manchester on a Brisa Gel Beginners course by my manager, I found a new love in the creation of stunning enhancements and a thirst for the knowledge. The encouragement and support I received throughout my training was overwhelming and inspiring .From there my love for CND grew and I continued on my journey to achieve my Brisa Gel Masters and then Grand Master status.",
  "I believe whole heartedly in the ethos of Sweet Squared of Love and Respect. I am incredibly proud to work with the brands that I love and trust - to guide others through their own journey, help ignite their passions and cheer-lead them in their own growth is a real blessing and privilege",
];

export default {
  titleCard,
  blurb,
  courses,
  bio,
  brands,
};
