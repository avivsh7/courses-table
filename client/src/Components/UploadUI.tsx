import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadCourseCSV } from "../Services/UploadCourses";

const UploadUI = (props: {
    setShowUploadUI: (value: boolean) => void;
}) => {
    const [file, setFile] = useState<File>();
    const navigate = useNavigate();

    const handleUpload = async (file: File) => {
        try {
            const result = await uploadCourseCSV(file);
            console.log('Upload successful:', result);
            navigate('/courses');
        } catch (error) {
            console.error(error);
            alert('Failed to upload file. Please try again.');
        }
    };

    return (
        <>
            {/* Overlay div, sitting behind actual pop-up div */}
            <div className="overlay-div"
                onClick={() => props.setShowUploadUI(false)}
            />

            {/* Actual pop-up div */}
            <div className="popup-div">
                <h2>Create Your Course</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button onClick={() => props.setShowUploadUI(false)} className="back-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                            <path d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" />
                        </svg>
                        Back
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

                    <p>Upload from Excel</p>
                </div>
                <br />
                <div>
                    <h2>Upload from Excel/CSV</h2>
                    <input onChange={(e) => setFile(e.target.files?.[0])} type="file" accept=".csv, .xlsx" />
                    <button onClick={() => handleUpload(file!)}>Upload</button>
                </div>
            </div>
        </>

    )
}

export default UploadUI
