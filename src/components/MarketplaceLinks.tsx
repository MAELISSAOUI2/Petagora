export default function MarketplaceLinks() {
  const marketplaces = [
    {
      name: 'Amazon',
      url: 'https://www.amazon.com',
      icon: '🛒'
    },
    {
      name: 'eBay',
      url: 'https://www.ebay.com',
      icon: '🏪'
    },
    {
      name: 'Etsy',
      url: 'https://www.etsy.com',
      icon: '🎨'
    },
    {
      name: 'Shopify',
      url: 'https://www.shopify.com',
      icon: '🛍️'
    }
  ];

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {marketplaces.map((marketplace) => (
        <div
          key={marketplace.name}
          className="flex flex-col items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors h-40"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">{marketplace.icon}</span>
            <span className="mb-3">{marketplace.name}</span>
          </div>
          <button
            onClick={() => handleClick(marketplace.url)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-auto"
          >
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
} 