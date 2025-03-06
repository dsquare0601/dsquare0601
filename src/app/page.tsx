import Image from "next/image";

export default function Home() {
  return (
    <div className="px-25">
      <main className="flex min-h-screen">
        <div className="w-1/4 flex items-center">
          <ul className="flex flex-col space-y-2">
            <li>About Me</li>
            <li>Experience</li>
            <li>Work/Projects</li>
            <li>Skills</li>
            <li>Contact Me</li>
            <li>Thoughts</li>
          </ul>
        </div>
        {/* Content */}
        <div className="flex-1 h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
          {/* About Me */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8">
              <h4 className="text-xl">About Me</h4>
              <p>
                I am a software engineer with a passion for building web
                applications. I have experience with React, Node.js, and
                TypeScript. I am always looking to learn new technologies and
                improve my skills.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8">
              <h4 className="text-xl">Experience</h4>
              <div>
                <h5>Software Engineer</h5>
                <p>Company Name</p>
                <p>2020 - Present</p>
                <ul>
                  <li>Developed web applications using React and Node.js</li>
                  <li>Worked on a team to build a new feature</li>
                  <li>Collaborated with other engineers to solve problems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work/Projects */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8">
              <h4 className="text-xl">Work/Projects</h4>
              <div>
                <h5>Project Name</h5>
                <p>2021</p>
                <p>
                  A web application that allows users to create and share
                  playlists
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8">
              <h4 className="text-xl">Skills</h4>
              <div>
                <h5>Frontend</h5>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h5>Backend</h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Me */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8">
              <h4 className="text-xl">Contact Me</h4>
              <p>Email:</p>
              <p>Phone:</p>
            </div>
          </div>

          {/* Thoughts */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8">
              <h4 className="text-xl">Thoughts</h4>
              <div>
                <h5>Blog Post Title</h5>
                <p>2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada, nunc nec fermentum luctus, libero ligula lacinia
                  libero, nec tincidunt justo nulla non velit. Ut euismod, eros
                  eget ultricies ultricies, nunc nisi gravida mi, nec ultrices
                  purus turpis sit amet nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
