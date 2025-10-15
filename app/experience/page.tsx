import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "@/components/ui/link-preview";

const page = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal">
            🎓 Graduated with a B.S. in Computing from the
            <LinkPreview url="https://www.westga.edu" className="font-bold">
              {" "}
              University of West Georgia.
            </LinkPreview>{" "}
          </div>
          <p className="mb-4 text-sm font-normal">
            👨🏽‍💻{" "}
            <span className="font-semibold">
              Software Engineering Intern at Bemelo Health
            </span>{" "}
            – Developed a cross-platform mental health app MVP using Flutter,
            Firebase, WebRTC, and OpenAI API. Built CI/CD pipeline with GitHub
            Actions, reducing release cycle time by 60%. Implemented
            HIPAA-compliant security measures including end-to-end encryption
            (TLS 1.3), OAuth 2.0, and multi-factor authentication.
          </p>
          <div className="mb-4 text-sm font-normal">
            🤖 <span className="font-semibold">Launched CareerSync</span> –
            Open-source AI-powered job tracker that auto-parses emails. Deployed
            custom fine-tuned SetFit classifier and T5 extractor models on
            Hugging Face achieving 95% accuracy. Handles 6,000+ emails per user
            at 2s average latency with analytics dashboard.
            <LinkPreview
              url="http://careersync.cloud"
              className="font-bold ml-1"
            >
              careersync.cloud
            </LinkPreview>
          </div>
          <p className="mb-4 text-sm font-normal">
            ☁️ Earned{" "}
            <span className="font-semibold">
              Oracle Cloud Infrastructure (OCI) Certified Foundations Associate
            </span>{" "}
            certification.
          </p>
          <div className="mb-4 text-sm font-normal">
            🚗 Developed a{" "}
            <LinkPreview
              url="https://tomiwajin.github.io/OluwatomiwaJinadu_Project/"
              className="font-bold"
            >
              Carpool Website
            </LinkPreview>{" "}
            using modern web technologies to connect local drivers and riders.
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal">
            🦀{" "}
            <span className="font-semibold">
              Led Distributed Sales Analytics System
            </span>{" "}
            – Managed team of 3 to build multi-threaded Rust application
            handling 40 branches concurrently with thread-safe data aggregation
            using Arc/Mutex primitives. Built TCP communication pipeline with
            Base64 encoding for secure data transmission.
            <LinkPreview
              url="https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git"
              className="font-bold ml-1"
            >
              View Project
            </LinkPreview>
          </div>
          <div className="mb-4 text-sm font-normal">
            📱 Built cross-platform Flutter app for elderly meal requests with
            Firebase Auth and REST API integration.
            <LinkPreview
              url="https://github.com/Tomiwajin/Elderly_Helper_App.git"
              className="font-bold ml-1"
            >
              View Project
            </LinkPreview>
          </div>
          <p className="mb-4 text-sm font-normal">
            🌍{" "}
            <span className="font-semibold">
              Vice President & Event Coordinator
            </span>{" "}
            of the African Students Union at UWG – Led Afro Week and Met
            Gala-themed cultural events.
          </p>
          <p className="mb-4 text-sm font-normal">
            ☁️ Earned{" "}
            <span className="font-semibold">
              AWS Certified Cloud Practitioner
            </span>{" "}
            certification.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            🎓 Achieved{" "}
            <span className="font-semibold">Dean&apos;s List honors</span> for
            academic excellence.
          </p>
          <div className="mb-4 text-sm font-normal">
            🏠{" "}
            <span className="font-semibold">
              California Housing Price Predictor
            </span>{" "}
            📊 Developed regression model using Scikit-learn to predict
            California housing prices. Created responsive web interface for
            model deployment and data visualization with Matplotlib.
            <LinkPreview
              url="https://github.com/Tomiwajin/House-price-prediction.git"
              className="font-bold ml-1"
            >
              View Project
            </LinkPreview>
          </div>
          <p className="mb-4 text-sm font-normal">
            🎮 Built a Text Twister desktop game in C# with scoring mechanics,
            timer logic, and GUI implementation using Windows Forms.
          </p>
          <p className="mb-4 text-sm font-normal">
            🔥 Deep-dived into backend development with Node.js, Express, and
            Firebase. Expanded machine learning knowledge with Python libraries
            (pandas, NumPy, scikit-learn).
          </p>
          <p className="mb-4 text-sm font-normal">
            🗄️ Studied Advanced Database Systems – Mastered database design,
            query optimization, indexing strategies, and transaction management.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            🗄️ Built multiple CRUD applications using MongoDB and PostgreSQL to
            master NoSQL and relational database paradigms, schema design, and
            complex queries.
          </p>
          <p className="mb-4 text-sm font-normal">
            📚 Completed Data Structures and Algorithms coursework – Implemented
            trees, graphs, sorting algorithms, and dynamic programming solutions
            in Java.
          </p>
          <p className="mb-4 text-sm font-normal">
            🔧 Studied Systems Programming – Learned memory management,
            pointers, system calls, and low-level programming in C/C++.
          </p>
          <p className="mb-4 text-sm font-normal">
            💻 Strengthened Java and Python fundamentals through personal
            projects focusing on OOP design patterns, testing frameworks
            (JUnit), and clean code principles.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal">
            🎓 Started college at the{" "}
            <LinkPreview url="https://www.westga.edu" className="font-bold">
              University of West Georgia
            </LinkPreview>
            , pursuing B.S. in Computing.
          </div>
          <p className="mb-4 text-sm font-normal">
            💻 Built foundational programming skills in Java and Python –
            Learned object-oriented programming, basic algorithms, and software
            development fundamentals.
          </p>
          <p className="mb-4 text-sm font-normal">
            🌐 Completed Introduction to Web Development – Built first websites
            using HTML, CSS, and JavaScript.
          </p>
          <p className="mb-4 text-sm font-normal">
            🚀 Started personal coding projects to apply classroom concepts,
            experimenting with simple CLI tools and automation scripts.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="px-4 md:px-70 relative w-full overflow-clip animate-fade-in">
      <Timeline data={data} />
    </div>
  );
};

export default page;
