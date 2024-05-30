import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/01/10/15/24/360_F_110152426_L5NOFHFAug9uH4jCKVQZ36mdq043i99t.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    "info": {
      "id": "334228",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Gajuwaka",
      "areaName": "Gajuwaka",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.9,
      "parentId": "721",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹189"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-gajuwaka-vizag-334228",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "67800",
      "name": "Bunnys Family Restaurant",
      "cloudinaryImageId": "dxknlfkvtfmx94f2cwxi",
      "locality": "Kothavalasa",
      "areaName": "Kurmannapalem",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "Chinese"
      ],
      "avgRating": 3.9,
      "parentId": "12847",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bunnys-family-restaurant-kothavalasa-kurmannapalem-vizag-67800",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "423919",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "lznvwoyaslbwwbgq6h9m",
      "locality": "CMR Central Mall",
      "areaName": "Gajuwaka",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "12175",
      "avgRatingString": "4.5",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:20:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-cmr-central-mall-gajuwaka-vizag-423919",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "638021",
      "name": "Delights by INOX",
      "cloudinaryImageId": "pzddraf9ef2lpzvxpqqb",
      "locality": "chiatnya nagar",
      "areaName": "Gajuwaka",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Snacks"
      ],
      "avgRating": 3.3,
      "veg": true,
      "parentId": "385095",
      "avgRatingString": "3.3",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/delights-by-inox-chiatnya-nagar-gajuwaka-vizag-638021",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "790281",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_790281.JPG",
      "locality": "Gajuwaka",
      "areaName": "Vizag",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.1,
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-gajuwaka-vizag-vizag-790281",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "709630",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "909daf097e30cd01d8fd121ddc6de2f6",
      "locality": "Sudhakar bulding",
      "areaName": "Gajuwaka",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 14:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sudhakar-bulding-gajuwaka-vizag-709630",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "696122",
      "name": "Ovenfresh Cakes And Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/7f276cc6-cab8-4b76-b66a-8814cf3e9ff3_696122.jpg",
      "locality": "Gajuwaka",
      "areaName": "Steel Plant",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Sweets",
        "Juices",
        "Bengali",
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "1372",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ovenfresh-cakes-and-desserts-gajuwaka-steel-plant-vizag-696122",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "526798",
      "name": "The Dessert Heaven - Pastry, Brownie and Cakes",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/24/be393804-2d6a-4a9d-80e3-45383be0e346_526798.jpg",
      "locality": "Steel Plant",
      "areaName": "Kurmannapalem",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "506176",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-dessert-heaven-pastry-brownie-and-cakes-steel-plant-kurmannapalem-vizag-526798",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "429771",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Exhibition Road",
      "areaName": "Gajuwaka",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.1,
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹139"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-exhibition-road-gajuwaka-vizag-429771",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "72859",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Pendurthi",
      "areaName": "Gajuwaka",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-pendurthi-gajuwaka-vizag-72859",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "581643",
      "name": "Cheesecakes By CakeZone",
      "cloudinaryImageId": "76d5f4055f9d5796bc7b72dfba8bd92b",
      "locality": "Steel Plant",
      "areaName": "Kurmannapalem",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "348057",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cheesecakes-by-cakezone-steel-plant-kurmannapalem-vizag-581643",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "423918",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
      "locality": "CMR Central Mall",
      "areaName": "Gajuwaka",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:20:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "Ratnesh_Badges/test2.png",
            "shortDescription": "Perfect ice cream delivery",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "Ratnesh_Badges/test2.png",
                  "shortDescription": "Perfect ice cream delivery"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-cmr-central-mall-gajuwaka-vizag-423918",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "321242",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "locality": "Gajuwaka",
      "areaName": "Chaitanya Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "2",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-gajuwaka-chaitanya-nagar-vizag-321242",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "526795",
      "name": "CakeZone Patisserie",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/fdd24b39-4cf1-4ee1-a64e-b8245272fd24_526795.jpg",
      "locality": "Gajuwaka",
      "areaName": "Kurmannapalem",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 4.1,
      "parentId": "7003",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cakezone-patisserie-gajuwaka-kurmannapalem-vizag-526795",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "390655",
      "name": "The Red Box",
      "cloudinaryImageId": "zlx1hsdkqe0eoayx7pmx",
      "locality": "Gajuwaka",
      "areaName": "Gajuwaka",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese"
      ],
      "avgRating": 3.9,
      "parentId": "1636",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-red-box-gajuwaka-vizag-390655",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "323686",
      "name": "Cream Stone Ice Cream",
      "cloudinaryImageId": "e6af7ef8b8ad04f12d748f144b602c0f",
      "areaName": "Gajuwaka",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "289",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cream-stone-ice-cream-gajuwaka-vizag-323686",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "119985",
      "name": "The Thick Shake Factory",
      "cloudinaryImageId": "mircgnth4prtbt1o1zif",
      "locality": " beside Domino's Pizza",
      "areaName": "old gajuwaka ",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages",
        "American"
      ],
      "avgRating": 3.7,
      "veg": true,
      "parentId": "1033",
      "avgRatingString": "3.7",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 22:20:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-thick-shake-factory-beside-dominos-pizza-old-gajuwaka-vizag-119985",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "237342",
      "name": "The Good Bowl",
      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
      "locality": "laxmi nagar",
      "areaName": "Simhachalam",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.7,
      "parentId": "7918",
      "avgRatingString": "3.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 11.1,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-good-bowl-laxmi-nagar-simhachalam-vizag-237342",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "237344",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "vp5jfcq8orjnmogqdmld",
      "locality": "laxmi nagar",
      "areaName": "Simhachalam",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "4925",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 11.1,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-laxmi-nagar-simhachalam-vizag-237344",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "66074",
      "name": "Celebrations Restaurant",
      "cloudinaryImageId": "parxfzqlhvjobxobzbcj",
      "locality": "Thagarapuvalasa",
      "areaName": "Marripalem",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Tandoor",
        "Biryani"
      ],
      "avgRating": 4.1,
      "parentId": "56280",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 11.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "11.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/celebrations-restaurant-thagarapuvalasa-marripalem-vizag-66074",
      "type": "WEBLINK"
    }
  }
];

const RestaurantCard = (props) => {
  // console.log(props);
  const{resData} = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating} Stars</h5>
      <h5>{resData.info.sla.deliveryTime} Minutes</h5>
      <h5>{resData.info.costForTwo}</h5>
    </div>
  );
};



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* passing props */}
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
