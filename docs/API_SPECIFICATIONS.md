# TRANQUILITY INN - API SPECIFICATIONS

## BASE URL
```
Development: http://localhost:5000/api
Production: https://api.tranquilityinn.com/api
```

## RESPONSE FORMAT

### Success Response
```javascript
{
  success: true,
  data: { /* entity data */ },
  message: "Operation successful"
}
```

### Error Response
```javascript
{
  success: false,
  error: "Error message",
  details: {} // Optional error details
}
```

---

## 🔐 AUTHENTICATION ENDPOINTS

### 1. Register User
```
POST /auth/register

Request Body:
{
  name: String (required),
  email: String (required, unique),
  password: String (required, min 8 chars),
  phone: String (required),
  role: "user" (default)
}

Response (201):
{
  success: true,
  data: {
    _id: ObjectId,
    email: String,
    token: JWT,
    refreshToken: JWT
  }
}
```

### 2. Login
```
POST /auth/login

Request Body:
{
  email: String (required),
  password: String (required)
}

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    email: String,
    name: String,
    role: String,
    token: JWT,
    refreshToken: JWT
  }
}
```

### 3. Logout
```
POST /auth/logout
Headers: Authorization: Bearer {token}

Response (200):
{
  success: true,
  message: "Logged out successfully"
}
```

### 4. Refresh Token
```
POST /auth/refresh-token

Request Body:
{
  refreshToken: String
}

Response (200):
{
  success: true,
  data: {
    token: JWT,
    refreshToken: JWT
  }
}
```

### 5. Get Current User
```
GET /auth/me
Headers: Authorization: Bearer {token}

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    name: String,
    email: String,
    phone: String,
    profilePicture: String,
    role: String
  }
}
```

---

## 🛏️ ROOM ENDPOINTS

### 1. Get All Rooms
```
GET /rooms?page=1&limit=10&type=deluxe&location=hotel&minPrice=50&maxPrice=300

Query Parameters:
- page: Number (default: 1)
- limit: Number (default: 10)
- type: String (standard|deluxe|cottage)
- location: String (hotel|methlang_cottage)
- minPrice: Number
- maxPrice: Number
- sortBy: String (price|rating|newest)

Response (200):
{
  success: true,
  data: [
    {
      _id: ObjectId,
      roomNumber: String,
      roomType: String,
      location: String,
      price: Number,
      capacity: Number,
      amenities: [String],
      images: [String],
      rating: Number,
      availableDates: [Date]
    }
  ],
  pagination: {
    total: Number,
    pages: Number,
    currentPage: Number
  }
}
```

### 2. Get Single Room
```
GET /rooms/:id

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    roomNumber: String,
    roomType: String,
    location: String,
    description: String,
    capacity: Number,
    amenities: [String],
    price: Number,
    images: [String],
    rating: Number,
    availableDates: [Date],
    occupancyStatus: String,
    reviews: [
      {
        userId: ObjectId,
        userName: String,
        rating: Number,
        comment: String,
        date: Date
      }
    ]
  }
}
```

### 3. Add Room (Admin)
```
POST /rooms
Headers: Authorization: Bearer {token}
Role: admin

Request Body:
{
  roomNumber: String,
  roomType: String,
  location: String,
  description: String,
  capacity: Number,
  amenities: [String],
  price: Number,
  images: [String] (uploaded via multer)
}

Response (201):
{
  success: true,
  data: { /* room object */ }
}
```

### 4. Update Room (Admin)
```
PUT /rooms/:id
Headers: Authorization: Bearer {token}
Role: admin

Request Body:
{
  /* Same as Add Room */
}

Response (200):
{
  success: true,
  data: { /* updated room */ }
}
```

### 5. Delete Room (Admin)
```
DELETE /rooms/:id
Headers: Authorization: Bearer {token}
Role: admin

Response (200):
{
  success: true,
  message: "Room deleted successfully"
}
```

