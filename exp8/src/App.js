import React from "react";
const applicants = [
  {
    name: "Joe",
    work: "freelance-developer",
    blogs: "54",
    websites: "32",
    hackathons: "6",
    location: "morocco",
    id: "0",
  },
  {
    name: "janet",
    work: "fullstack-developer",
    blogs: "34",
    websites: "12",
    hackathons: "8",
    location: "Mozambique",
    id: "1",
  },
];
function App() {
  return (
    <>
      {applicants.map(function (data) {
        return <div>Applicant name: {data.name}</div>;
      })}
    </>
  );
}
export default App;
