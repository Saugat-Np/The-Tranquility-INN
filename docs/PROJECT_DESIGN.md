# Tranquility Inn - Hotel & Cottage Booking Platform
## Complete Design & Architecture Document

---

## 🎯 PROJECT OVERVIEW

**Project Name**: Tranquility Inn
**Location**: Methlang Village & Lakeside Pokhara  
**Type**: Hotel & Cottage Booking + Adventure Events + Local Cuisine Platform

### Key Services:
1. **Accommodation**: Hotel rooms & Cottage stays
2. **Local Cuisine**: Authentic Nepali food menu
3. **Adventure Events**: Trekking, Hiking, Paragliding, Bungee, Pokhara Tours
4. **Admin Management**: Full CRUD for all services

---

## 📊 APPLICATION ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERFACE LAYER                     │
├──────────────────┬──────────────────┬──────────────────┤
│   Public Site    │   Booking Page   │   Event Details  │
│   (React)        │   (React)        │   (React)        │
└──────────────────┴──────────────────┴──────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    ADMIN DASHBOARD                           │
├──────────────────┬──────────────────┬──────────────────┤
│  Room Manager    │  Event Manager   │  Menu Manager    │
│  Booking Mgmt    │  Bookings        │  Users           │
└──────────────────┴──────────────────┴──────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    REST API LAYER                            │
├──────────────┬──────────────┬──────────────┬──────────────┤
│  Auth API    │  Room API    │  Event API   │  Food API    │
│  User API    │  Booking API │  Payment API │  Review API  │
└──────────────┴──────────────┴──────────────┴──────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                   DATABASE LAYER                             │
├──────────────┬──────────────┬──────────────┬──────────────┤
│   Users      │   Rooms      │   Events     │   Bookings   │
│   Reviews    │   Food Items │   Payments   │   Admin Logs │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

---

## 🏗️ DATABASE SCHEMA

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  role: "user" | "admin",
  profilePicture: String,
  address: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Rooms Collection
```javascript
{
  _id: ObjectId,
  roomNumber: String (unique),
  roomType: "standard" | "deluxe" | "cottage",
  location: "hotel" | "methlang_cottage",
  description: String,
  capacity: Number (1-6),
  amenities: [String], // WiFi, AC, Hot Water, TV, etc.
  price: Number (per night),
  images: [String], // Array of image URLs
  availableDates: [Date],
  occupancyStatus: "available" | "booked" | "maintenance",
  rating: Number (0-5),
  createdAt: Date,
  updatedAt: Date
}
```

### Events Collection
```javascript
{
  _id: ObjectId,
  eventName: String,
  category: "trekking" | "hiking" | "paragliding" | "bungee" | "tour" | "other",
  description: String,
  location: String,
  difficulty: "easy" | "moderate" | "hard",
  duration: String, // "2 hours", "1 day", "3 days"
  maxParticipants: Number,
  price: Number (per person),
  images: [String],
  schedule: {
    startDate: Date,
    startTime: String,
    meetingPoint: String,
    inclusions: [String],
    exclusions: [String]
  },
  guide: {
    name: String,
    experience: String,
    phone: String
  },
  availableSlots: Number,
  rating: Number (0-5),
  createdAt: Date,
  updatedAt: Date
}
```

### Food Menu Collection
```javascript
{
  _id: ObjectId,
  dishName: String,
  category: "appetizer" | "main" | "dessert" | "beverage",
  cuisine: "nepali" | "asian" | "continental",
  description: String,
  price: Number,
  image: String,
  ingredients: [String],
  isVegetarian: Boolean,
  isSpicy: Boolean,
  availability: Boolean,
  rating: Number (0-5),
  createdAt: Date,
  updatedAt: Date
}
```

