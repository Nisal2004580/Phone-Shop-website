// Global Variables
let currentSlide = 0
let cart = []
let wishlist = []
let compareList = []
let currentFilter = "all"
const phonesPerPage = 8
let currentPage = 1
let phones = []

// Sample phone data
const phoneData = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "apple",
    category: "flagship",
    price: 1199,
    originalPrice: 1299,
    image: "img01.webp",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.8,
    reviews: 2847,
    badge: "new",
    specs: {
      display: "6.7-inch Super Retina XDR",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 29 hours video playback",
      storage: "128GB/256GB/512GB/1TB",
      os: "iOS 17",
    },
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    description: "The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    category: "flagship",
    price: 1299,
    originalPrice: 1399,
    image: "img02.webp",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.7,
    reviews: 1923,
    badge: "flagship",
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP Telephoto",
      battery: "5000mAh with 45W fast charging",
      storage: "256GB/512GB/1TB",
      os: "Android 14 with One UI 6.1",
    },
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"],
    storageOptions: ["256GB", "512GB", "1TB"],
    description: "The most powerful Galaxy smartphone with S Pen, AI features, and professional cameras.",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "google",
    category: "flagship",
    price: 999,
    originalPrice: 1099,
    image: "img03.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.6,
    reviews: 1456,
    badge: "sale",
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      battery: "5050mAh with 30W fast charging",
      storage: "128GB/256GB/512GB",
      os: "Android 14",
    },
    colors: ["Obsidian", "Porcelain", "Bay"],
    storageOptions: ["128GB", "256GB", "512GB"],
    description: "Pure Android experience with advanced AI photography and Google's latest Tensor chip.",
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "oneplus",
    category: "flagship",
    price: 799,
    originalPrice: 899,
    image: "img04.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.5,
    reviews: 987,
    badge: "sale",
    specs: {
      display: "6.82-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 64MP Periscope + 48MP Ultra Wide",
      battery: "5400mAh with 100W fast charging",
      storage: "256GB/512GB",
      os: "OxygenOS 14 based on Android 14",
    },
    colors: ["Silky Black", "Flowy Emerald", "Pale Green"],
    storageOptions: ["256GB", "512GB"],
    description: "Flagship performance with ultra-fast charging and premium design.",
  },
  {
    id: 5,
    name: "iPhone 15",
    brand: "apple",
    category: "flagship",
    price: 799,
    originalPrice: null,
    image: "img05.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.7,
    reviews: 3421,
    badge: null,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic chip",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "Up to 20 hours video playback",
      storage: "128GB/256GB/512GB",
      os: "iOS 17",
    },
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"],
    storageOptions: ["128GB", "256GB", "512GB"],
    description: "The essential iPhone with Dynamic Island, advanced camera system, and USB-C.",
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    brand: "samsung",
    category: "flagship",
    price: 799,
    originalPrice: null,
    image: "img06.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.6,
    reviews: 2156,
    badge: null,
    specs: {
      display: "6.2-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 12MP Ultra Wide + 10MP Telephoto",
      battery: "4000mAh with 25W fast charging",
      storage: "128GB/256GB/512GB",
      os: "Android 14 with One UI 6.1",
    },
    colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
    storageOptions: ["128GB", "256GB", "512GB"],
    description: "Compact flagship with AI features, excellent cameras, and premium build quality.",
  },
  {
    id: 7,
    name: "Xiaomi 14 Ultra",
    brand: "xiaomi",
    category: "flagship",
    price: 1299,
    originalPrice: null,
    image: "img07.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.4,
    reviews: 743,
    badge: "new",
    specs: {
      display: "6.73-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "50MP Main + 50MP Ultra Wide + 50MP Periscope + 50MP Telephoto",
      battery: "5300mAh with 90W fast charging",
      storage: "512GB/1TB",
      os: "HyperOS based on Android 14",
    },
    colors: ["Black", "White"],
    storageOptions: ["512GB", "1TB"],
    description: "Photography flagship with Leica cameras and premium materials.",
  },
  {
    id: 8,
    name: "OnePlus 12R",
    brand: "oneplus",
    category: "budget",
    price: 499,
    originalPrice: 599,
    image: "img08.jpeg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.3,
    reviews: 654,
    badge: "sale",
    specs: {
      display: "6.78-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main + 8MP Ultra Wide + 2MP Macro",
      battery: "5500mAh with 100W fast charging",
      storage: "128GB/256GB",
      os: "OxygenOS 14 based on Android 14",
    },
    colors: ["Cool Blue", "Iron Gray"],
    storageOptions: ["128GB", "256GB"],
    description: "Flagship performance at an affordable price with ultra-fast charging.",
  },
  {
    id: 9,
    name: "Google Pixel 8a",
    brand: "google",
    category: "budget",
    price: 499,
    originalPrice: null,
    image: "img19.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.4,
    reviews: 1234,
    badge: null,
    specs: {
      display: "6.1-inch OLED",
      processor: "Google Tensor G3",
      camera: "64MP Main + 13MP Ultra Wide",
      battery: "4492mAh with 18W fast charging",
      storage: "128GB/256GB",
      os: "Android 14",
    },
    colors: ["Obsidian", "Porcelain", "Bay", "Aloe"],
    storageOptions: ["128GB", "256GB"],
    description: "Affordable Pixel with flagship camera features and pure Android experience.",
  },
  {
    id: 10,
    name: "Xiaomi Redmi Note 13 Pro",
    brand: "xiaomi",
    category: "budget",
    price: 299,
    originalPrice: 349,
    image: "img20.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.2,
    reviews: 892,
    badge: "sale",
    specs: {
      display: "6.67-inch AMOLED",
      processor: "Snapdragon 7s Gen 2",
      camera: "200MP Main + 8MP Ultra Wide + 2MP Macro",
      battery: "5100mAh with 67W fast charging",
      storage: "128GB/256GB",
      os: "MIUI 14 based on Android 13",
    },
    colors: ["Midnight Black", "Aurora Purple", "Snowflake White"],
    storageOptions: ["128GB", "256GB"],
    description: "High-resolution camera and fast charging in an affordable package.",
  },
  {
    id: 11,
    name: "Huawei P60 Pro",
    brand: "huawei",
    category: "flagship",
    price: 1199,
    originalPrice: null,
    image: "img11.jpg",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.5,
    reviews: 567,
    badge: null,
    specs: {
      display: "6.67-inch LTPO OLED",
      processor: "Snapdragon 8+ Gen 1",
      camera: "48MP Main + 13MP Ultra Wide + 48MP Telephoto",
      battery: "4815mAh with 88W fast charging",
      storage: "256GB/512GB",
      os: "HarmonyOS 3.1",
    },
    colors: ["Rococo Pearl", "Emerald Green", "Violet", "Black"],
    storageOptions: ["256GB", "512GB"],
    description: "Premium flagship with Leica cameras and elegant design.",
  },
  {
    id: 12,
    name: "Samsung Galaxy A54 5G",
    brand: "samsung",
    category: "budget",
    price: 449,
    originalPrice: null,
    image: "img18.webp",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rating: 4.1,
    reviews: 1876,
    badge: null,
    specs: {
      display: "6.4-inch Super AMOLED",
      processor: "Exynos 1380",
      camera: "50MP Main + 12MP Ultra Wide + 5MP Macro",
      battery: "5000mAh with 25W fast charging",
      storage: "128GB/256GB",
      os: "Android 13 with One UI 5.1",
    },
    colors: ["Awesome Graphite", "Awesome Violet", "Awesome White", "Awesome Lime"],
    storageOptions: ["128GB", "256GB"],
    description: "Mid-range smartphone with premium features and reliable performance.",
  },
]

