import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";
import speaker from "./assets/speakers/speaker1.png";
import speaker2 from "./assets/speakers/Dr. Mahmud Abdul Matin Bhuiyan.jpeg";
import speaker3 from "./assets/speakers/Md Touhidur Rahman Rad.png"
import speaker4 from "./assets/speakers/Md Shofiul Alam.png"
import speaker5 from "./assets/speakers/Shafqat Asif.png"
import speaker6 from "./assets/speakers/Zuberul.jpeg"
import { image } from "framer-motion/client";
const Speakers = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Speakers | SPAC 2025";

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const speakersData = [
//     {
//       name: "Celia",
//       title: "Associate Professor",
//       image: speaker,
//       description: `Dr. Nabeel Mohammad is a distinguished academic and researcher with a Bachelor's degree in Computer Science from Monash University, Australia. He began his career as a Software Developer at Editure Ltd., before transitioning into academia to pursue his PhD at Monash University. His doctoral research focused on unsupervised image feature extraction and its applications in content-based image retrieval.
//       Dr. Nabeel's current research interests span Computer Vision and Natural Language Processing, with additional expertise in Artificial Intelligence, Robotics, and Signal & Image Processing. He is deeply passionate about industry–academia collaboration and has successfully partnered with organizations such as Apurba Technologies, HeadBlocks, Giga Tech Ltd., and others.
// He also leads the Apurba–NSU R&D Lab, which has made significant contributions to AI projects in collaboration with Apurba Technologies—further demonstrating his commitment to bridging the gap between academic research and real-world applications.`
//     },
    {
      name: "Dr. Mahmud Abdul Matin Bhuiyan",
      image: speaker2,
      description: `Dr. Mahmud Abdul Matin Bhuiyan is a distinguished academic, researcher, and institutional leader, currently serving as the Vice-Chancellor of Chittagong University of Engineering & Technology (CUET) and Professor in the Department of Electrical & Electronic Engineering (EEE). Over his academic career, he has held several key leadership positions at CUET, including Head of the Department of EEE, Dean of the Faculty of Electrical & Computer Engineering (ECE), and Director of the Institute`
    },
    {
      name:"MD TOUHIDUR RAHMAN RAD",
      image: speaker3,
      description: `Md Touhidur Rahman Rad is one of the Youngest Chief Business Officer in Bangladesh, representing a new generation of purpose-driven and innovation-led corporate leadership. He completed both his BSc in IPE and MBA in Finance from Ahsanullah University of Science & Technology (AUST), building a strong academic foundation that combines engineering rigor with strategic business insight.
He is associated with Walton Group for more than 8 years, before that he has worked at MGI. Walton, Bangladesh’s leading technology and manufacturing conglomerate, where he contributes as Senior Executive Director & CBO, leading strategic business growth, product innovation, manufacturing excellence, supply chain ecosystem & sales development. He along with his team has developed locally manufactured laptops, Bangladesh’s first BRTA-approved locally made electric bike, as well as solar energy solutions and IoT-based smart products, supporting national goals of localization, sustainability, and technological self-reliance.
Beyond corporate leadership, Touhid currently serves as an Industry Advisory Member of the Industrial & Production Engineering (IPE) Department at the Military Institute of Science & Technology (MIST), actively contributing to industry–academia collaboration, curriculum relevance, and future workforce development. He is also one of the Fellow of Youth Policy Forum for economical upgradation & Honorary Director of  Nohor Foundation. 
He's been awarded as the Most innovative CBO of Bangladesh 2025 from Global Brands UK. His vision is to position Bangladesh as a global manufacturing and technology hub of Computer, EV & IoT products.`
    },
    {
      name:"Md Shofiul Alam",
      image:speaker4,
      description:`Md Shofiul Alam is a National AI Strategist and tech entrepreneur with over 18 years of experience in enterprise AI adoption, digital transformation, and GovTech strategy. He has played a key role in shaping Bangladesh’s National AI Strategy, with a strong focus on scalable, ethical, and enterprise ready AI solutions.
His expertise spans enterprise AI integration, cognitive AI systems, AI governance and ethics, data driven decision making, and large scale digital transformation across both government and private sectors. As Managing Director of HyperTAG Solutions Ltd. and Founder of Desh AI, he has led the design and deployment of AI enabled platforms for real world enterprise and public-sector use cases.
Md Shofiul brings hands-on experience in startup to enterprise scaling, AI-powered fintech solutions, workforce upskilling for AI readiness, and policy aligned AI implementation. He is a Member of AAAI and a regular contributor on AI ethics, human centered design, and algorithmic impact, offering a balanced perspective on both the technical and strategic challenges of AI in enterprise environments.`
    },
    {
      name:"Shafqat Asif",
      image:speaker5,
      description:`Mr. Asif is a highly accomplished technology leader and entrepreneur, currently contributing to the strategic growth and engineering excellence of Vivasoft Limited. His work focuses on building scalable software solutions, leading high-performing engineering teams, and delivering impactful products for global clients.

With extensive professional experience in senior leadership roles, Mr. Asif has served at Pathao in key positions including Vice President of Engineering, Director of Engineering, and Head of Platform Services & Data Engineering. He also gained valuable experience at Widespace in multiple leadership and architectural roles. He holds an academic background in Computer Science from North South University and brings strong expertise in software architecture, agile practices, and engineering leadership.

Mr. Asif’s industry exposure and leadership experience make this seminar a valuable opportunity for participants to gain real-world insights into technology careers, industry expectations, and sustainable professional growth in the global technology industry.

`
    },
    {
      name:"Zuberul",
      image:speaker6,
      description:`Zuberul is a Team Leader, Principal Engineer & Device-to-Device Connectivity expert in Samsung R&D Institute Bangladesh Ltd.

An 18-year veteran of the tech industry, Zuberul leads a strong team of 120 engineers delivering cutting-edge Innovative Solutions. A specialist in protocol implementation with multiple patents in the Connectivity domain, he excels at bridging the gap between complex connectivity and seamless user experiences.
`
    }
  ];

  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen grid-bg">
      <SectionHeadingBG
        title="SPAC 2025 Speakers"
        subtitle="Meet Our Distinguished Speakers"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="space-y-10 md:space-y-12">
            {speakersData.map((speaker, index) => (
              <div
                key={index}
                className="scroll-animate bg-white rounded-[6px] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ease-in-out"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="md:w-[400px] object-cover"
                    />

                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-ieee-darkblue mb-2">
                          {speaker.name}
                        </h3>
                        <p className="text-lg font-semibold text-ieee-cyan mb-1">
                          {speaker.title}
                        </p>
                      </div>
                    </div>


                    <p className="text-gray-700 text-base leading-relaxed text-justify whitespace-pre-line">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
            {/* <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-ieee-darkblue mb-4">
                Speakers will be updated soon
              </h2>
              <p className="text-gray-600">
                Stay tuned for the official SPAC 2025 speakers.
              </p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Speakers;