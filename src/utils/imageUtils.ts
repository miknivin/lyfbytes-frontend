/**
 * Image Utility Functions
 * Centralized image transformation and handling utilities
 */

export const CLOUD_FRONT_BASE_URL = "https://d229x2i5qj11ya.cloudfront.net";

/**
 * Transform image URL from S3 to CloudFront
 * @param url - The original image URL
 * @returns Transformed CloudFront URL or original URL
 */
export const transformImageUrl = (url: string): string => {
  if (!url) return "/assets/img/placeholder.jpg";
  
  if (url.includes("kids-bags.s3.eu-north-1.amazonaws.com")) {
    const path = url.split("/uploads")[1];
    return `${CLOUD_FRONT_BASE_URL}/uploads${path}`;
  }
  return url;
};

/**
 * Get placeholder image URL
 * @returns Default placeholder image path
 */
export const getPlaceholderImage = (): string => {
  return "/assets/img/placeholder.jpg";
};

/**
 * Handle image error by setting placeholder
 * @param e - Image error event
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = getPlaceholderImage();
};

/**
 * Get optimized image styles for different contexts
 */
export const getImageStyles = {
  cartThumbnail: {
    width: "60px",
    height: "60px",
    objectFit: "cover" as const,
    borderRadius: "4px"
  },
  cartFull: {
    width: "80px",
    height: "80px", 
    objectFit: "cover" as const,
    borderRadius: "8px"
  },
  productCard: {
    objectFit: "contain" as const,
    maxWidth: "100%"
  }
};
