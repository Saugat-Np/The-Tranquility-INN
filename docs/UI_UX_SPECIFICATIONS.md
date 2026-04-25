# TRANQUILITY INN - UI/UX DESIGN SPECIFICATIONS

## PAGE-BY-PAGE DESIGN GUIDE

---

## 1. LANDING PAGE (Home)

### Header Section
```
┌─────────────────────────────────────────────────────────┐
│  LOGO          MENU          [PHONE]  [LOGIN]           │
│                                                         │
│           HERO SECTION                                  │
│    "Experience Paradise in Pokhara"                     │
│                                                         │
│    Background: Beautiful mountain/lake image           │
│    CTA Buttons: "Book Now" (Gold) | "Explore" (Dark)   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Featured Services Section
```
┌─────────────────────────────────────────────────────────┐
│            ✨ FEATURED SERVICES ✨                       │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │🛏️ ROOMS │  │🧗 EVENTS │  │🍽️ MEALS │             │
│  │ Luxury   │  │Adventure │  │Authentic│             │
│  │Cottages  │  │ Tours    │  │Nepali   │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │⭐ 4.8    │  │👥 5000+  │  │🏆 Award  │             │
│  │Rating    │  │Guests    │  │Winning   │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Quick Booking Widget
```
┌─────────────────────────────────────────────────────────┐
│            QUICK BOOKING FORM                           │
│                                                         │
│  [Check In Date]  [Check Out Date]  [Guests]  [🔍]    │
│                                                         │
│  [Service Type ▼]  [Budget Range ▼]                    │
│                                                         │
│              [SEARCH NOW] Button (Gold)                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Featured Rooms/Events/Food
```
┌─────────────────────────────────────────────────────────┐
│  📍 FEATURED ROOMS      [View All →]                    │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ Image   │  │ Image   │  │ Image   │  │ Image   │   │
│  │ Deluxe  │  │Standard │  │Cottage  │  │Premium  │   │
│  │ Room    │  │ Room    │  │         │  │ Suite   │   │
│  │⭐⭐⭐⭐⭐ │  │⭐⭐⭐⭐⭐ │  │⭐⭐⭐⭐⭐ │  │⭐⭐⭐⭐⭐ │   │
│  │$150/nt  │  │$99/nt   │  │$120/nt  │  │$200/nt  │   │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Testimonials Section
```
┌─────────────────────────────────────────────────────────┐
│           💬 WHAT GUESTS SAY                            │
│                                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │ "Amazing experience! Beautiful views..."      │    │
│  │ - John Doe ⭐⭐⭐⭐⭐                              │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │ "Perfect for adventure lovers!"               │    │
│  │ - Jane Smith ⭐⭐⭐⭐⭐                            │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Newsletter Section
```
┌─────────────────────────────────────────────────────────┐
│    GET EXCLUSIVE DEALS!                                 │
│    [Email Input _______________]  [SUBSCRIBE]          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 2. ROOMS PAGE

### Layout
```
┌─────────────────────────────────────────────────────────┐
│ [SIDEBAR - FILTERS]       │ [MAIN CONTENT - ROOMS]      │
│                          │                             │
│ Type:                    │ ROOMS LISTING                │
│ ☐ Standard               │ Sort By: [Popular ▼]        │
│ ☐ Deluxe                 │                             │
│ ☐ Cottage                │ ┌─────────┬─────────┐      │
│                          │ │Room 101 │Room 102 │      │
│ Price Range:             │ │ Image   │ Image   │      │
│ $0 ──●─────── $300       │ │⭐⭐⭐⭐⭐ │⭐⭐⭐⭐⭐ │      │
│                          │ │$150     │$120     │      │
│ Location:                │ │[Book]   │[Book]   │      │
│ ☐ Hotel                  │ └─────────┴─────────┘      │
│ ☐ Methlang               │                             │
│                          │ ┌─────────┬─────────┐      │
│ Amenities:               │ │Room 103 │Room 104 │      │
│ ☐ WiFi                   │ │ Image   │ Image   │      │
│ ☐ AC                     │ │⭐⭐⭐⭐⭐ │⭐⭐⭐⭐⭐ │      │
│ ☐ Hot Water              │ │$99      │$180     │      │
│ ☐ TV                     │ │[Book]   │[Book]   │      │
│                          │ └─────────┴─────────┘      │
│ [APPLY FILTER]           │                             │
│                          │ [← PREV] [1 2 3] [NEXT →]  │
│                          │                             │
└─────────────────────────────────────────────────────────┘
```

---

## 3. ROOM DETAIL PAGE

