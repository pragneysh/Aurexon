import { Navigate } from 'react-router-dom';

/**
 * Gallery functionality has been merged into /products.
 * Retained as a redirect component for backwards compatibility.
 */
export default function Gallery() {
  return <Navigate to="/products" replace />;
}
