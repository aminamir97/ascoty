import HeroBanner from "../components/heroBanner";
import { OneProject } from "../components/OneProject";
import Pagination from "../components/Pagination";
import ContactUsSection from "../sections/HomePage/ContactUsSection";
import { ProjectsSection } from "../sections/ProjectsPageSections/ProjectsCardsSection";
import CustomBtnComponent from "../assets/buttonCustom/index"


function ProjectsPage() {
  return (
    <>
    <HeroBanner title="PROJECTS" />
      <OneProject isProjPage={true} heading={false} title="IPillion Website & Application" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <ProjectsSection />
      <Pagination />
      <ContactUsSection 
      
        title="CONNECT WITH US"
        content="WE ARE READY TO TAKE OPPORTUNITIES"
      />
      <CustomBtnComponent link="/" txt={"read more"} txtColor={"#6D2E88"}/>
    
     
    </>
  );
}
export default ProjectsPage;