### Layout
```
┌─────────────────────────────────────────────────────────┐
│ ROOM 101 - DELUXE SUITE                                 │
│                                                         │
│ [Image Gallery - Main Image + Thumbnails]              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ LEFT SECTION              │ RIGHT SECTION              │
│                          │                            │
│ Description:             │ BOOKING WIDGET             │
│ "Beautiful room..."      │ Price: $150/night         │
│                          │ Available: ✓              │
│ Amenities:               │                            │
│ ✓ WiFi                   │ [Calendar - Check In]     │
│ ✓ AC                     │ [Calendar - Check Out]    │
│ ✓ Hot Water              │ Guests: [1 ▼] [2 ▼]      │
│ ✓ TV                     │ Rooms: [1 ▼]              │
│ ✓ Mini Bar               │                            │
│                          │ Total: $300               │
│ Capacity: 2-4 persons    │                            │
│                          │ [ADD TO CART]             │
│ Occupancy: Hotel         │                            │
│                          │ Special Requests:         │
│ ────────────────         │ [Text Area]               │
│ REVIEWS ⭐ 4.8 (45)      │                            │
│                          │ [BOOK NOW] Button        │
│ "Great room!" - John     │                            │
│ "Amazing view!" - Jane   │                            │
│                          │                            │
└─────────────────────────────────────────────────────────┘
```

---

## 4. EVENTS PAGE

### Layout (Similar to Rooms)
```
┌─────────────────────────────────────────────────────────┐
│ ADVENTURE EVENTS                                        │
│                                                         │
│ Filter By:                                              │
│ Category: [All ▼] | Difficulty: [All ▼] | Price: [▼]  │
│                                                         │
│ ┌────────────────┐  ┌────────────────┐                 │
│ │🧗 Paragliding  │  │🥾 Trekking     │                │
│ │Duration: 2h    │  │Duration: 1 day │                │
│ │Hard Level      │  │Moderate Level  │                │
│ │$80/person      │  │$50/person      │                │
│ │Slots: 15/20    │  │Slots: 8/15     │                │
│ │⭐⭐⭐⭐⭐       │  │⭐⭐⭐⭐⭐       │                │
│ │[VIEW DETAILS]  │  │[VIEW DETAILS]  │                │
│ └────────────────┘  └────────────────┘                 │
│                                                         │
│ ┌────────────────┐  ┌────────────────┐                 │
│ │🏞️ Hiking       │  │🪂 Bungee       │                │
│ │Duration: 3h    │  │Duration: 30m   │                │
│ │Easy Level      │  │Hard Level      │                │
│ │$35/person      │  │$120/person     │                │
│ │Slots: 25/30    │  │Slots: 5/10     │                │
│ │⭐⭐⭐⭐⭐       │  │⭐⭐⭐⭐⭐       │                │
│ │[VIEW DETAILS]  │  │[VIEW DETAILS]  │                │
│ └────────────────┘  └────────────────┘                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 5. FOOD MENU PAGE

### Layout
```
┌─────────────────────────────────────────────────────────┐
│ 🍽️ LOCAL NEPALI CUISINE                                │
│                                                         │
│ Filter: [All ▼] | [Veg Only] | [Spicy ▼]              │
│                                                         │
│ APPETIZERS                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│ │Samosa    │ │Momo      │ │Pakora    │                │
│ │$8        │ │$10       │ │$7        │                │
│ │Veg | Hot │ │Veg | Mild│ │Veg | Hot │                │
│ │[+ADD]    │ │[+ADD]    │ │[+ADD]    │                │
│ └──────────┘ └──────────┘ └──────────┘                 │
│                                                         │
│ MAIN COURSES                                            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│ │Chicken   │ │Lentil    │ │Paneer    │                │
│ │Chowmein  │ │Dal       │ │Curry     │                │
│ │$15       │ │$8        │ │$12       │                │
│ │[+ADD]    │ │[+ADD]    │ │[+ADD]    │                │
│ └──────────┘ └──────────┘ └──────────┘                 │
│                                                         │
│ DESSERTS & BEVERAGES                                    │
│ [Similar grid layout]                                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 6. SHOPPING CART PAGE