### 6. Check Room Availability
```
GET /rooms/:id/availability?startDate=2026-06-15&endDate=2026-06-17

Query Parameters:
- startDate: Date (ISO string)
- endDate: Date (ISO string)

Response (200):
{
  success: true,
  data: {
    roomId: ObjectId,
    available: Boolean,
    availableDates: [Date],
    bookedDates: [Date]
  }
}
```

---

## 🧗 EVENT ENDPOINTS

### 1. Get All Events
```
GET /events?page=1&limit=10&category=paragliding&difficulty=hard&minPrice=0&maxPrice=500

Query Parameters:
- page: Number (default: 1)
- limit: Number (default: 10)
- category: String (trekking|hiking|paragliding|bungee|tour|other)
- difficulty: String (easy|moderate|hard)
- minPrice: Number
- maxPrice: Number
- sortBy: String (price|rating|newest|date)

Response (200):
{
  success: true,
  data: [
    {
      _id: ObjectId,
      eventName: String,
      category: String,
      description: String,
      location: String,
      difficulty: String,
      duration: String,
      price: Number,
      images: [String],
      rating: Number,
      maxParticipants: Number,
      availableSlots: Number,
      schedule: {
        startDate: Date,
        startTime: String,
        meetingPoint: String
      },
      guide: {
        name: String,
        experience: String
      }
    }
  ],
  pagination: { /* ... */ }
}
```

### 2. Get Single Event
```
GET /events/:id

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    eventName: String,
    category: String,
    description: String,
    location: String,
    difficulty: String,
    duration: String,
    maxParticipants: Number,
    availableSlots: Number,
    price: Number,
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
      phone: String,
      experience: String
    },
    rating: Number,
    reviews: [/* review objects */]
  }
}
```

### 3. Add Event (Admin)
```
POST /events
Headers: Authorization: Bearer {token}
Role: admin

Request Body:
{
  eventName: String,
  category: String,
  description: String,
  location: String,
  difficulty: String,
  duration: String,
  maxParticipants: Number,
  price: Number,
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
    phone: String,
    experience: String
  }
}

Response (201):
{
  success: true,
  data: { /* event object */ }
}
```

### 4. Update Event (Admin)
```
PUT /events/:id
Headers: Authorization: Bearer {token}
Role: admin

Request Body: /* Same as Add Event */

Response (200):
{
  success: true,
  data: { /* updated event */ }
}
```

### 5. Delete Event (Admin)
```
DELETE /events/:id
Headers: Authorization: Bearer {token}
Role: admin

Response (200):
{
  success: true,
  message: "Event deleted successfully"
}
```

---

## 🍽️ FOOD ENDPOINTS

### 1. Get All Food Items
```
GET /food?page=1&limit=20&category=main&cuisine=nepali&vegetarian=false

Query Parameters:
- page: Number (default: 1)
- limit: Number (default: 20)
- category: String (appetizer|main|dessert|beverage)
- cuisine: String (nepali|asian|continental)
- vegetarian: Boolean
- sortBy: String (price|rating|newest)

Response (200):
{
  success: true,
  data: [
    {
      _id: ObjectId,
      dishName: String,
      category: String,
      cuisine: String,
      price: Number,
      image: String,
      description: String,
      isVegetarian: Boolean,
      isSpicy: Boolean,
      availability: Boolean,
      rating: Number
    }
  ],
  pagination: { /* ... */ }
}
```

### 2. Get Single Food Item
```
GET /food/:id

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    dishName: String,
    category: String,
    cuisine: String,
    description: String,
    price: Number,
    image: String,
    ingredients: [String],
    isVegetarian: Boolean,
    isSpicy: Boolean,
    availability: Boolean,
    rating: Number,
    reviews: [/* review objects */]
  }
}
```

### 3. Add Food Item (Admin)
```
POST /food
Headers: Authorization: Bearer {token}
Role: admin

Request Body:
{
  dishName: String,
  category: String,
  cuisine: String,
  description: String,
  price: Number,
  image: String (file upload),
  ingredients: [String],
  isVegetarian: Boolean,
  isSpicy: Boolean,
  availability: Boolean
}

Response (201):
{
  success: true,
  data: { /* food object */ }
}
```

