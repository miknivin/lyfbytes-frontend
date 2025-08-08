/**
 * Best Seller Badge Utilities
 * Helper functions for determining and managing best seller products
 */

/**
 * Check if a product should display the best seller badge
 * @param badge - The product badge string
 * @param ratings - Product ratings (optional)
 * @param reviews - Number of reviews (optional)
 * @returns boolean - Whether to show best seller badge
 */
export const shouldShowBestSellerBadge = (
  badge?: string,
  ratings?: number,
  reviews?: number
): boolean => {
  // Check if badge explicitly indicates best seller
  const badgeVariants = [
    "Best Seller", 
    "BEST SELLER", 
    "bestseller", 
    "Bestseller", 
    "best seller",
    "Best seller"
  ];
  
  if (badge && badgeVariants.includes(badge)) {
    return true;
  }
  
  // Alternative: Auto-detect based on high ratings and reviews (optional)
  // Uncomment this section if you want to automatically mark high-rated products
  /*
  if (ratings && reviews && ratings >= 4.5 && reviews >= 50) {
    return true;
  }
  */
  
  return false;
};

/**
 * Get list of all possible best seller badge text variations
 * @returns string[] - Array of valid badge text variations
 */
export const getBestSellerBadgeVariants = (): string[] => {
  return [
    "Best Seller", 
    "BEST SELLER", 
    "bestseller", 
    "Bestseller", 
    "best seller",
    "Best seller"
  ];
};

/**
 * Normalize badge text to standard format
 * @param badge - The original badge text
 * @returns string - Normalized badge text or original if not best seller
 */
export const normalizeBadge = (badge?: string): string => {
  if (!badge) return "";
  
  const bestSellerVariants = getBestSellerBadgeVariants();
  if (bestSellerVariants.includes(badge)) {
    return "Best Seller"; // Standard format
  }
  
  return badge;
};
