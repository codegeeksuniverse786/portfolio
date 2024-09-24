const timeLine = [
  {
    year: '2021',
    exp: `Started working as a junior web developer, focusing on
        HTML, CSS, and JavaScript.`,
  },
  {
    year: '2022',
    exp: `Advanced to front-end development with a focus on
              frameworks like React.js.`,
  },
  {
    year: '2023',
    exp: `Became proficient in full-stack development with MERN
              stack.`,
  },
  {
    year: '2024',
    exp: `Lead development projects and started creating custom web
              applications.`,
  },
];

function WorkExperience() {
  return (
    <section
      id="experience"
      className="container px-4 mx-auto my-8  md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl font-semibold text-center md:my-20 ">
        Experience
      </h1>

      {/* Timeline Wrapper */}
      <div className="relative grid grid-cols-2 gap-4 mb-8 justify-items-center md:grid-cols-4">
        {/* Year Circles */}
        {timeLine.map((cv, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 "
          >
            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 mb-2 text-white bg-[#746FD1] rounded-full">
              {cv.year}
            </div>
            <div className="text-sm text-center text-gray-400 md:text-lg">
              <p>{cv.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
