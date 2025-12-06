import { useRef } from "react";
import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"


function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="flex max-sm:flex-col">
        <LeftSection
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />

        <RightSection
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />

      </div>
    </>
  )
}

export default App