### Bookings Collection
```javascript
{
  _id: ObjectId,
  bookingId: String (unique),
  userId: ObjectId (ref: Users),
  bookingType: "room" | "event" | "food",
  roomId: ObjectId (ref: Rooms) [optional],
  eventId: ObjectId (ref: Events) [optional],
  foodItems: [{ foodId: ObjectId, quantity: Number }] [optional],
  
  // For Room Bookings
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  numberOfRooms: Number,
  
  // For Event Bookings
  eventDate: Date,
  numberOfParticipants: Number,
  
  totalPrice: Number,
  status: "pending" | "confirmed" | "cancelled" | "completed",
  paymentStatus: "unpaid" | "paid" | "refunded",
  specialRequests: String,
  contactInfo: {
    name: String,
    email: String,
    phone: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Reviews Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  bookingId: ObjectId (ref: Bookings),
  entityType: "room" | "event" | "food",
  entityId: ObjectId,
  rating: Number (1-5),
  comment: String,
  images: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Payments Collection
```javascript
{
  _id: ObjectId,
  bookingId: ObjectId (ref: Bookings),
  userId: ObjectId (ref: Users),
  amount: Number,
  currency: String,
  paymentMethod: "card" | "paypal" | "esewa" | "other",
  transactionId: String (unique),
  status: "pending" | "success" | "failed",
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎨 UI/UX USER FLOW

### 1. USER JOURNEY (Public Website)

```
Landing Page
    ↓
├─→ Browse Rooms → Room Details → Add to Cart/Book Now
├─→ Browse Events → Event Details → Add to Cart/Book Now
├─→ Browse Menu → Add to Cart
├─→ View Gallery
├─→ Contact Us
└─→ Sign In/Sign Up
    ↓
Shopping Cart Review
    ↓
Checkout (Personal Info → Payment)
    ↓
Booking Confirmation
    ↓
Email Confirmation + Invoice
    ↓
My Bookings / My Orders
    ↓
Review & Rate (After Event/Stay/Meal)
```

### 2. ADMIN JOURNEY

```
Admin Login
    ↓
Dashboard (Analytics Overview)
    ├─→ Room Management
    │   ├─ Add Room
    │   ├─ Edit Room
    │   ├─ Delete Room
    │   ├─ View Bookings
    │   └─ Availability Calendar
    │
    ├─→ Event Management
    │   ├─ Add Event
    │   ├─ Edit Event
    │   ├─ Delete Event
    │   ├─ View Bookings
    │   └─ Manage Guides
    │
    ├─→ Food Menu Management
    │   ├─ Add Dish
    │   ├─ Edit Dish
    │   ├─ Delete Dish
    │   └─ Manage Availability
    │
    ├─→ Booking Management
    │   ├─ View All Bookings
    │   ├─ Confirm Bookings
    │   ├─ Cancel Bookings
    │   └─ Generate Invoices
    │
    ├─→ User Management
    │   ├─ View Users
    │   ├─ Deactivate Users
    │   └─ View User Activity
    │
    └─→ Reports & Analytics
        ├─ Revenue Report
        ├─ Occupancy Rate
        ├─ Popular Events
        └─ Customer Feedback
```

---

## 📱 COMPONENT STRUCTURE

### Frontend Components (Public Site)

```
src/
├── components/
│   ├── Layout/
│   │   ├── NavBar.jsx (responsive with mobile menu)
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx (mobile)
│   │   └── Layout.jsx
│   │
│   ├── Pages/
│   │   ├── Home.jsx (Landing page with hero)
│   │   ├── Rooms.jsx (Room listing page)
│   │   ├── RoomDetail.jsx (Single room details)
│   │   ├── Events.jsx (Events listing)
│   │   ├── EventDetail.jsx (Single event details)
│   │   ├── Menu.jsx (Food menu)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── BookingConfirmation.jsx
│   │   ├── MyBookings.jsx
│   │   ├── Profile.jsx
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── SignUp.jsx
│   │   └── NotFound.jsx
│   │
│   ├── Cards/
│   │   ├── RoomCard.jsx
│   │   ├── EventCard.jsx
│   │   ├── MenuCard.jsx
│   │   ├── BookingCard.jsx
│   │   └── ReviewCard.jsx
│   │
│   ├── Forms/
│   │   ├── BookingForm.jsx
│   │   ├── ReviewForm.jsx
│   │   ├── ContactForm.jsx
│   │   └── FilterForm.jsx
│   │
│   ├── Common/
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Loading.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── SuccessMessage.jsx
│   │   ├── Rating.jsx
│   │   └── ImageGallery.jsx
│   │
│   └── Sections/
│       ├── HeroSection.jsx
│       ├── FeaturesSection.jsx
│       ├── TestimonialsSection.jsx
│       └── CTASection.jsx
│
├── admin/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── Common/
│   │
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── RoomManagement.jsx
│   │   ├── EventManagement.jsx
│   │   ├── FoodManagement.jsx
│   │   ├── BookingManagement.jsx
│   │   ├── UserManagement.jsx
│   │   ├── Analytics.jsx
│   │   └── AdminSettings.jsx
│   │
│   └── forms/
│       ├── RoomForm.jsx
│       ├── EventForm.jsx
│       ├── FoodForm.jsx
│       └── AdminLoginForm.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useFetch.js
│   ├── useCart.js
│   └── useBooking.js
│
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── BookingContext.jsx
│
├── utils/
│   ├── api.js
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
│
└── App.jsx
```

---

## 🎨 DESIGN SYSTEM

### Color Palette
```
Primary: #d4a55a (Gold/Warm)
Secondary: #1a1a1a (Dark)
Accent: #FF9FFC (Pink/Purple)
Success: #10b981 (Green)
Error: #ef4444 (Red)
Warning: #f59e0b (Orange)
Background: #ffffff (White)
Text: #1f2937 (Dark Gray)
```

### Typography
```
Headings: 'Poppins' (Bold, 600-700)
Body: 'Inter' (Regular, 400-500)
Mono: 'Courier New' (Code)
```

### Responsive Breakpoints
```
Mobile: 320px - 640px
Tablet: 641px - 1024px
Desktop: 1025px+
```

---

## 🔐 SECURITY & AUTHENTICATION

1. **JWT Authentication** for user login
2. **Admin Role-Based Access Control (RBAC)**
3. **Password Hashing** (bcrypt)
4. **Email Verification** for new accounts
5. **Payment Security** (SSL/TLS, PCI compliance)
6. **Rate Limiting** on API endpoints
7. **CORS** configuration for cross-origin requests
8. **Input Validation** on all forms

---

## 🚀 FEATURES TO IMPLEMENT

### Phase 1 (MVP - Weeks 1-2)
- [ ] User registration & login
- [ ] Room listing & details
- [ ] Room booking system
- [ ] Payment integration (basic)
- [ ] Basic admin panel for rooms
- [ ] Email notifications

### Phase 2 (Enhancement - Weeks 3-4)
- [ ] Event booking system
- [ ] Event calendar view
- [ ] Food menu & ordering
- [ ] Review & rating system
- [ ] Admin analytics dashboard
- [ ] SMS notifications

### Phase 3 (Advanced - Weeks 5+)
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] Chat with admin
- [ ] Calendar sync integration
- [ ] Mobile app (React Native)
- [ ] Advanced analytics

