// const borrowedBooks = [
//   {
//     book: "Invisible Man",
//     borrower: "oliver_smith",
//     date: "10-May-2021",
//   },
//   {
//     book: "The Boy Who Harnessed the Wind",
//     borrower: "anna_smith",
//     date: "16-March-2021",
//   },
//   {
//     book: "The Book Thief",
//     borrower: "sam_smith",
//     date: "21-April-2020",
//   },
// ];
// const userName = "anna_smith";

// Test Case 2 

const borrowedBooks = [
    {
      book: "Invisible Man",
      borrower: "oliver_smith",
      date: "10-May-2021",
    },
    {
      book: "The Boy Who Harnessed the Wind",
      borrower: "anna_smith",
      date: "16-March-2021",
    },
    {
      book: "The Book Thief",
      borrower: "sam_smith",
      date: "21-April-2020",
    }
  ];
const userName = "sam";

const bookBorrowed = borrowedBooks.find(
  ({ borrower }) => borrower === userName
);

if (bookBorrowed) {
  console.log(`${userName} borrowed ${bookBorrowed.book} on ${bookBorrowed.date}`);
} else {
  console.log("No books borrowed");
}
