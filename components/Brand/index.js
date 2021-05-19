import Courses from "../Courses";

const Brand = (props) => {
  const {name, blurb, courses} = props.brand;

  return (
    <div style={{width: "95%", margin: "0 auto", maxWidth: "1400px"}}>
      <h1>{name}</h1>
      {blurb.map((para, index) => <p key={index}>{para}</p>)}
      <Courses courses={courses} />
    </div>
  )
}

export default Brand

// CND: {
//   name: "CND",
//   blurb: `Through the courses and workshops of its Creative Academy, to its respected master technician programs, CND™ has advanced the state of the industry through education. Over the years, CND™, has earned a reputation as the most user-friendly, knowledgeable, and well-equipped educational resource in the industry.\n\nNail Professionals worldwide advocate that CND™, has increased their knowledge of products and procedures, enhancing their credibility with customers, and helping them to build stronger businesses. Among the hundreds of thousands of Nail Professionals who have benefited from CND™ educational programs, today more than 10,000 are certified Masters in either Liquid & Powder Enhancements, Gel Enhancements, or Natural Nail Care.`,
//   courses: [
//     {
//       title: "CND™ Brisa Gel Beginners",
//       brief:
//         "The CND™ Gel Beginners course will enable you to create thin, light natural looking enhancements using CND’s Brisa Gel. The pre-class home study is added to enhance your learning and increase your hands-on time in class.",
//       price: "£725.00 + VAT / €870.00",
//       details: "https://my.sweetsquared.com/education/course/85",
//     },
//     {
//       title: "CND™ Shellac™ Beginners",
//       brief:
//         "During this 2 day course, you will discover and learn the complete CND™ Shellac™ system and be well equipped with tips and tricks to provide the world's most wanted manicure to your future clients. Pre-class home study is added to enhance your learning and increase your hands-on time in class.",
//       price: "£435.00 + VAT / €522",
//       details: "https://my.sweetsquared.com/education/course/84",
//     },
//     {
//       title: "CND™ Shellac™ Conversion",
//       brief:
//         "CND™ Shellac™ Conversion class is designed for existing nail professionals to discover and learn the complete CND™ Shellac™ system from application to removal.  This class is product focused on ensuring the correct use of the CND™ Shellac™ systems.",
//       price: "£95.00 + VAT /€114.00",
//       details: "https://my.sweetsquared.com/education/course/87",
//     },
//   ],
// },