### 4. Update Food Item (Admin)
```
PUT /food/:id
Headers: Authorization: Bearer {token}
Role: admin

Request Body: /* Same as Add Food Item */

Response (200):
{
  success: true,
  data: { /* updated food item */ }
}
```

### 5. Delete Food Item (Admin)
```
DELETE /food/:id
Headers: Authorization: Bearer {token}
Role: admin

Response (200):
{
  success: true,
  message: "Food item deleted successfully"
}
```

---

## 📋 BOOKING ENDPOINTS

### 1. Create Booking
```
POST /bookings
Headers: Authorization: Bearer {token}

Request Body:
{
  bookingType: String (room|event|food),
  roomId: ObjectId (optional),
  eventId: ObjectId (optional),
  foodItems: [{ foodId: ObjectId, quantity: Number }] (optional),
  
  // For rooms
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  numberOfRooms: Number,
  
  // For events
  eventDate: Date,
  numberOfParticipants: Number,
  
  specialRequests: String,
  contactInfo: {
    name: String,
    email: String,
    phone: String
  }
}

Response (201):
{
  success: true,
  data: {
    _id: ObjectId,
    bookingId: String,
    userId: ObjectId,
    bookingType: String,
    totalPrice: Number,
    status: "pending",
    paymentStatus: "unpaid",
    createdAt: Date
  }
}
```

### 2. Get User's Bookings
```
GET /bookings
Headers: Authorization: Bearer {token}

Query Parameters:
- status: String (pending|confirmed|cancelled|completed)
- bookingType: String (room|event|food)
- sortBy: String (newest|oldest)

Response (200):
{
  success: true,
  data: [
    {
      _id: ObjectId,
      bookingId: String,
      bookingType: String,
      status: String,
      paymentStatus: String,
      totalPrice: Number,
      createdAt: Date,
      // Additional details based on booking type
    }
  ]
}
```

### 3. Get Single Booking
```
GET /bookings/:id
Headers: Authorization: Bearer {token}

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    bookingId: String,
    userId: ObjectId,
    bookingType: String,
    status: String,
    paymentStatus: String,
    totalPrice: Number,
    roomDetails: { /* if room booking */ },
    eventDetails: { /* if event booking */ },
    foodDetails: { /* if food order */ },
    createdAt: Date,
    updatedAt: Date
  }
}
```

### 4. Get All Bookings (Admin)
```
GET /bookings/admin/all
Headers: Authorization: Bearer {token}
Role: admin

Query Parameters:
- page: Number
- status: String
- bookingType: String
- dateFrom: Date
- dateTo: Date

Response (200):
{
  success: true,
  data: [/* booking objects */],
  pagination: { /* ... */ }
}
```

### 5. Update Booking Status (Admin)
```
PUT /bookings/:id/status
Headers: Authorization: Bearer {token}
Role: admin

Request Body:
{
  status: String (pending|confirmed|cancelled|completed)
}

Response (200):
{
  success: true,
  data: { /* updated booking */ }
}
```

### 6. Cancel Booking
```
PUT /bookings/:id/cancel
Headers: Authorization: Bearer {token}

Response (200):
{
  success: true,
  data: {
    bookingId: String,
    status: "cancelled",
    refundAmount: Number
  }
}
```

---

## 💳 PAYMENT ENDPOINTS

### 1. Create Payment
```
POST /payments
Headers: Authorization: Bearer {token}

Request Body:
{
  bookingId: ObjectId,
  amount: Number,
  paymentMethod: String (card|paypal|esewa|khalti),
  paymentDetails: {
    cardNumber: String (if card),
    expiryDate: String,
    cvv: String
  }
}

Response (201):
{
  success: true,
  data: {
    _id: ObjectId,
    transactionId: String,
    status: "pending",
    createdAt: Date
  }
}
```

### 2. Verify Payment
```
POST /payments/verify
Headers: Authorization: Bearer {token}

Request Body:
{
  transactionId: String,
  paymentMethod: String
}

Response (200):
{
  success: true,
  data: {
    transactionId: String,
    status: "success",
    bookingId: ObjectId
  }
}
```

