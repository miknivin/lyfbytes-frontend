interface ProductTag {
  id: string;
  label: string;
  type: 'health' | 'ingredient' | 'special' | 'dietary' | 'occasion' | 'quality' | 'feature';
  color?: string;
  icon?: string;
}

// Predefined tag configurations with colors and types
export const TAG_CONFIG: Record<string, ProductTag> = {
  // Health & Dietary Tags
  'No Palm Oil': { id: 'no-palm-oil', label: 'No Palm Oil', type: 'health', color: '#28a745', icon: '🌿' },
  'No Preservatives': { id: 'no-preservatives', label: 'No Preservatives', type: 'health', color: '#28a745', icon: '🚫' },
  'No Maida': { id: 'no-maida', label: 'No Maida', type: 'health', color: '#28a745', icon: '🌾' },
  'No Artificial Colors': { id: 'no-artificial-colors', label: 'No Artificial Colors', type: 'health', color: '#28a745', icon: '🎨' },
  'Gluten Free': { id: 'gluten-free', label: 'Gluten Free', type: 'dietary', color: '#17a2b8', icon: '🌾' },
  'Vegan': { id: 'vegan', label: 'Vegan', type: 'dietary', color: '#17a2b8', icon: '🌱' },
  'Organic': { id: 'organic', label: '100% Organic', type: 'quality', color: '#6f42c1', icon: '🌿' },
  '100% Organic': { id: '100-organic', label: '100% Organic', type: 'quality', color: '#6f42c1', icon: '🌿' },

  // Ingredient Tags
  'Coconut Oil': { id: 'coconut-oil', label: 'Coconut Oil', type: 'ingredient', color: '#6f42c1', icon: '🥥' },
  'Ghee': { id: 'ghee', label: 'Pure Ghee', type: 'ingredient', color: '#fd7e14', icon: '🧈' },
  'Jaggery': { id: 'jaggery', label: 'Jaggery Sweetened', type: 'ingredient', color: '#6f42c1', icon: '🍯' },
  'Sea Salt': { id: 'sea-salt', label: 'Sea Salt', type: 'ingredient', color: '#17a2b8', icon: '🧂' },
  
  // Special Occasion Tags
  'Janmashtami spl': { id: 'janmashtami', label: 'Janmashtami Special', type: 'occasion', color: '#dc3545', icon: '🎉' },
  'Diwali Special': { id: 'diwali', label: 'Diwali Special', type: 'occasion', color: '#dc3545', icon: '🪔' },
  'Festival Special': { id: 'festival', label: 'Festival Special', type: 'occasion', color: '#dc3545', icon: '🎊' },
  'Limited Edition': { id: 'limited', label: 'Limited Edition', type: 'special', color: '#dc3545', icon: '⭐' },

  // Quality Tags
  'Premium Quality': { id: 'premium', label: 'Premium Quality', type: 'quality', color: '#6f42c1', icon: '👑' },
  'Handmade': { id: 'handmade', label: 'Handmade', type: 'quality', color: '#fd7e14', icon: '👐' },
  'Traditional Recipe': { id: 'traditional', label: 'Traditional Recipe', type: 'quality', color: '#6f42c1', icon: '📜' },
  'Kerala Style': { id: 'kerala-style', label: 'Kerala Style', type: 'feature', color: '#28a745', icon: '🏝️' },
  
  // Feature Tags
  'Crispy': { id: 'crispy', label: 'Extra Crispy', type: 'feature', color: '#ffc107', icon: '💥' },
  'Extra Crispy': { id: 'extra-crispy', label: 'Extra Crispy', type: 'feature', color: '#ffc107', icon: '💥' },
  'Spicy': { id: 'spicy', label: 'Spicy', type: 'feature', color: '#dc3545', icon: '🌶️' },
  'Sweet': { id: 'sweet', label: 'Sweet', type: 'feature', color: '#e83e8c', icon: '🍯' },
  'Tangy': { id: 'tangy', label: 'Tangy', type: 'feature', color: '#fd7e14', icon: '🍋' },
  'Low Salt': { id: 'low-salt', label: 'Low Salt', type: 'health', color: '#28a745', icon: '🧂' },

  // Product Specific
  'Banana Chips': { id: 'banana-chips', label: 'Banana Chips', type: 'feature', color: '#ffc107', icon: '🍌' },
  'Murukku': { id: 'murukku', label: 'Murukku', type: 'feature', color: '#fd7e14', icon: '🌀' },
  'Jackfruit Chips': { id: 'jackfruit', label: 'Jackfruit Chips', type: 'feature', color: '#28a745', icon: '🥭' },
  'Tapioca Chips': { id: 'tapioca', label: 'Tapioca Chips', type: 'feature', color: '#6f42c1', icon: '🍠' },
};