### Layout
```
┌─────────────────────────────────────────────────────────┐
│ SHOPPING CART (3 items)                                 │
│                                                         │
│ ITEMS:                                                  │
│                                                         │
│ 1. Deluxe Room (June 15-17, 2 nights)                  │
│    $150/night × 2 = $300                [❌ Remove]    │
│                                                         │
│ 2. Paragliding Event (June 18, 2 persons)              │
│    $80/person × 2 = $160                [❌ Remove]    │
│                                                         │
│ 3. Food Order (5 items)                                │
│    Samosa × 2, Momo × 1, Dal × 2                       │
│    Qty: [1 ▼]  $42                      [❌ Remove]    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Subtotal:                                    $502       │
│ Taxes & Fees:                               $45        │
│ ─────────────────────────────────────────────          │
│ TOTAL:                                      $547       │
│                                                         │
│ [← CONTINUE SHOPPING]  [PROCEED TO CHECKOUT →]        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 7. CHECKOUT PAGE

### Layout
```
┌─────────────────────────────────────────────────────────┐
│                    CHECKOUT                             │
│                                                         │
│ Step 1: PERSONAL INFO          [✓ Step 2] [○ Step 3]  │
│                                                         │
│ Full Name: [_______________________]                    │
│ Email:     [_______________________]                    │
│ Phone:     [_______________________]                    │
│ Address:   [_______________________]                    │
│                                                         │
│ Step 2: BOOKING DETAILS                                 │
│                                                         │
│ Check-in:  [Calendar Button]    Date: June 15, 2026   │
│ Check-out: [Calendar Button]    Date: June 17, 2026   │
│ Guests:    [1] [2] [3] ✓ [4]                          │
│                                                         │
│ Special Requests:                                       │
│ [Large text area...]                                    │
│                                                         │
│ Step 3: PAYMENT                                         │
│                                                         │
│ Payment Method:                                         │
│ ◉ Credit/Debit Card                                     │
│ ○ PayPal                                                │
│ ○ Khalti                                                │
│ ○ Bank Transfer                                         │
│                                                         │
│ [Card Number Input]                                     │
│ [Expiry] [CVV]                                          │
│                                                         │
│ Order Summary:                                          │
│ Room Booking:     $300                                  │
│ Event Booking:    $160                                  │
│ Food Order:       $42                                   │
│ Taxes & Fees:     $45                                   │
│ ─────────────────────────                              │
│ TOTAL:            $547                                  │
│                                                         │
│ [Cancel]  [← BACK]  [CONFIRM PAYMENT] ✓               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 8. ADMIN DASHBOARD

### Layout
```
┌──────────────────────────────────────────────────────────┐
│  [LOGO] TRANQUILITY INN - ADMIN  │  👤 Admin │ ⚙️ |  🚪 │
├──────────┬──────────────────────────────────────────────┤
│ SIDEBAR  │              MAIN CONTENT                     │
│          │                                              │
│ 📊 Dashboard  │  DASHBOARD OVERVIEW (April 2026)        │
│ 🛏️ Rooms       │                                          │
│ 🧗 Events      │  ┌──────────┬──────────┬──────────┐    │
│ 🍽️ Food       │  │ Revenue  │ Bookings │ Occupancy│    │
│ 📋 Bookings    │  │ $45,200  │ 234      │ 78%      │    │
│ 👥 Users       │  └──────────┴──────────┴──────────┘    │
│ 📊 Analytics   │                                         │
│ ⚙️ Settings    │  RECENT BOOKINGS                        │
│                │  ┌─────────────────────────────────┐   │
│                │  │ Booking #1234                   │   │
│                │  │ John Doe | Room 101             │   │
│                │  │ Status: Confirmed | $300        │   │
│                │  ├─────────────────────────────────┤   │
│                │  │ Booking #1235                   │   │
│                │  │ Jane Smith | Paragliding Event  │   │
│                │  │ Status: Pending | $160          │   │
│                │  └─────────────────────────────────┘   │
│                │                                         │
│                │  [View All Bookings →]                 │
│                │                                         │
└──────────┴──────────────────────────────────────────────┘
```

---

## 9. ROOM MANAGEMENT PAGE (Admin)

### Layout
```
┌──────────────────────────────────────────────────────────┐
│ ROOM MANAGEMENT                    [+ ADD NEW ROOM]      │
│                                                          │
│ Filter: [Type ▼] [Location ▼] [Status ▼] [Search...]   │
│                                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Room# │ Type │ Location │ Price │ Occupancy │ Action│ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ 101   │ Dlx  │ Hotel    │ $150  │ Available │ ✏️❌  │ │
│ │ 102   │ Std  │ Hotel    │ $99   │ Booked   │ ✏️❌  │ │
│ │ 103   │ Cot  │ Methlang │ $120  │ Available │ ✏️❌  │ │
│ │ 104   │ Dlx  │ Hotel    │ $200  │ Maint.   │ ✏️❌  │ │
│ │ 105   │ Std  │ Hotel    │ $99   │ Available │ ✏️❌  │ │
│ │ ...   │ ... │ ...      │ ...   │ ...       │ ...  │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                          │
│ [← PREV] [1 2 3 4 5] [NEXT →]                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Add/Edit Room Form
```
┌──────────────────────────────────────────────────────────┐
│ ADD NEW ROOM / EDIT ROOM                                 │
│                                                          │
│ Room Number: [_______]  Room Type: [Standard ▼]        │
│ Location:    [Hotel ▼]  Price/Night: [$________]       │
│                                                          │
│ Capacity:    [__ persons]                              │
│                                                          │
│ Description: [Large text area...]                       │
│                                                          │
│ Amenities:   [Select multiple]                         │
│ ☑ WiFi  ☑ AC  ☑ Hot Water  ☑ TV  ☑ Mini Bar           │
│ ☐ Gym Access  ☐ Pet Friendly  ☐ Balcony               │
│                                                          │
│ Upload Images: [Choose Files...] [Preview]             │
│ ┌────────┬────────┬────────┐                            │
│ │ Image1 │ Image2 │ Image3 │                            │
│ └────────┴────────┴────────┘                            │
│                                                          │
│ [CANCEL]  [SAVE ROOM]                                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 10. BOOKING MANAGEMENT PAGE (Admin)

