# Best Seller Badge Feature

## Overview
The Best Seller Badge is a special circular red badge with golden stars that appears on product cards to highlight bestselling products, matching the design shown in your screenshot.

## Features
- **Circular Design**: Red background with golden stars at the top
- **Text Display**: "BEST SELLER" text in white
- **Positioning**: Top-right corner of product cards
- **Size Variants**: Small, Medium, Large
- **Responsive**: Works on both grid and list layouts

## Usage

### 1. Setting Up Best Seller Products
To mark a product as a bestseller, set the `badge` field in your product data to one of these values:
- `"Best Seller"` (recommended)
- `"BEST SELLER"`
- `"bestseller"`
- `"Bestseller"`
- `"best seller"`

Example:
```json
{
  "id": 1,
  "name": "Premium Banana Chips",
  "badge": "Best Seller",
  "price": "12.00",
  ...
}
```

### 2. Component Integration
The BestSellerBadge component is automatically integrated into ProductCard and will show when the product has a qualifying badge value.

### 3. Size Options
- **Small**: 45x45px (for compact cards)
- **Medium**: 55x55px (default for grid layout)
- **Large**: 65x65px (for list layout)

### 4. Position Options
- **top-left**: Places badge at top-left corner
- **top-right**: Places badge at top-right corner (default)

## Files Structure
```
src/components/shop/
├── BestSellerBadge.tsx         # Main component
├── BestSellerBadge.css         # Styling
├── bestSellerUtils.ts          # Utility functions
└── ProductCard.tsx             # Integration point
```

## Styling Customization
You can customize the badge appearance by modifying `BestSellerBadge.css`:

- **Colors**: Change the red gradient background
- **Stars**: Modify star color, size, and positioning
- **Text**: Adjust font size and spacing
- **Size**: Create custom size variants

## Technical Details

### Badge Detection Logic
The system uses the `shouldShowBestSellerBadge()` utility function to determine if a product should display the best seller badge based on the badge field value.

### Z-Index Management
- Best Seller Badge: `z-index: 15`
- Other badges: `z-index: 2`
- Ensures proper layering without conflicts

### Responsive Behavior
- Grid Layout: Uses medium size badge
- List Layout: Uses large size badge
- Mobile: Automatically scales with container

## Examples

### Grid View
```tsx
<BestSellerBadge 
  show={shouldShowBestSellerBadge(badge)}
  position="top-right"
  size="medium"
/>
```

### List View
```tsx
<BestSellerBadge 
  show={shouldShowBestSellerBadge(badge)}
  position="top-right"
  size="large"
/>
```

## Testing
To test the feature:
1. Set some products' `badge` field to "Best Seller"
2. The circular red badge with stars should appear
3. Other badges should still work normally
4. Badge should not interfere with discount badges

## Future Enhancements
- Auto-detection based on sales metrics
- Animation effects on hover
- Custom badge text variations
- Analytics integration
