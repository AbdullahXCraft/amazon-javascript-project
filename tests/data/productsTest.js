import { Product, Clothing, Appliance } from "../../data/products.js";
describe('test suite: Classes', () => {
  const products = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095,
      keywords: [
        "sports",
        "basketballs"
      ]
    },
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    },
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    }].map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      } else if (productDetails.type === 'appliance') {
        return new Appliance(productDetails);
      } else {
        return new Product(productDetails);
      }
    });
  describe('test suite: Product', () => {
    it('generate objects correctly', () => {
      expect(products[0].id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(products[0].image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
      expect(products[0].name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
      expect(products[0].rating).toEqual({
        stars: 4.5,
        count: 87
      });
      expect(products[0].priceCents).toEqual(1090);
    });
  
    it('get the correct stars Url', () => {
      expect(products[0].getStarsUrl()).toEqual('images/ratings/rating-45.png');
    });
  
    it('get the correct price', () => {
      expect(products[0].getPrice()).toEqual('$10.90');
    });
  });

  describe('test suite: Clothing', () => {
    it('generate objects correctly', () => {
      expect(products[2].id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
      expect(products[2].image).toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
      expect(products[2].name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
      expect(products[2].rating).toEqual({
        stars: 4.5,
        count: 56
      });
      expect(products[2].priceCents).toEqual(799);
      expect(products[2].sizeChartLink).toEqual("images/clothing-size-chart.png");
      expect(products[2] instanceof Clothing);
    });
  
    it('get the correct stars Url', () => {
      expect(products[2].getStarsUrl()).toEqual('images/ratings/rating-45.png');
    });
  
    it('get the correct price', () => {
      expect(products[2].getPrice()).toEqual('$7.99');
    });

    it('display the correct HTML', () => {
      expect(products[2].extraInfoHTML()).toContain('images/clothing-size-chart.png');
    });

  });

  describe('test suite: Appliance', () => {
    it('generate objects correctly', () => {
      expect(products[3].id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
      expect(products[3].image).toEqual("images/products/black-2-slot-toaster.jpg");
      expect(products[3].name).toEqual("2 Slot Toaster - Black");
      expect(products[3].rating).toEqual({
        stars: 5,
        count: 2197
      });
      expect(products[3].priceCents).toEqual(1899);
      expect(products[3].instructionsLink).toEqual("images/appliance-instructions.png");
      expect(products[3].warrantyLink).toEqual("images/appliance-warranty.png");
      expect(products[3] instanceof Appliance);
    });
  
    it('get the correct stars Url', () => {
      expect(products[3].getStarsUrl()).toEqual('images/ratings/rating-50.png');
    });
  
    it('get the correct price', () => {
      expect(products[3].getPrice()).toEqual('$18.99');
    });

    it('display the correct HTML', () => {
      expect(products[3].extraInfoHTML()).toContain('images/appliance-instructions.png');
      expect(products[3].extraInfoHTML()).toContain('images/appliance-warranty.png');
    });

  });
})