// Initialize phones array
phones = phoneData

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setupEventListeners()
  renderPhones()
  updateCartCount()
  updateWishlistCount()
  updateCompareCount()
  startHeroSlider()
  loadCartFromStorage()
  loadWishlistFromStorage()
  loadCompareFromStorage()
}

// Event Listeners Setup
function setupEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.toggle("fa-bars")
      icon.classList.toggle("fa-times")
    })
  }

  // Search functionality
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", debounce(handleSearch, 300))
  }

  // Cart sidebar
  const cartBtn = document.getElementById("cartBtn")
  const cartSidebar = document.getElementById("cartSidebar")
  const closeCart = document.getElementById("closeCart")
  const overlay = document.getElementById("overlay")

  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      cartSidebar.classList.add("active")
      overlay.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  }

  if (closeCart) {
    closeCart.addEventListener("click", closeCartSidebar)
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      closeCartSidebar()
      closePhoneModal()
      closeCompareModal()
    })
  }

  // Compare button
  const compareBtn = document.getElementById("compareBtn")
  if (compareBtn) {
    compareBtn.addEventListener("click", () => {
      if (compareList.length > 0) {
        showCompareModal()
      } else {
        showMessage("Add phones to compare first!", "error")
      }
    })
  }

  // Phone filters
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentFilter = btn.getAttribute("data-filter")
      currentPage = 1
      renderPhones()
    })
  })

  // Load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMorePhones)
  }

  // Forms
  const newsletterForm = document.getElementById("newsletterForm")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit)
  }

  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Hero Slider Functions
