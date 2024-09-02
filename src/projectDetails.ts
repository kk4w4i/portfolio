export interface GalleryItem {
    title: string;
    description: string;
    websiteLink: string;
    completionStatus: string;
    projectType: ProjectType[];
    imageDirectory: string;
  }

enum ProjectType {
  fullstack = "Full Stack",
  frontend = "Frontend",
  backend = "Backend",
  design = "Design"
}
  
  const projectDetails: GalleryItem[] = [
    {
      title: "Zen Japanese",
      description: "A fun frontend project for a Japanese restaurant. They wanted to treat their website as an information/gallery for their store.",
      websiteLink: "https://zen-japanese.com",
      completionStatus: "2024",
      projectType: [ProjectType.frontend, ProjectType.design],
      imageDirectory: "zen-japanese"
    },
    {
      title: "CodeClash",
      description: "PvP leetcode, player to finish the leetcode question first wins, but theres's a catch. Players can edit their opponents code base.",
      websiteLink: "https://github.com/Antimatter543/CodeClash",
      completionStatus: "2024",
      projectType: [ProjectType.fullstack, ProjectType.design],
      imageDirectory: "codeclash"
    },
  ];
  
  export default projectDetails;