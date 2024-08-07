"use client";
import { initialEdges, initialNodes, useProjects } from "@/hooks";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiShuffleFill,
  RiShuffleLine,
} from "react-icons/ri";
import { toast } from "react-toastify";

const ProjectPicker = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    projects,
    createProject,
    isCreating,
    updateProject,
    activeProjectId,
    getProjectById,
  } = useProjects();
  const isActive = pathname.startsWith("/projects");

  const onCreateProject = async () => {
    const newProject = await createProject({
      id: -1, // Will be replaced by actual id from server side
      name: "New Project",
      description: "A new project with sample flow.",
      flow: {
        nodes: initialNodes,
        edges: initialEdges,
      },
    });
    if (!newProject) {
      toast.error("Failed to create project");
      return;
    }

    toast.success("Project created. Now jumping to project page.");
    router.push(`/projects/${newProject.id}/flow`);
  };

  const Icon = isActive ? RiShuffleFill : RiShuffleLine;
  const activeProject = getProjectById(activeProjectId);

  return (
    <div
      className={clsx(
        "group flex items-center gap-0.5 z-10 hover:text-primary cursor-pointer",
        {
          "text-primary/80 border-b border-primary/80": isActive,
        }
      )}
    >
      <Link
        href={
          activeProject ? `/projects/${activeProject?.id}/flow` : "/projects"
        }
        className="flex items-center gap-1.5 text-sm"
      >
        <Icon className="h-4 w-4 group-hover:scale-125 transform transition duration-700 ease-in-out" />
        <span className="text-ellipsis overflow-hidden whitespace-nowrap max-w-24">
          {activeProject?.name || "Projects"}
        </span>
      </Link>
      <Listbox
        value={activeProject || { id: -1, name: "Select Project" }}
        onChange={(v) => router.push(`/projects/${v?.id}/flow`)}
      >
        <ListboxButton className={clsx("btn btn-xs btn-ghost btn-circle")}>
          <RiArrowDownSLine />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom end"
          className="flex flex-col p-2 bg-base-200 dark:bg-gray-700 rounded mt-1 min-w-48 gap-1 shadow dark:border dark:border-gray-600 z-20"
        >
          <div className="flex items-center gap-2 py-2 justify-between border-b border-base-content/10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Projects</span>
            </div>
            <button
              onClick={onCreateProject}
              className={clsx("btn btn-xs btn-outline btn-circle")}
              data-tooltip-id="nav-tooltip"
              data-tooltip-content="Start a New Project"
              data-tooltip-place="bottom"
            >
              {!isCreating && <RiAddLine />}
              {isCreating && (
                <div className="loading loading-primary w-5 h-5" />
              )}
            </button>
          </div>
          {projects.length > 0 &&
            projects.map((project) => (
              <ListboxOption
                key={project.id}
                value={project}
                className="group flex items-center gap-2 text-sm rounded px-4 py-2 data-[selected]:border data-[selected]:border-base-content/20 data-[focus]:bg-base-content/10 cursor-pointer"
              >
                <Icon className="h-4 w-4" />
                {project.name}
              </ListboxOption>
            ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default ProjectPicker;