function startHeroSlider() {
  setInterval(() => {
    changeSlide(1)
  }, 5000)
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".hero-slide")
  const indicators = document.querySelectorAll(".indicator")

  slides[currentSlide].classList.remove("active")
  indicators[currentSlide].classList.remove("active")

  currentSlide += direction

  if (currentSlide >= slides.length) {
    currentSlide = 0
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }

  slides[currentSlide].classList.add("active")
  indicators[currentSlide].classList.add("active")
}

function setActiveSlide(n) {
  const slides = document.querySelectorAll(".hero-slide")
  const indicators = document.querySelectorAll(".indicator")

  slides[currentSlide].classList.remove("active")
  indicators[currentSlide].classList.remove("active")

  currentSlide = n - 1

  slides[currentSlide].classList.add("active")
  indicators[currentSlide].classList.add("active")
}

// Phone Functions
function renderPhones() {
  const phonesGrid = document.getElementById("phonesGrid")
  if (!phonesGrid) return

  let filteredPhones = phones

  // Apply filter
  if (currentFilter !== "all") {
    if (currentFilter === "flagship" || currentFilter === "budget") {
      filteredPhones = phones.filter((phone) => phone.category === currentFilter)
    } else {
      filteredPhones = phones.filter((phone) => phone.brand === currentFilter)
    }
  }

  // Calculate pagination
  const startIndex = (currentPage - 1) * phonesPerPage
  const endIndex = currentPage * phonesPerPage
  const displayPhones = filteredPhones.slice(startIndex, endIndex)

  // Render phones
  phonesGrid.innerHTML = displayPhones.map((phone) => createPhoneCard(phone)).join("")

  // Update load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn")
  if (loadMoreBtn) {
    if (endIndex >= filteredPhones.length) {
      loadMoreBtn.style.display = "none"
    } else {
      loadMoreBtn.style.display = "block"
    }
  }
}

function createPhoneCard(phone) {
  const isInWishlist = wishlist.some((item) => item.id === phone.id)
  const isInCompare = compareList.some((item) => item.id === phone.id)
  const stars = generateStars(phone.rating)

  return `
    <div class="phone-card" data-category="${phone.category}" data-brand="${phone.brand}">
      <div class="phone-image">
        <img src="${phone.image}" alt="${phone.name}">
        ${phone.badge ? `<div class="phone-badge ${phone.badge}">${phone.badge}</div>` : ""}
        <div class="phone-actions">
          <button class="action-btn" onclick="toggleWishlist(${phone.id})" title="Add to Wishlist">
            <i class="fas fa-heart ${isInWishlist ? "text-red" : ""}"></i>
          </button>
          <button class="action-btn" onclick="toggleCompare(${phone.id})" title="Compare">
            <i class="fas fa-balance-scale ${isInCompare ? "text-blue" : ""}"></i>
          </button>
          <button class="action-btn" onclick="quickView(${phone.id})" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="phone-info">
        <div class="phone-brand">${phone.brand}</div>
        <h3 class="phone-name">${phone.name}</h3>
        <div class="phone-rating">
          <div class="stars">${stars}</div>
          <span class="rating-text">(${phone.reviews} reviews)</span>
        </div>
        <div class="phone-specs">
          <div class="spec-item">
            <i class="fas fa-microchip"></i>
            <span>${phone.specs.processor.split(" ").slice(0, 2).join(" ")}</span>
          </div>
          <div class="spec-item">
            <i class="fas fa-camera"></i>
            <span>${phone.specs.camera.split(" ")[0]}</span>
          </div>
          <div class="spec-item">
            <i class="fas fa-battery-full"></i>
            <span>${phone.specs.battery.split(" ")[0]}</span>
          </div>
        </div>
        <div class="phone-price">
          <span class="current-price">$${phone.price}</span>
          ${phone.originalPrice ? `<span class="original-price">$${phone.originalPrice}</span>` : ""}
        </div>
        <div class="phone-buttons">
          <button class="btn btn-primary" onclick="addToCart(${phone.id})">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button class="btn btn-outline" onclick="quickView(${phone.id})">
            <i class="fas fa-eye"></i>
            View
          </button>
        </div>
      </div>
    </div>
  `
}

