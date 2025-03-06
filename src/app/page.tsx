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
            <div>
              <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-48 h-48 overflow-hidden">
                  <Image
                    src="/images/hi.png"
                    alt="Profile photo"
                    width={500}
                    height={500}
                    className="rounded-none"
                    priority
                  />
                </div>
                <div>
                  <h4 className="text-2xl">
                    G’day, I’m Dhaval Darji
                    <br />
                    Full Stack Web Developer
                    <br />
                    And Trekker / Hiker / Traveler / Foodie.
                  </h4>
                </div>
              </div>
              <div>
                <p>
                  Engineer by profession, problem-solver by passion, explorer by
                  heart.
                </p>
                <p>
                  Experienced full-stack developer who enjoys building robust
                  backends, leading teams, and delivering high-quality
                  applications.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="h-screen flex items-center snap-start">
            <div className="p-8 space-y-8">
              <h4 className="text-xl mb-6">Experience</h4>

              {/* Role 1 */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold">
                    Full Stack Development Consultant (Freelance)
                  </h5>
                  <p className="text-gray-600">Qualitésoft</p>
                  <p className="text-sm text-gray-500">May 2023 - Present</p>
                </div>
                <p>
                  Built and optimized end-to-end systems, integrating batch NDA
                  processing, rewards distribution, VIP guest management, and
                  third-party recruiter onboarding with secure payment flows.
                </p>

                <div>
                  <p className="text-sm font-medium mb-2">Skills Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      LoopBack
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Ionic
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Angular
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      AWS S3
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      AWS CloudWatch
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Mandrill
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Tango Rewards Integration
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      HMAC Verification
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Batch File Processing
                    </span>
                  </div>
                </div>
              </div>

              {/* Role 2 */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold">
                    Sr. Full Stack Developer
                  </h5>
                  <p className="text-gray-600">
                    Algoscale Technologies PVT LTD
                  </p>
                  <p className="text-sm text-gray-500">
                    1 Year 6 months, March 2023 — August 2024
                  </p>
                </div>

                <p>
                  Designed and deployed end-to-end full-stack solutions across
                  5+ projects in course management, insurance, and
                  infrastructure domains, leveraging Node.js, React, Strapi, and
                  AWS/Azure to build scalable applications while optimizing
                  APIs, automating workflows, and enhancing search and analytics
                  with Redis and Elasticsearch.
                </p>

                <div>
                  <p className="text-sm font-medium mb-2">Skills Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Strapi
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      React
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      MySQL
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      PostgreSQL
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Redis
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Elasticsearch
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      AWS (S3, API Gateway, EC2, RDS)
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Azure
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      CI/CD Pipelines
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      CronJob Scheduling
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      API Optimization
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Large Dataset Import/Export (Excel/CSV)
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      RESTful APIs
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Redis Caching
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Elasticsearch
                    </span>
                  </div>
                </div>
              </div>

              {/* Role 3 */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold">
                    Sr. Full Stack Developer
                  </h5>
                  <p className="text-gray-600">iGenerate Technology PVT LTD</p>
                  <p className="text-sm text-gray-500">
                    2 Years 1 month, February 2021 — February 2023
                  </p>
                </div>

                <p>
                  Designed and deployed scalable full-stack solutions,
                  integrating AWS services, optimizing data pipelines, mentoring
                  freshers, and leading cross-functional teams across multiple
                  mid-level applications.
                </p>

                <div>
                  <p className="text-sm font-medium mb-2">Skills Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      GraphQL
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      React.js
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Webpack
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      PostgreSQL
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      MongoDB
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      AWS (Amplify, Lambda Functions, AppSync, S3, RDS,
                      DynamoDB, VPCs, Security Groups)
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Twilio
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Salesforce
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      TicketMaster
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Google (Login, Translate, Maps)
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      SkyBox/Vivid Seats
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Stripe Payment
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      PostgreSQL Functions
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Process Queue Management
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Leadership
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Training
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Client Communication
                    </span>
                  </div>
                </div>
              </div>

              {/* Role 4 */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold">Full Stack Trainee</h5>
                  <p className="text-gray-600">MicroGO LLP</p>
                  <p className="text-sm text-gray-500">
                    3 Months, September 2020 — December 2020
                  </p>
                </div>

                <p>
                  Planned and developed 3 operational dashboards from scratch,
                  leading a 5-member team while designing databases,
                  implementing CI/CD pipelines, and building 24+ IoT-driven
                  APIs.
                </p>

                <div>
                  <p className="text-sm font-medium mb-2">Skills Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      AngularJS
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      SQL Server (Stored Procedures)
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Azure Services
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Azure DevOps
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Azure App Services
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      RESTful APIs for IoT data handling
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      CI/CD Pipeline Setup
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Team Leadership
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                      Requirement Gathering
                    </span>
                  </div>
                </div>
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