### 3. Get Payment History
```
GET /payments
Headers: Authorization: Bearer {token}

Response (200):
{
  success: true,
  data: [
    {
      _id: ObjectId,
      transactionId: String,
      bookingId: ObjectId,
      amount: Number,
      status: String,
      createdAt: Date
    }
  ]
}
```

---

## ⭐ REVIEW ENDPOINTS

### 1. Add Review
```
POST /reviews
Headers: Authorization: Bearer {token}

Request Body:
{
  bookingId: ObjectId,
  entityType: String (room|event|food),
  entityId: ObjectId,
  rating: Number (1-5),
  comment: String,
  images: [String] (optional)
}

Response (201):
{
  success: true,
  data: {
    _id: ObjectId,
    userId: ObjectId,
    rating: Number,
    comment: String,
    createdAt: Date
  }
}
```

### 2. Get Reviews for Entity
```
GET /reviews?entityType=room&entityId=room123

Query Parameters:
- entityType: String
- entityId: ObjectId
- sortBy: String (newest|oldest|helpful)

Response (200):
{
  success: true,
  data: [
    {
      _id: ObjectId,
      userId: ObjectId,
      userName: String,
      userImage: String,
      rating: Number,
      comment: String,
      images: [String],
      createdAt: Date,
      helpful: Number
    }
  ]
}
```

---

## 👥 USER ENDPOINTS

### 1. Get User Profile
```
GET /users/profile
Headers: Authorization: Bearer {token}

Response (200):
{
  success: true,
  data: {
    _id: ObjectId,
    name: String,
    email: String,
    phone: String,
    profilePicture: String,
    address: String,
    createdAt: Date
  }
}
```

### 2. Update User Profile
```
PUT /users/profile
Headers: Authorization: Bearer {token}

Request Body:
{
  name: String,
  phone: String,
  profilePicture: String,
  address: String
}

Response (200):
{
  success: true,
  data: { /* updated user */ }
}
```

### 3. Change Password
```
PUT /users/change-password
Headers: Authorization: Bearer {token}

Request Body:
{
  currentPassword: String,
  newPassword: String,
  confirmPassword: String
}

Response (200):
{
  success: true,
  message: "Password changed successfully"
}
```

### 4. Get All Users (Admin)
```
GET /users/admin/all
Headers: Authorization: Bearer {token}
Role: admin

Query Parameters:
- page: Number
- search: String
- role: String

Response (200):
{
  success: true,
  data: [/* user objects */],
  pagination: { /* ... */ }
}
```

---

## 📊 ANALYTICS ENDPOINTS

### 1. Dashboard Stats (Admin)
```
GET /analytics/dashboard
Headers: Authorization: Bearer {token}
Role: admin

Response (200):
{
  success: true,
  data: {
    totalRevenue: Number,
    totalBookings: Number,
    totalUsers: Number,
    occupancyRate: Number,
    monthlyRevenue: [{ month: String, amount: Number }],
    topEvents: [{ name: String, bookings: Number }],
    topRooms: [{ number: String, bookings: Number }],
    bookingsByStatus: { confirmed: Number, pending: Number, ... }
  }
}
```

### 2. Revenue Report (Admin)
```
GET /analytics/revenue?dateFrom=2026-06-01&dateTo=2026-06-30&groupBy=day

Query Parameters:
- dateFrom: Date
- dateTo: Date
- groupBy: String (day|week|month)

Response (200):
{
  success: true,
  data: [
    { period: String, revenue: Number, bookings: Number }
  ]
}
```

---

## ERROR CODES

```
200: OK
201: Created
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
409: Conflict (duplicate)
422: Unprocessable Entity
429: Too Many Requests (Rate Limited)
500: Internal Server Error
503: Service Unavailable
```

---

## 🔐 AUTHENTICATION HEADERS

All protected endpoints require:
```
Authorization: Bearer {JWT_TOKEN}
```

---

## RATE LIMITING

- General endpoints: 100 requests/minute
- Payment endpoints: 10 requests/minute
- Auth endpoints: 5 requests/minute

---

**API Version**: 1.0  
**Last Updated**: April 2026
