"use client"
import HorizontalDivider from "@/components/HorizontalDivider";
import Navigation from "@/components/Navigation";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import TypingHeader from "@/components/TypingHeader";
import CornersOverlay from "@/components/CornersOverlay";
import HeroFrame from "@/components/HeroFrame";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen bg-white bg-[radial-gradient(lightgray_1px,transparent_1px)] bg-size-[40px_40px]">
      {/* TODO: Nav */}
      <CornersOverlay/>
      <Navigation/>
      <main className="pt-16 md:pt-13.75">
        {/* ================ Hero ================ */}
        <section id="hero" className="h-screen flex items-center justify-center">
          <HeroFrame/>
        </section>
        {/* ================ Portfolio ================ */}
        <section id="portfolio" className="scroll-mt-16 md:scroll-mt-13.75">
          <TypingHeader text="PORTFOLIO"/>
          <LargeCard title="Project: Alter Alley" 
            description={
              `A website for artists to share hand-painted Magic the Gathering cards.
              Features image upload, tagging, server-side search filtering, and sort.
              
              TypeScript
              ReactJs
              NextJs
              Tailwind
              Google Firebase/Firestorage
              Google Authentication
              Algolia`
            }
            imageSrc="/alteralley-home.png"
            imageClass="object-top-left"/>
          <HorizontalDivider/>
          <div className="gap-8 flex flex-col md:flex-row md:justify-center
            max-w-400 mx-auto w-[90%] md:h-180 md:max-h-[80vh]">
            <MediumCard title="New Home - Animated Short" 
              description=
                {`Written, directed, and animated by Siyoung Kim.
                Animation created using Maya.
                Composited using Adobe After Effects and Premiere Pro.`}
              imageSrc="/newhome-thumb.png"
              delayIndex={0}
              />
            <MediumCard title="Pim Sticker" description="Sticker designs inspired by Smiling Friends."
              imageSrc="/pim.png"
              delayIndex={1}
              />
            <MediumCard title="Charizard Fan Art"
              description=
                {`Submitted for 2024's Pokemon TCG Illustration Competition.
                  Digital illustration created using Procreate and Adobe Photoshop.`}
              imageSrc="/charizard.png"
              delayIndex={2}
              />
          </div>
        </section>
        <HorizontalDivider/>
        {/* ================ Experience ================ */}
        <section id="experience" className="scroll-mt-16 md:scroll-mt-13.75">
          <TypingHeader text="EXPERIENCE"/>
          <div className="gap-8 flex flex-col md:flex-row md:justify-center 
          max-w-400 mx-auto w-[90%] md:h-180 md:max-h-[80vh]">
            <MediumCard compact={true} title="Software Development Engineer @AWS" 
              description=
                {`Developed and maintained frontend and backend services. 
                  Worked with senior engineers on feature implementation, debugging, and code reviews on a production web app. 
                  Gained experience with AWS infrastructure, React-based services, and collaborative engineering practices. 
                  Handled end-to-end creation of a Chrome extension proof-of-concept, from getting team approvals on frontend design (Figma) to tying in backend communication and data uploads to AWS DynamoDB.`}
              imageSrc="/aws-logo.png"
              alt="AWS Logo"
              delayIndex={0}
              />
            <MediumCard compact={true} title="Software Engineering Intern @ErieInsurance" 
              description=
                {`At Erie Insurance, I was contributing to the development and maintenance of frontend services.
                Worked with full-time engineers on updating deprecated AngularJS-backed sites to use React following testing principles, writing Jest tests to maintain long-term website health. 
                Used Mendix to construct internal apps, configuring SSO and permission management for admins.`}
              imageSrc="/erieinsurance-logo.png"
              alt="Erie Insurance Logo"
              delayIndex={1}
              />
              <MediumCard compact={true} title="Undergraduate @GeorgiaTech" 
              description=
                {`I graduated with a B.S. in Computer Science with a 3.85 GPA. My threads were in Media and Intelligence.
                  
                  Relevant coursework: Computer Graphics, Computer Animation, 3D Animation, Game Development, Objects and Design, Data Structures and Algorithms. `}
              imageSrc="/georgiatech.jpg"
              alt="Tech Tower, an iconic symbol of tradition at Georgia Tech."
              delayIndex={2}
              />
          </div>
        </section>
        <HorizontalDivider/>
        {/* ================ About ================ */}
        <section>
          <TypingHeader text="ABOUT ME"/>
          <LargeCard title="About Me" textFirst={true}
           description={
              `
              Hey! My name's Siyoung (see-young).
              
              I graduated from Georgia Tech with a B.S. in Computer Science. 

              I enjoy weightlifting, playing Magic the Gathering at card shops, and all kinds of PC gaming.
            `}
           imageSrc2="/aboutme-pic3.jpg"
           imageSrc="/aboutme-pic4.jpg"
           />
        </section>
      </main>
    </div>
  );
}