function generateStars(rating) {
  let stars = ""
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star star"></i>'
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt star"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star star empty"></i>'
  }

  return stars
}

function loadMorePhones() {
  currentPage++
  renderPhones()
}

function filterByBrand(brand) {
  currentFilter = brand
  currentPage = 1

  // Update active filter button
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-filter") === brand) {
      btn.classList.add("active")
    }
  })

  renderPhones()
  scrollToPhones()
}

// Cart Functions
function addToCart(phoneId, storage = null, color = null, quantity = 1) {
  const phone = phones.find((p) => p.id === phoneId)
  if (!phone) return

  const selectedStorage = storage || phone.storageOptions[0]
  const selectedColor = color || phone.colors[0]

  const existingItem = cart.find(
    (item) => item.id === phoneId && item.storage === selectedStorage && item.color === selectedColor,
  )

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      ...phone,
      storage: selectedStorage,
      color: selectedColor,
      quantity: quantity,
    })
  }

  updateCartCount()
  updateCartDisplay()
  saveCartToStorage()
  showMessage("Phone added to cart!", "success")
}

function removeFromCart(phoneId, storage, color) {
  cart = cart.filter((item) => !(item.id === phoneId && item.storage === storage && item.color === color))

  updateCartCount()
  updateCartDisplay()
  saveCartToStorage()
}

