import React from 'react';

const ProductResults = ({ products }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Product Comparison Results</h2>
      <ul style={styles.list}>
        {products.map((product, index) => (
          <li key={index} style={styles.listItem}>
            <strong>{product.title}</strong> - ${product.price.toFixed(2)} - {product.website}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    borderBottom: '1px solid #eee',
    padding: '10px 0',
  },
};

export default ProductResults;


