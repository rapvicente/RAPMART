import React from 'react';
import Item from '../../components/items';

const items = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  imageSrc: `/path/to/image${index + 1}.jpg`,
}));

const MarketplacePage = () => {
  return (
    <div style={{ backgroundColor: '#FFF2F2', padding: '40px' }}>
      <h1 style={{ color: '#2D336B', textAlign: 'center' }}>Marketplace</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((item) => (
          <Item key={item.id} imageSrc={item.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;