import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";
import speaker from "./assets/speakers/Celia.jpeg";
import speaker1 from "./assets/speakers/Dr. Fariah Mahzabeen.jpg";
import speaker2 from "./assets/speakers/Dr. Mahmud Abdul Matin Bhuiyan.jpeg";
import speaker3 from "./assets/speakers/Md Touhidur Rahman Rad.png"
import speaker4 from "./assets/speakers/Md Shofiul Alam.png"
import speaker5 from "./assets/speakers/Shafqat Asif.png"
import speaker6 from "./assets/speakers/Zuberul.jpeg"
import speaker7 from "./assets/speakers/Yeaminul Islam.jpg"
import speaker8 from "./assets/speakers/Dr. Md Khan Sobayel Bin Rahiq.jpeg"
import speaker9 from "./assets/speakers/speaker9.jpeg"
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
    {
      name: "Dr. Celia Shahnaz",
      image: speaker,
      description: `Dr. Celia Shahnaz is a distinguished leader in the global IEEE community. She currently serves as Chair of the IEEE WIE Nominations and Appointments Committee for 2025–26. She was Chair of the IEEE WIE Committee during 2023–24, making impactful contributions to empower women in engineering. Dr. Shahnaz also leads as Chair of the IEEE Computer Society Awards Committee for 2024–25. She has been recognized as an IEEE Computer Society Distinguished Visitor for 2025–27. Her leadership roles reflect a long-standing dedication to advancing technology and professional development worldwide. She has guided and mentored countless professionals through her active involvement in IEEE. As Advisor of IEEE Young Professionals Bangladesh, she continues to inspire the next generation of engineers. Her vision emphasizes inclusion, innovation, and excellence in engineering and technology. Dr. Shahnaz is admired globally for her commitment, leadership, and contributions to the IEEE community.`
    },
    {
      name: "Dr. Fariah Mahzabeen",
      image: speaker1,
      description: `Dr. Fariah Mahzabeen is a respected academic and researcher in the field of engineering and technology. She is currently serving as an Assistant Professor at North South University. Her academic contributions span teaching, research, and mentoring future professionals. Dr. Mahzabeen has been actively involved in research projects addressing real-world challenges. Her work reflects a balance of theoretical knowledge and practical applications. She has published and contributed to advancing academic knowledge in her field. Through her teaching, she inspires students to pursue excellence in engineering. She has been engaged in initiatives that bridge academia and industry collaboration. Her dedication extends to nurturing innovation and research-driven learning. Dr. Mahzabeen is widely recognized for her commitment to education, research, and professional growth.`
    },
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
      name:"Mohammad Zuberul Islam",
      image:speaker6,
      description:`Mohammad Zuberul Islam is a Team Leader, Principal Engineer & Device-to-Device Connectivity expert in Samsung R&D Institute Bangladesh Ltd.

An 18-year veteran of the tech industry, Mohammad Zuberul Islam leads a strong team of 120 engineers delivering cutting-edge Innovative Solutions. A specialist in protocol implementation with multiple patents in the Connectivity domain, he excels at bridging the gap between complex connectivity and seamless user experiences.
`
    },
    {
      name:"Yeaminul Islam",
      image:speaker7,
      description:`Yeaminul Islam is an accomplished Engineering Manager and Senior Solution Architect at Banglalink, with over a decade of experience in designing and leading large-scale digital platforms within the telecom industry. He has played a pivotal role in driving AI-led transformation, building robust, carrier-grade systems that support millions of users.
His expertise spans telecom charging and billing systems, CRM, VAS platforms, API middleware, enterprise integration, and high-performance microservices architectures. Yeaminul has also worked extensively with AI and machine learning technologies, including deep neural networks and classical ML algorithms, applying them to classification, regression and generative automation use cases.
A graduate of Khulna University of Engineering & Technology (KUET), he is highly regarded for his strength in solution design, product lifecycle management and leading high-performance engineering teams. His work focuses on building scalable, low-latency systems that translate complex business requirements into impactful technological solutions.`
    },
    {
      name:"Dr. Md Khan Sobayel Bin Rafiq",
      image:speaker8,
      description:`Dr. Md. Khan Sobayel Bin Rafiq is a seasoned professional with over 20 years of combined experience spanning corporate leadership, academia, research, and military service. Currently serving as the Deputy General Manager at Nasir Group of Industries, he plays a pivotal role in advancing Bangladesh’s EV automobile industry and its associated components, contributing significantly to sustainable and green mobility initiatives.
Dr. Rafiq has demonstrated excellence in research, particularly in solar photovoltaics, while also securing major research grants and overseeing large-scale academic and industrial projects. His expertise lies in leading complex investigations, managing multidisciplinary teams, and implementing efficient administrative and operational systems.
With a unique ability to balance high-level strategic planning and hands-on research and operations, Dr. Rafiq brings a disciplined, innovative, and results-driven approach to every endeavor. His professional journey reflects a strong commitment to innovation, sustainability, and impactful leadership, making him a distinguished voice in industry–academia collaboration and future-focused engineering development.`
    },
    {
      name:"Dr. Ariful Haque",
      image:speaker9,
      description:`Bio: Dr. Ariful Haque is an Assistant Professor of Electrical Engineering in the Ingram School of Engineering at Texas State University and a core faculty member in the Materials Science, Engineering & Commercialization (MSEC) Ph.D. program. Before joining Texas State, he garnered valuable industry experience at Intel Corporation in the Logic Technology Development (LTD) division, where he supported the development of next-generation semiconductor process technologies. Dr. Haque earned dual Ph.D. degrees in Electrical Engineering and in Materials Science & Engineering from North Carolina State University (NCSU). He also obtained a Master of Nanoengineering (specializing in nanoelectronics and nanophotonics) from NCSU, an M.S. in Materials Science from Missouri State University, and a B.Sc. in Electrical & Electronic Engineering from Bangladesh University of Engineering & Technology (BUET). Dr. Ariful Haque has secured and led multiple high-impact federal research grants that position his work at the forefront of ultrawide bandgap (UWBG) semiconductor innovation. Most notably, he is co-leading the NSF CREST Center for UWBG Semiconductor Device Materials. In addition, he serves as the principal investigator on several other Department of Defense (Army Research Office and Office of Naval Research) and NSF-funded projects in UWBG semiconductor field. He also leads several university-sponsored internal projects. Dr. Haque has authored over 60 peer-reviewed journal articles, including high-impact works in IEEE Transactions, alongside six conference proceedings and several book chapters. He also maintains a strong professional service portfolio, serving as an Associate Editor for the IEEE Electron Device Magazine and Frontiers in Carbon journal, a member of the IEEE Electronic Materials Technical Committee, an Advisory Board Member for Microelectronics-US 2026 in Austin, and an Organizing Committee member for the Electronic Materials Conference. He directs an active and growing research team that includes 2 postdoctoral researchers, 5 Ph.D. students, and 7 M.S. students.

Website: https://faculty.txst.edu/profile/2325757  
and https://ahaque.wp.txstate.edu/dr-ariful-haque/ 
`
    },
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
                        <h3 className="text-2xl md:text-3xl font-bold text-ieee-darkblue mb-2 uppercase">
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