function updateCartQuantity(phoneId, storage, color, newQuantity) {
  const item = cart.find((item) => item.id === phoneId && item.storage === storage && item.color === color)

  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(phoneId, storage, color)
    } else {
      item.quantity = newQuantity
      updateCartCount()
      updateCartDisplay()
      saveCartToStorage()
    }
  }
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems")
  const cartSubtotal = document.getElementById("cartSubtotal")
  const cartTax = document.getElementById("cartTax")
  const cartTotal = document.getElementById("cartTotal")

  if (!cartItems) return

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Add some phones to get started!</p>
        <button class="btn btn-primary" onclick="closeCartSidebar(); scrollToPhones()">
          Continue Shopping
        </button>
      </div>
    `
    if (cartSubtotal) cartSubtotal.textContent = "$0.00"
    if (cartTax) cartTax.textContent = "$0.00"
    if (cartTotal) cartTotal.textContent = "$0.00"
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-details">
          ${item.storage} | ${item.color}
        </div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, '${item.storage}', '${item.color}', ${item.quantity - 1})">-</button>
          <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, '${item.storage}', '${item.color}', parseInt(this.value))">
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, '${item.storage}', '${item.color}', ${item.quantity + 1})">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.storage}', '${item.color}')" title="Remove item">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toFixed(2)}`
  if (cartTax) cartTax.textContent = `$${tax.toFixed(2)}`
  if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`
}

function closeCartSidebar() {
  const cartSidebar = document.getElementById("cartSidebar")
  const overlay = document.getElementById("overlay")

  if (cartSidebar) cartSidebar.classList.remove("active")
  if (overlay) overlay.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Wishlist Functions
function toggleWishlist(phoneId) {
  const phone = phones.find((p) => p.id === phoneId)
  if (!phone) return

  const existingIndex = wishlist.findIndex((item) => item.id === phoneId)

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1)
    showMessage("Removed from wishlist", "success")
  } else {
    wishlist.push(phone)
    showMessage("Added to wishlist!", "success")
  }

  updateWishlistCount()
  saveWishlistToStorage()
  renderPhones() // Re-render to update heart icons
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlistCount")
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length
  }
}

// Compare Functions
function toggleCompare(phoneId) {
  const phone = phones.find((p) => p.id === phoneId)
  if (!phone) return

  const existingIndex = compareList.findIndex((item) => item.id === phoneId)

  if (existingIndex > -1) {
    compareList.splice(existingIndex, 1)
    showMessage("Removed from comparison", "success")
  } else {
    if (compareList.length >= 3) {
      showMessage("You can compare up to 3 phones only", "error")
      return
    }
    compareList.push(phone)
    showMessage("Added to comparison!", "success")
  }

  updateCompareCount()
  saveCompareToStorage()
  renderPhones() // Re-render to update compare icons
}

function updateCompareCount() {
  const compareCount = document.getElementById("compareCount")
  if (compareCount) {
    compareCount.textContent = compareList.length
  }
}

function showCompareModal() {
  const modal = document.getElementById("compareModal")
  const compareContent = document.getElementById("compareContent")

  if (compareList.length === 0) {
    compareContent.innerHTML = `
      <div class="text-center" style="padding: 40px;">
        <i class="fas fa-balance-scale" style="font-size: 48px; color: var(--border-color); margin-bottom: 16px;"></i>
        <h3>No phones to compare</h3>
        <p>Add phones to your comparison list to see them here.</p>
      </div>
    `
  } else {
    compareContent.innerHTML = createCompareTable()
  }

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function createCompareTable() {
  const specs = [
    { key: "display", label: "Display" },
    { key: "processor", label: "Processor" },
    { key: "camera", label: "Camera" },
    { key: "battery", label: "Battery" },
    { key: "storage", label: "Storage" },
    { key: "os", label: "Operating System" },
  ]

  const tableHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th style="width: 200px;">Specifications</th>
          ${compareList.map((phone) => `<th>${phone.name}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Phone</strong></td>
          ${compareList
            .map(
              (phone) => `
            <td class="compare-phone-header">
              <div class="compare-phone-image">
                <img src="${phone.image}" alt="${phone.name}">
              </div>
              <div class="compare-phone-name">${phone.name}</div>
              <div class="compare-phone-price">$${phone.price}</div>
              <button class="btn btn-outline" onclick="removeFromCompare(${phone.id})">Remove</button>
            </td>
          `,
            )
            .join("")}
        </tr>
        <tr>
          <td><strong>Rating</strong></td>
          ${compareList
            .map(
              (phone) => `
            <td>
              <div class="stars">${generateStars(phone.rating)}</div>
              <div>${phone.rating}/5 (${phone.reviews} reviews)</div>
            </td>
          `,
            )
            .join("")}
        </tr>
        ${specs
          .map(
            (spec) => `
          <tr>
            <td><strong>${spec.label}</strong></td>
            ${compareList.map((phone) => `<td>${phone.specs[spec.key]}</td>`).join("")}
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `

  return tableHTML
}

function removeFromCompare(phoneId) {
  const index = compareList.findIndex((item) => item.id === phoneId)
  if (index > -1) {
    compareList.splice(index, 1)
    updateCompareCount()
    saveCompareToStorage()
    showCompareModal() // Refresh the modal
    renderPhones() // Re-render to update compare icons
  }
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Phone Details Modal Functions
function quickView(phoneId) {
  const phone = phones.find((p) => p.id === phoneId)
  if (!phone) return

  const modal = document.getElementById("phoneModal")
  const modalMainImage = document.getElementById("modalMainImage")
  const modalThumbnails = document.getElementById("modalThumbnails")
  const modalPhoneName = document.getElementById("modalPhoneName")
  const modalPrice = document.getElementById("modalPrice")
  const modalOriginalPrice = document.getElementById("modalOriginalPrice")
  const modalStars = document.getElementById("modalStars")
  const modalRatingText = document.getElementById("modalRatingText")
  const modalSpecs = document.getElementById("modalSpecs")
  const modalStorage = document.getElementById("modalStorage")
  const modalColors = document.getElementById("modalColors")
  const modalQuantity = document.getElementById("modalQuantity")

  // Update modal content
  if (modalMainImage) modalMainImage.src = phone.image
  if (modalThumbnails) {
    modalThumbnails.innerHTML = phone.images
      .map(
        (img, index) =>
          `<div class="thumbnail ${index === 0 ? "active" : ""}" onclick="changeMainImage('${img}', this)">
            <img src="${img}" alt="Phone image ${index + 1}">
          </div>`,
      )
      .join("")
  }
  if (modalPhoneName) modalPhoneName.textContent = phone.name
  if (modalPrice) modalPrice.textContent = `$${phone.price}`
  if (modalOriginalPrice) {
    modalOriginalPrice.textContent = phone.originalPrice ? `$${phone.originalPrice}` : ""
    modalOriginalPrice.style.display = phone.originalPrice ? "inline" : "none"
  }
  if (modalStars) modalStars.innerHTML = generateStars(phone.rating)
  if (modalRatingText) modalRatingText.textContent = `${phone.rating}/5 (${phone.reviews} reviews)`
  if (modalSpecs) {
    modalSpecs.innerHTML = `
      <div class="spec-item">
        <i class="fas fa-microchip"></i>
        <span>${phone.specs.processor.split(" ").slice(0, 2).join(" ")}</span>
      </div>
      <div class="spec-item">
        <i class="fas fa-camera"></i>
        <span>${phone.specs.camera.split(" ")[0]}</span>
      </div>
      <div class="spec-item">
        <i class="fas fa-battery-full"></i>
        <span>${phone.specs.battery.split(" ")[0]}</span>
      </div>
    `
  }
  if (modalStorage)
    modalStorage.innerHTML = phone.storageOptions
      .map((storage) => `<option value="${storage}">${storage}</option>`)
      .join("")
  if (modalColors)
    modalColors.innerHTML = phone.colors.map((color) => `<option value="${color}">${color}</option>`).join("")
  if (modalQuantity) modalQuantity.value = 1

  // Show modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function changeMainImage(src, thumbnail) {
  const modalMainImage = document.getElementById("modalMainImage")
  if (modalMainImage) modalMainImage.src = src

  const thumbnails = document.querySelectorAll(".thumbnail")
  thumbnails.forEach((t) => t.classList.remove("active"))
  if (thumbnail) thumbnail.classList.add("active")
}

function closePhoneModal() {
  const modal = document.getElementById("phoneModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function (...args) {
    
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

function handleSearch(query) {
  // Implement search functionality here
}

function handleNewsletterSubmit(event) {
  event.preventDefault()
  // Implement newsletter form submission here
}

function handleContactSubmit(event) {
  event.preventDefault()
  // Implement contact form submission here
}

function scrollToPhones() {
  const phonesSection = document.getElementById("phonesSection")
  if (phonesSection) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const targetPosition = phonesSection.offsetTop - headerHeight - 20

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem("cart")
  if (storedCart) {
    cart = JSON.parse(storedCart)
  }
}

function loadWishlistFromStorage() {
  const storedWishlist = localStorage.getItem("wishlist")
  if (storedWishlist) {
    wishlist = JSON.parse(storedWishlist)
  }
}

function loadCompareFromStorage() {
  const storedCompare = localStorage.getItem("compare")
  if (storedCompare) {
    compareList = JSON.parse(storedCompare)
  }
}

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function saveWishlistToStorage() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

function saveCompareToStorage() {
  localStorage.setItem("compare", JSON.stringify(compareList))
}

function showMessage(message, type) {
  const messageContainer = document.getElementById("messageContainer")
  if (messageContainer) {
    messageContainer.innerHTML = `
      <div class="message ${type}">
        ${message}
      </div>
    `
    setTimeout(() => {
      messageContainer.innerHTML = ""
    }, 3000)
  }
}
