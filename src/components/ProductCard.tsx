
import React from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md product-card-hover", 
        className
      )}
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-shoe-primary text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg text-gray-900 mb-1 truncate">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-shoe-dark font-bold">${price.toFixed(2)}</span>
          <button className="text-shoe-primary hover:text-shoe-dark font-medium text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
