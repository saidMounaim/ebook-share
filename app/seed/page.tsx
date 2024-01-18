import prisma from "../../lib/prisma";

const placeholderBooks = [
  {
    title: "Clean Code",
    slug: "clean-code",
    description:
      "A guide by Robert C. Martin on writing clean, maintainable, and efficient code.",
    image: "https://i.ibb.co/r5xYCsy/51-E2055-ZGUL-AC-UF1000-1000-QL80.jpg",
    author: "Robert C. Martin",
    pdfFile: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    title: "Atomic Habits",
    slug: "atomic-habits",
    description:
      "James Clear explores the power of tiny changes, or atomic habits, in achieving remarkable results in personal and professional life.",
    image: "https://i.ibb.co/hVtBM3v/Atomic-habits.jpg",
    author: "James Clear",
    pdfFile: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    slug: "sapiens",
    description:
      "Yuval Noah Harari examines the history and impact of Homo sapiens, from ancient times to the present.",
    image: "https://i.ibb.co/T8rZ6fm/713j-Io-MO3-UL-AC-UF1000-1000-QL80.jpg",
    author: "Yuval Noah Harari",
    pdfFile: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    title: "The Lean Startup",
    slug: "lean-startup",
    description:
      "Eric Ries introduces a methodology for developing businesses and products by emphasizing iterative learning and adaptability.",
    image: "https://i.ibb.co/Qnpz2Wg/81vvg-Zq-Csk-L-AC-UF1000-1000-QL80.jpg",
    author: "Eric Ries",
    pdfFile: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    title: "Data Science for Business",
    slug: "data-science-for-business",
    description:
      "Foster Provost and Tom Fawcett provide insights into the use of data science in making business decisions.",
    image: "https://i.ibb.co/bNfQJ47/81tyu-OUHPNL-AC-UF1000-1000-QL80.jpg",
    author: "Foster Provost, Tom Fawcett",
    pdfFile: "https://www.africau.edu/images/default/sample.pdf",
  },
];

export default function SeedDatabase() {
  async function postData() {
    "use server";
    // await prisma.book.createMany({
    //   data: placeholderBooks,
    // });
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