---

## 📡 API ENDPOINTS

### Auth Endpoints
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
GET    /api/auth/me
```

### Room Endpoints
```
GET    /api/rooms
GET    /api/rooms/:id
POST   /api/rooms (admin)
PUT    /api/rooms/:id (admin)
DELETE /api/rooms/:id (admin)
GET    /api/rooms/:id/availability
```

### Event Endpoints
```
GET    /api/events
GET    /api/events/:id
POST   /api/events (admin)
PUT    /api/events/:id (admin)
DELETE /api/events/:id (admin)
GET    /api/events/:id/availability
```

### Food Endpoints
```
GET    /api/food
GET    /api/food/:id
POST   /api/food (admin)
PUT    /api/food/:id (admin)
DELETE /api/food/:id (admin)
```

### Booking Endpoints
```
POST   /api/bookings
GET    /api/bookings/:id
GET    /api/bookings (user - own bookings)
GET    /api/bookings (admin - all bookings)
PUT    /api/bookings/:id/cancel
```

---

## 🛠️ TECH STACK RECOMMENDATION

**Frontend:**
- React 18
- React Router v6
- Context API + Redux (for complex state)
- Tailwind CSS
- Axios
- React Hook Form
- Date picker library (React Calendar)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT for auth
- Multer for file uploads
- Nodemailer for emails
- Stripe/Khalti for payments

**Deployment:**
- Frontend: Vercel / Netlify
- Backend: Render / Railway
- Database: MongoDB Atlas
- Storage: AWS S3 / Cloudinary

---

## 📋 NEXT STEPS

1. **Week 1**: Set up project structure & create UI components
2. **Week 2**: Implement room booking system
3. **Week 3**: Add event booking & food ordering
4. **Week 4**: Create admin dashboard
5. **Week 5**: Payment integration & testing
6. **Week 6**: Deployment & optimization

---

## 📞 CONTACT & SUPPORT FEATURES

- **Live Chat** widget
- **Email Support**: admin@tranquilityinn.com
- **Phone Support**: Contact page
- **FAQ Section**
- **Chatbot** for common queries

---

**Last Updated**: April 2026
**Version**: 1.0
