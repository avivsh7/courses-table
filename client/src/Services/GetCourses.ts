export async function getCourses() {
  try {
    const response = await fetch('http://localhost:3000/courses');
    if (!response.ok) throw new Error('Failed to fetch courses');
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}