// Product-specific tag suggestions
export const PRODUCT_TAG_SUGGESTIONS: Record<string, string[]> = {
  'banana': ['No Palm Oil', 'Coconut Oil', 'Crispy', 'Kerala Style', 'Traditional Recipe', 'No Preservatives'],
  'murukku': ['Handmade', 'Traditional Recipe', 'Spicy', 'No Maida', 'Kerala Style', 'Premium Quality'],
  'jackfruit': ['Organic', 'No Preservatives', 'Crispy', 'Kerala Style', 'Premium Quality', 'Tangy'],
  'chips': ['Crispy', 'No Palm Oil', 'Sea Salt', 'No Artificial Colors', 'Premium Quality'],
  'ghee': ['Ghee', 'Traditional Recipe', 'Premium Quality', 'Handmade'],
  'jaggery': ['Jaggery', 'No Artificial Colors', 'Traditional Recipe', 'Sweet'],
  'spicy': ['Spicy', 'Traditional Recipe', 'Kerala Style', 'Low Salt'],
  'sweet': ['Sweet', 'Jaggery', 'Traditional Recipe', 'Festival Special'],
  'corn': ['Crispy', 'No Artificial Colors', 'Premium Quality', 'Gluten Free'],
  'mixture': ['Spicy', 'Traditional Recipe', 'Premium Quality', 'Handmade'],
  'flakes': ['Crispy', 'No Preservatives', 'Premium Quality', 'Traditional Recipe'],
  'thatta': ['Traditional Recipe', 'Kerala Style', 'Handmade', 'Premium Quality'],
  'tapioca': ['Gluten Free', 'Sea Salt', 'Kerala Style', 'Traditional Recipe'],
  'masala': ['Spicy', 'Traditional Recipe', 'Premium Quality', 'Handmade'],
  'organic': ['Organic', 'No Preservatives', 'Premium Quality', 'Gluten Free'],
  'traditional': ['Traditional Recipe', 'Handmade', 'Kerala Style', 'Premium Quality'],
  'snack': ['Crispy', 'Premium Quality', 'Traditional Recipe', 'Kerala Style'],
  'kerala': ['Kerala Style', 'Traditional Recipe', 'Coconut Oil', 'Handmade'],
  'life bytes': ['Premium Quality', 'Traditional Recipe', 'Kerala Style', 'No Preservatives'],
};

// Helper function to generate suggested tags based on product name
export function generateSuggestedTags(productName: string): string[] {
  if (!productName) return ['Premium Quality', 'Traditional Recipe', 'Kerala Style', 'Handmade'];
  
  const name = productName.toLowerCase();
  let suggestedTags: string[] = [];
  
  // Check for specific product keywords and add relevant tags
  Object.entries(PRODUCT_TAG_SUGGESTIONS).forEach(([keyword, tags]) => {
    if (name.includes(keyword)) {
      suggestedTags = [...suggestedTags, ...tags];
    }
  });
  
  // If no matches found, add generic food tags based on common patterns
  if (suggestedTags.length === 0) {
    if (name.includes('chip')) {
      suggestedTags = ['Crispy', 'Premium Quality', 'Traditional Recipe', 'Kerala Style'];
    } else if (name.includes('mix')) {
      suggestedTags = ['Spicy', 'Traditional Recipe', 'Premium Quality', 'Handmade'];
    } else if (name.includes('rice')) {
      suggestedTags = ['Traditional Recipe', 'Premium Quality', 'Gluten Free', 'Handmade'];
    } else {
      // Default tags for any food product
      suggestedTags = ['Premium Quality', 'Traditional Recipe', 'Kerala Style', 'Handmade'];
    }
  }
  
  // Add some premium/quality tags if not already present
  if (!suggestedTags.some(tag => ['Premium Quality', 'Organic', '100% Organic'].includes(tag))) {
    suggestedTags.unshift('Premium Quality');
  }
  
  // Add Kerala Style if it's not present and this looks like a Kerala product
  if (!suggestedTags.includes('Kerala Style') && 
      (name.includes('life bytes') || name.includes('kerala') || 
       name.includes('coconut') || name.includes('banana') || 
       name.includes('jackfruit') || name.includes('murukku'))) {
    suggestedTags.push('Kerala Style');
  }
  
  // Remove duplicates and return
  return [...new Set(suggestedTags)];
}

export type { ProductTag };
