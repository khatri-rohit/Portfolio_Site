import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("This Part of Site is Still in Prograss...");
    navigate("/");
  })

  return (
    <>
      <div className="text-5xl dark:text-white text-center font-serif font-bold ">
        This Part of Site is Still in Prograss
      </div>
    </>
  )
};

export default Projects;
