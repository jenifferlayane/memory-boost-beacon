/**
 * Safely redirects to an external URL after validation
 * @param url - The URL to redirect to
 */
export const safeRedirect = (url: string) => {
  try {
    // Validate the URL
    const validUrl = new URL(url);
    
    // Only allow http and https protocols
    if (validUrl.protocol === "http:" || validUrl.protocol === "https:") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("Invalid URL protocol");
    }
  } catch (error) {
    console.error("Invalid URL:", error);
  }
};
