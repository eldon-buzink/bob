// Shared project data organized by category
export type ProjectCategory = "Tuinaanleg" | "Tuinontwerp" | "Onderhoud";

export interface Project {
  image: string;
  category: ProjectCategory;
}

export const projectsByCategory: Record<ProjectCategory, Project[]> = {
  "Tuinaanleg": [
    { image: "/images/AKCR7378.JPEG", category: "Tuinaanleg" },
    { image: "/images/BJNA2902.JPEG", category: "Tuinaanleg" },
    { image: "/images/EDPX5962.JPEG", category: "Tuinaanleg" },
    { image: "/images/HEQI3951.JPEG", category: "Tuinaanleg" },
    { image: "/images/HLMM2515.JPEG", category: "Tuinaanleg" },
    { image: "/images/HVGP1635.JPEG", category: "Tuinaanleg" },
    { image: "/images/IMG_4097.JPG", category: "Tuinaanleg" },
    { image: "/images/IMG_4107.JPG", category: "Tuinaanleg" },
    { image: "/images/IMG_6151.JPG", category: "Tuinaanleg" },
    { image: "/images/2828d7ec-d846-47cb-9af5-86a7860c8f2e.jpg", category: "Tuinaanleg" },
    { image: "/images/61d7a3f0-7e11-4b61-ba27-f2803c503bf5.jpg", category: "Tuinaanleg" },
    { image: "/images/a5dff915-fb05-40ec-bfeb-fefdd360d57b.jpg", category: "Tuinaanleg" },
  ],
  "Tuinontwerp": [
    { image: "/images/APWA9274.JPEG", category: "Tuinontwerp" },
    { image: "/images/DTVT2834.JPEG", category: "Tuinontwerp" },
    { image: "/images/HHVQ5913.JPEG", category: "Tuinontwerp" },
    { image: "/images/IFAF1882.JPEG", category: "Tuinontwerp" },
    { image: "/images/IMG_4010.JPG", category: "Tuinontwerp" },
    { image: "/images/IMG_6159.JPG", category: "Tuinontwerp" },
    { image: "/images/2ee5565a-61f5-4486-9ad7-12953e62b723.jpg", category: "Tuinontwerp" },
    { image: "/images/42fa51c1-afe2-405a-be40-050de2a62e06.jpg", category: "Tuinontwerp" },
  ],
  "Onderhoud": [
    { image: "/images/FVGZ7111.JPEG", category: "Onderhoud" },
    { image: "/images/IMG_4009.JPG", category: "Onderhoud" },
    { image: "/images/IMG_4875.JPG", category: "Onderhoud" },
    { image: "/images/3adfc135-2c59-4666-b0f6-df2094632f4f.jpg", category: "Onderhoud" },
  ],
};

// Get all projects as a flat array
export const allProjects: Project[] = Object.values(projectsByCategory).flat();

// Get projects by category
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projectsByCategory[category] || [];
}

