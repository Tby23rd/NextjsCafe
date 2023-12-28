import React, { useState, useEffect } from 'react';
import styles from '../styles/Order.module.css';

interface CafeItem {
  itemType: string;
  itemName: string;
  type: string;
  sizes?: string[];
  prices: number | { [size: string]: number };
}

const OrderPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<CafeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CafeItem[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/CafeMenu.json');
        const data = await response.json();
        setMenuItems(data.menu || []);
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setError('Error fetching menu data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const addToCart = (item: CafeItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className={styles.orderContainer}>
            <h1 className={styles.orderHeader}>Cafe Menu</h1>

      <div className={styles.cartContainer}>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((cartItem, index) => (
              <li key={index}>{cartItem.itemName}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>


      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={styles.orderMenu}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <h2>{item.itemName}</h2>
              <p>Type: {item.type}</p>

              <p>Prices:</p>
              {item.prices && (
                <ul>
                  {typeof item.prices === 'number' ? (
                    <li>{`$${item.prices.toFixed(2)}`}</li>
                  ) : (
                    Object.entries(item.prices).map(([size, price]) => (
                      <li key={size}>{`${size}: $${typeof price === 'number' ? price.toFixed(2) : 'N/A'}`}</li>
                    ))
                  )}
                </ul>
              )}

              <div className={styles.orderButton}>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>

              {/* Add other details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
