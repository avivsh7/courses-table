import { useState } from "react";
import UploadUI from "./UploadUI";

const Homepage = () => {
  const [showUploadUI, setShowUploadUI] = useState<boolean>(false);
  return (
    <div className="uploading-container">
      <h1>My Courses</h1>
      <button
        className="create-course-btn"
        onClick={() => setShowUploadUI(!showUploadUI)}
      >Create New Course</button>
      <span>Create and manage your educational content</span>
      {showUploadUI && (
        <>
          <UploadUI setShowUploadUI={setShowUploadUI} />
        </>
      )}
    </div>
  );
};

export default Homepage;
