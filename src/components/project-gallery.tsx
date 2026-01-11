import Image from "next/image";
import { projectsByCategory, ProjectCategory, Project } from "@/lib/projects-data";

interface ProjectGalleryProps {
  category?: ProjectCategory;
  columns?: 2 | 3 | 4;
  showTitle?: boolean;
}

export function ProjectGallery({ 
  category, 
  columns = 4,
  showTitle = false 
}: ProjectGalleryProps) {
  // If category is specified, show only that category's projects
  // Otherwise show all projects (for projecten page)
  const projectsToShow: Project[] = category 
    ? projectsByCategory[category]
    : Object.values(projectsByCategory).flat();

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className="w-full">
      {showTitle && category && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {category}
        </h3>
      )}
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {projectsToShow.map((project, index) => (
          <div
            key={`${project.image}-${index}`}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={project.image}
              alt={`${category || project.category} project ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes={
                columns === 2
                  ? "(max-width: 768px) 50vw, 50vw"
                  : columns === 3
                  ? "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

