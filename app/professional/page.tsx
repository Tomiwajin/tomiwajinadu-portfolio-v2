import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "@/components/ui/link-preview";

const page = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            🎓 Graduated with a B.S. in Computing from the
            <LinkPreview url="https://www.westga.edu" className="font-bold">
              {" "}
              University of West Georgia.
            </LinkPreview>
          </p>
          <p className="mb-4 text-sm font-normal">
            👨🏽‍💻 Software Engineering Intern at Bemelo Health – contributed to
            mobile development and AI feature prototyping.
          </p>
          <p className="mb-4 text-sm font-normal">
            🏆 Built a Tournament Bracket Application in Java with dynamic match
            progression.
          </p>
          <div className="mb-4 text-sm font-normal">
            🚗 Developed a{" "}
            <LinkPreview
              url="https://tomiwajin.github.io/OluwatomiwaJinadu_Project/"
              className="font-bold"
            >
              Carpool Website
            </LinkPreview>{" "}
            to connect local drivers and riders.
          </div>
          <div className="mb-4 text-sm font-normal">
            ✅ Created a full-stack{" "}
            <LinkPreview
              url="https://task-manager-nr9n.onrender.com"
              className="font-bold"
            >
              Task Manager
            </LinkPreview>{" "}
            web app with downloadable `.exe` installer.
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            🦀 Developed a Rust-based client-server system using TCP sockets for
            Base64 sales data transfer.
          </p>
          <p className="mb-4 text-sm font-normal">
            📱 Built a cross-platform Flutter app to help elderly users request
            meals. Integrated Firebase Auth and REST APIs.
          </p>
          <p className="mb-4 text-sm font-normal">
            🌍 Vice President of the African Students Union at UWG, led Afro
            Week and Met Gala-themed events.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            📊 Built a regression model using Scikit-learn to predict California
            housing prices. Visualized data with Matplotlib and deployed via
            Render.
          </p>
          <p className="mb-4 text-sm font-normal">
            🌐 Created a responsive webpage for the housing model to display
            results.
          </p>
          <p className="mb-4 text-sm font-normal">
            🎮 Developed a C# desktop game called “Text Twister” with scoring
            and timer logic.
          </p>
          <p className="mb-4 text-sm font-normal">
            🔥 Learned backend development with Node.js & Firebase and expanded
            ML knowledge.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            🗄️ Built CRUD-based projects using MongoDB and SQL to strengthen
            database design and query skills.
          </p>
          <p className="mb-4 text-sm font-normal">
            📚 Continued refining Java and Python fundamentals through personal
            backend projects.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal">
            🎓 Started college at the{" "}
            <LinkPreview url="https://www.westga.edu" className="font-bold">
              {" "}
              University of West Georgia.
            </LinkPreview>
          </p>
          <p className="mb-4 text-sm font-normal">
            💻 Began building personal projects in Java and Python — laying the
            foundation in OOP and scripting.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className=" px-4 md:px-70 relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default page;
