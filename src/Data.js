const data = [
  {
    id: 1,
    brandName: "ACER",
    category: "Laptops",
    productName: "Acer Nitro 5 AN517-54-79L1 Gaming Laptop",
    price: 1119.0,
    image: require("./Assests/Laptops/AcerNitro5AN517.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "Go full throttle with an 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series GPUs1 and the high-speed IPS FHD display with 144Hz refresh and 3ms2 response.",
  },
  {
    id: 2,
    brandName: "MSI",
    category: "Laptops",
    productName: "MSI GF63 Thin Laptop",
    price: 959,
    image: require("./Assests/Laptops/msi-_0035_GF63-Thin-10SCXR-4.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "MSI GF63 Thin 10SC 10th Gen Intel Core i5-10300H, NVIDIA GTX 1650 Max-Q Graphics Card with 4GB GDDR6 VRAM, 8GB RAM, 256GB SSD, 15.6' Full-HD Display, 0.85-inch thin and 1.86Kg weight, Red Backlight Keyboard  1 years warranty,",
  },
  {
    id: 3,
    brandName: "ASUS",
    category: "Laptops",
    productName: "ASUS ROG Zephyrus S Ultra Slim",
    price: 2219,
    image: require("./Assests/Laptops/Asus-ROG-Zephyrus-S-GU502.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "The ROG Zephyrus S is redefining ultra-slim gaming laptops yet again with innovative engineering to cool its 8th Gen Intel Core i7 processor and up to GeForce RTX 2080 with Max-Q design, so you can immerse yourself in its no-compromise 144Hz/3ms display.",
  },
  {
    id: 4,
    brandName: "DELL",
    category: "Laptops",
    productName: "ALIENWARE AREA-51M",
    price: 4523,
    sale: false,
    image: require("./Assests/Laptops/dell-alienware-area-51m-gaming-laptop.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "Experience a 165Hz display with Low Blue Light Technology. Featuring Alienware Cryo-Tech™ cooling and AMD Ryzen™ 5000 Series mobile processor.",
  },
  {
    id: 5,
    brandName: "ACER",
    category: "Laptops",
    productName: "Acer Swift 7 ",
    sale: true,
    price: 1058,
    image: require("./Assests/Laptops/AcerSwift7SF714-52T__1_.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "Elegance and efficiency find the perfect balance in the Swift 7, starting with its incredibly thin 9.95mm chassis. Looks and performance combine in a laptop that sets new standards in compact design. Savor the visuals of a 14” display in a smaller footprint thanks to this minimalist approach.",
  },
  {
    id: 6,
    brandName: "ACER",
    category: "Laptops",
    productName: "Acer Nitro 5 ",
    price: 789.0,
    sale: false,
    image: require("./Assests/Laptops/LD0005846339_1.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "Go full throttle with the Acer Nitro 5 gaming laptop in either 15 or 17-inch models – whether using it as a laptop for casual gaming or ranking up online.",
  },
  {
    id: 7,
    brandName: "HP",
    category: "Laptops",
    productName: "HP ZBook 15u G5 ",
    sale: false,
    price: 1499.0,
    image: require("./Assests/Laptops/41ami1qQ9pL._AC_SY350_.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "Finally, workstation-class power meets thin and light design for executives on-the-go. With advanced features like quad core Intel® Core™ processors and 3D professional graphics, you can view and edit high resolution files from anywhere.",
  },
  {
    id: 8,
    brandName: "Logitech",
    category: "Accessories",
    sale: true,
    productName: "Logitech G430 USB Gaming Headset",
    price: 60.0,
    image: require("./Assests/Accessories/Logitech-G430-500x500-1.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "DTS Headphone: X and Dolby 7.1 surround sound: Experience an immersive 360-degree sound field that lets you hear what you can't see",
  },
  {
    id: 9,
    brandName: "Gamdias",
    sale: false,
    category: "Accessories",
    productName: "Gamdias HEBE M1 Premium Virtual Surround Sound",
    price: 62.0,
    image: require("./Assests/Accessories/Gamdias-HEBE-M1-Ultimate-7.1-1-500x500-1.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "The HEBE M1 RGB Surround Sound Headset is packed with the ultimate 7.1 premium virtual surround sound powered by 50mm speakers along with RGB lighting.",
  },

  {
    id: 10,
    brandName: "Logitech",
    sale: false,
    category: "Accessories",
    productName:
      "Logitech G402 Hyperion Fury Ultra Fast FPS Gaming Mouse 4000 DPI, 1ms Report Time",
    price: 80.0,
    image: require("./Assests/Accessories/logitech-g402-hyperion-fury-gaming-mouse-price-nepal_1.jpg"),
    quantity: 1,
    total: 0,
    shortDesc:
      "Fusion engine high-speed tracking, Length Cable: 2.1m, Durability: Buttons (Left / Right): 20 million clicks ; USB data format: 16 bits/axis ; USB report rate: 1000 Hz (1 ms) ; High-speed clicking ; Dynamic Co-efficient of Friction: 0.09 micro (k)",
  },

  {
    id: 11,
    brandName: "Logitech",
    category: "Accessories",
    productName:
      "Logitech BCC950 All-in-One Webcam and Speakerphone - 1080p video, 1' Screen, In-built Mic",
    price: 400.0,
    image: require("./Assests/Accessories/logitech-conference-cam-bcc950-price-nepal.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "Logitech BCC950 Conference Cam, an All-in-One Webcam and Speakerphone with Full-HD (1080p) video-calling, Integrated full-duplex speakerphone with echo and noise cancellation, Omni-directional Microphone, Remote Control with 3m IR Range- Camera : Full HD 1080p video calling (up to 1920 x 1080 pixels); 720p HD video calling (up to 1280 x 720 pixels) with supported clientsField of View",
  },

  {
    id: 12,
    brandName: "Logitech",
    category: "Accessories",
    productName:
      "Logitech C310 HD WebCam - 720p Video with Noise Reducing Mic, Lighting Correction",
    price: 45.0,
    image: require("./Assests/Accessories/logitech-c310-hd-webcam-price-nepal-laptops-desktops.jpg"),
    sale: true,
    quantity: 1,
    total: 0,
    shortDesc:
      "C310 HD Webcam gives you sharp, smooth video calling (720p/30fps) in a widescreen format. Automatic light correction for clearer, better conference calls.",
  },

  {
    id: 13,
    brandName: "Logitech",
    category: "Accessories",
    productName: "LOGITECH MK235 WIRELESS KEYBOARD AND MOUSE COMBO SET",
    price: 32.0,
    image: require("./Assests/Accessories/mk235_1.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "Full-sized keyboard, ambidextrous mouse—fully wireless and complete. This duo delivers all the functionality you need in one comfortable, durable design that's easy to use and keeps your space nice and clean. Built with Logitech’s known quality standards, MK235 is in it for the long haul.",
  },

  {
    id: 14,
    brandName: "Rapoo",
    category: "Accessories",
    productName:
      "Rapoo V500 Pro Mechanical Gaming RGB Keyboard - Individual Backlit Keys, Spill Resistant",
    price: 55.0,
    image: require("./Assests/Accessories/rapoo-v500-pro-budget-gaming-mechanical-keyboard-price-nepal-rgb-lighting.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "Rapoo V500 Pro Mechanical Gaming RGB Keyboard comes with durable and fully mechanical keys that are also Individually Backlit.",
  },
  {
    id: 15,
    brandName: "DELL",
    category: "Laptops",
    productName:
      "Dell Inspiron 3505 Ryzen5-3450U/8GB RAM/256GB SSD/16.5″ Full HD-Touch/Windows 10 Home",
    price: 700.0,
    image: require("./Assests/Laptops/3505-1-300x300.jpg"),
    sale: false,
    quantity: 1,
    total: 0,
    shortDesc:
      "38.1cm (15 inch) laptop with responsive performance in a sleek design with 2-sided narrow borders, optional PCIe SSDs, Express Charge*, and an AMD Ryzen™ 5 3450U Mobile Processor.",
  },
  {
    id: 16,
    brandName: "ASUS",
    category: "Laptops",
    productName:
      "Asus VivoBook Flip 14 TM420IA Ryzen 3 4300U / 4GB RAM/ 256GB SSD / 14' FHD 360 Touch display / Stylus support",
    price: 750.0,
    image: require("./Assests/Laptops/asus-vivobook-flip-14-price-nepal-tm420ua-budget-convertible.jpg"),
    sale: true,
    quantity: 1,
    total: 0,
    shortDesc:
      "Brand new Asus VivoBook Flip 14 TM420IA with AMD Ryzen 3 4300U Processor, 4GB DDR4 RAM (Expandable up to 16GB), 256GB M.2 NVMe PCIe 3.0 SSD Storage, 14-inch Touch display with Full-HD (1920 x 1080 pixels) resolution, Backlit keyboard, 1.5KG Weight, 0.72-inch thickness, Comes with 2 Years Warranty, Free Asus Bag, Asus Stylus, And Asus Mouse ",
  },
];

export default data;
