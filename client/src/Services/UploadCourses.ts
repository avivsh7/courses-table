
export async function uploadCourseCSV(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload file');
  }

  return response.json();
}