### Layout
```
┌──────────────────────────────────────────────────────────┐
│ BOOKING MANAGEMENT                                       │
│                                                          │
│ Filter: [Type ▼] [Status ▼] [Date Range] [Search...]   │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ #ID   │ Guest │ Type │ Dates │ Status │ Total │Act.│ │
│ ├──────────────────────────────────────────────────────┤ │
│ │ 1234  │ John  │ Room │ 6/15- │ ✓ Conf│ $300  │ 👁️ │ │
│ │       │ Doe   │      │ 6/17  │       │       │ 📧 │ │
│ │ 1235  │ Jane  │ Event│ 6/18  │ ⏳ Pnd│ $160  │ ✏️ │ │
│ │       │ Smith │      │       │       │       │ ✓  │ │
│ │ 1236  │ Bob   │ Food │ 6/19  │ ✓ Conf│ $42   │ 🗑️ │ │
│ │       │ Jones │      │       │       │       │    │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ Selected Actions: [Confirm] [Cancel] [Email Invoice]   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 11. ANALYTICS PAGE (Admin)

### Layout
```
┌──────────────────────────────────────────────────────────┐
│ ANALYTICS & REPORTS                                      │
│                                                          │
│ Date Range: [Jun 2026 ▼] [View ▼]                       │
│                                                          │
│ REVENUE DASHBOARD                                        │
│ ┌──────────────────────────────────────────────────┐   │
│ │ Monthly Revenue: $45,200                         │   │
│ │ [CHART - Line Graph showing revenue trend]      │   │
│ └──────────────────────────────────────────────────┘   │
│                                                         │
│ BOOKINGS BREAKDOWN                                      │
│ ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│ │ Rooms      │  │ Events     │  │ Food       │         │
│ │ 156        │  │ 89         │  │ 234        │         │
│ │ $28,400    │  │ $12,100    │  │ $4,700     │         │
│ └────────────┘  └────────────┘  └────────────┘         │
│                                                         │
│ OCCUPANCY RATE                                          │
│ │████████░░ 78% (90 of 115 rooms booked)             │
│                                                         │
│ TOP PERFORMING ITEMS                                    │
│ 1. Paragliding Event - $12,100 revenue                  │
│ 2. Deluxe Room - $11,200 revenue                        │
│ 3. Chicken Momo - $3,400 revenue                        │
│                                                         │
└──────────────────────────────────────────────────────────┘
```

---

## RESPONSIVE DESIGN GUIDELINES

### Mobile (320px - 640px)
- Single column layout for all pages
- Bottom navigation bar for main sections
- Stacked card layout for listings
- Full-width forms
- Hamburger menu for navigation

### Tablet (641px - 1024px)
- Two column layout where applicable
- Side-by-side card pairs
- Fixed sidebar for admin (can collapse)
- Optimized form widths

### Desktop (1025px+)
- Full multi-column layouts
- Hover effects on interactive elements
- Expanded navigation menu
- Three+ column card grids

---

## INTERACTION PATTERNS

### Buttons
```
Primary (Gold): CTA actions (Book, Submit, Confirm)
Secondary (Dark): Alternative actions (Cancel, Learn More)
Success (Green): Confirmations (Confirmed, Approved)
Danger (Red): Destructive actions (Delete, Cancel)
```

### Forms
```
- Clear labels above inputs
- Inline validation
- Helpful error messages
- Success confirmation messages
- Progress indicators for multi-step forms
```

### Modals & Overlays
```
- Confirmation dialogs for destructive actions
- Image lightbox galleries
- Date/time pickers
- Alert notifications (top-right)
```

---

## ACCESSIBILITY FEATURES

✓ WCAG 2.1 Level AA compliance  
✓ Keyboard navigation support  
✓ Alt text for all images  
✓ ARIA labels for interactive elements  
✓ Color contrast ratio 4.5:1 minimum  
✓ Touch targets minimum 44x44px  
✓ Screen reader compatible  

---

**Design Version**: 1.0  
**Last Updated**: April 2026
