// Sample product data with enhanced tags for Life Bytes products
export const SAMPLE_PRODUCTS_WITH_TAGS = [
  {
    _id: "684a70f1935b6e99fc9d286f",
    name: "Life Bytes Banana Chips",
    tags: ["No Palm Oil", "Coconut Oil", "Crispy", "Kerala Style", "Traditional Recipe", "No Preservatives", "Handmade"],
    details: {
      ingredientsDescription: "Premium banana chips made with authentic coconut oil using traditional Kerala recipes"
    }
  },
  {
    _id: "684bce8e3086ec1d0a13d14a", 
    name: "Tomato Murukku",
    tags: ["Janmashtami spl", "Tangy", "Spicy", "Traditional Recipe", "Handmade", "No Maida", "Kerala Style"],
    details: {
      ingredientsDescription: "Traditional Kerala murukku with tangy tomato flavor, spiral-shaped and crispy"
    }
  },
  {
    _id: "684fec1e4c79c2acb46e2741",
    name: "Life Bytes Jackfruit Chips", 
    tags: ["Organic", "Kerala Style", "Crispy", "Premium Quality", "Tangy", "Traditional Recipe", "No Artificial Colors"],
    details: {
      ingredientsDescription: "Kerala's beloved jackfruit transforms into golden, crispy chips with tropical flavors"
    }
  },
  {
    _id: "684a81b17d8f44334a7c72e8",
    name: "Sharkaravaratti",
    tags: ["Sweet", "Jaggery", "Traditional Recipe", "Premium Quality", "Handmade", "Festival Special", "Kerala Style"],
    details: {
      ingredientsDescription: "Traditional Kerala sweet snack made with jaggery and authentic spices"
    }
  },
  {
    _id: "sample_ghee_murukku",
    name: "Ghee Rice Murukku", 
    tags: ["Ghee", "Premium Quality", "Traditional Recipe", "Handmade", "Crispy", "Kerala Style", "No Preservatives"],
    details: {
      ingredientsDescription: "Rich ghee-flavored rice murukku with perfectly spiced ingredients for an addictive crunch"
    }
  },
  {
    _id: "sample_butter_murukku",
    name: "Butter Murukku (Benne Murukku)",
    tags: ["No Palm Oil", "No Preservatives", "No Maida", "Janmashtami spl", "Traditional Recipe", "Premium Quality", "Handmade"],
    details: {
      ingredientsDescription: "Traditional South Indian butter murukku made with authentic ingredients, perfect for festivals"
    }
  },
  {
    _id: "sample_tapioca_chips", 
    name: "Tapioca Chips",
    tags: ["Gluten Free", "Crispy", "Sea Salt", "Kerala Style", "Traditional Recipe", "No Artificial Colors", "Vegan"],
    details: {
      ingredientsDescription: "Crispy tapioca chips seasoned with sea salt, made using traditional Kerala methods"
    }
  },
  {
    _id: "sample_spicy_banana",
    name: "Spicy Banana Chips",
    tags: ["Spicy", "Coconut Oil", "Kerala Style", "Traditional Recipe", "No Palm Oil", "Handmade", "Low Salt"],
    details: {
      ingredientsDescription: "Traditional Kerala banana chips with a spicy kick, made with authentic coconut oil"
    }
  },
  {
    _id: "sample_sweet_banana",
    name: "Sweet Banana Chips", 
    tags: ["Sweet", "Jaggery", "No Artificial Colors", "Kerala Style", "Traditional Recipe", "Premium Quality", "Coconut Oil"],
    details: {
      ingredientsDescription: "Sweet banana chips coated with natural jaggery for a delightful traditional taste"
    }
  },
  {
    _id: "sample_mixed_chips",
    name: "Life Bytes Mixed Chips Combo",
    tags: ["Premium Quality", "Traditional Recipe", "Kerala Style", "Variety Pack", "No Preservatives", "Handmade", "Festival Special"],
    details: {
      ingredientsDescription: "A delicious mix of banana, jackfruit, and tapioca chips for the perfect snack variety"
    }
  }
];

// Function to get sample tags for any product name
export const getSampleTagsForProduct = (productName: string): string[] => {
  const name = productName.toLowerCase();
  const product = SAMPLE_PRODUCTS_WITH_TAGS.find(p => 
    p.name.toLowerCase().includes(name) || 
    name.includes(p.name.toLowerCase().split(' ')[2]?.toLowerCase() || '')
  );
  
  if (product) {
    return product.tags;
  }
  
  // Fallback: generate tags based on keywords in product name
  let tags: string[] = [];
  
  if (name.includes('banana')) tags = ["No Palm Oil", "Coconut Oil", "Crispy", "Kerala Style", "Traditional Recipe", "No Preservatives"];
  else if (name.includes('murukku')) tags = ["Handmade", "Traditional Recipe", "Spicy", "No Maida", "Kerala Style", "Premium Quality"];
  else if (name.includes('jackfruit')) tags = ["Organic", "No Preservatives", "Crispy", "Kerala Style", "Premium Quality", "Tangy"];
  else if (name.includes('chips')) tags = ["Crispy", "No Palm Oil", "Sea Salt", "No Artificial Colors", "Premium Quality"];
  else if (name.includes('ghee')) tags = ["Ghee", "Traditional Recipe", "Premium Quality", "Handmade"];
  else if (name.includes('jaggery') || name.includes('sweet')) tags = ["Jaggery", "No Artificial Colors", "Traditional Recipe", "Sweet"];
  else if (name.includes('spicy')) tags = ["Spicy", "Traditional Recipe", "Kerala Style", "Low Salt"];
  else tags = ["Kerala Style", "Traditional Recipe", "Premium Quality", "Handmade"];
  
  return tags;
};
