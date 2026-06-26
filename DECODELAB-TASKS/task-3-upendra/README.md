# SportZone - Task 3: Advanced Interactive Sports Hub

##  Overview

SportZone Task 3 is a **fully-featured, interactive sports platform** with advanced functionality including dark mode, a sports quiz, news section, search & filter capabilities, and smooth animations. This is a production-ready website showcasing modern web development practices.

## Premium Features

###  Dark Mode Toggle
- Seamless theme switching
- User preference persistence
- Beautiful dark/light transitions

###  Interactive Quiz Section
- Sports knowledge quiz
- Real-time feedback
- Score tracking

###  News Section
- Latest sports updates
- Sports news feed
- Curated content

###  Search & Filter Bar
- Real-time player search
- Filter by sport (Cricket/Football)
- Quick player discovery

###  Dynamic Hero Section
- Typing animation effect
- Floating card animations
- Emoji ring rotation effect
- Hero badges and chips

###  Responsive Hamburger Menu
- Mobile-friendly navigation
- Smooth open/close transitions
- Touch-optimized

###  Smooth Animations
- Fade-in effects
- Slide transitions
- Hover interactions
- Scroll animations

###  Enhanced UI/UX
- Professional color scheme
- Advanced typography
- Better visual hierarchy
- Interactive buttons
- Tooltip-style information

##  Project Structure

```
task3/
├── index.html              # Full-featured HTML with JavaScript sections
├── style.css               # Advanced CSS with animations and themes
├── script.js               # Interactive functionality
├── virat-kohli.jpg        # Cricket player images
├── rohit-sharma.jpg
├── ms-dhoni.jpg
├── shubman-gill.jpg
├── ravindra-jadeja.jpg
├── jasprit-bumrah.jpg
├── messi.jpg              # Football player images
├── cristiano-ronaldo.jpg
├── mbappe.jpg
├── kevin-de-bruyne.jpg
├── erling-haaland.jpg
└── neymar.jpg
```

##  Key Sections

### 1. **Header & Navigation**
   - Responsive navigation bar with logo
   - Hamburger menu for mobile
   - Dark mode toggle button (🌙)
   - Fixed or sticky positioning

### 2. **Hero Section** 
   - Badge: " India's No.1 Sports Hub"
   - Typing animation effect
   - Description text
   - Dual action buttons:
     - "Explore Players " (Primary)
     - "Take a Quiz " (Secondary)
   - Info chips:
     -  6 Cricketers
     -  6 Footballers
     -  Sports Quiz
   - Animated floating cards
   - Emoji ring rotation effect

### 3. **Players Section** 
   
   **Cricket Players (6 Players)**
   - Virat Kohli - Batsman, 70+ centuries
   - Rohit Sharma - Opener, 3x ODI double centuries
   - MS Dhoni - Wicket-keeper, ICC World Cup winner
   - Shubman Gill - Young talent, emerging star
   - Ravindra Jadeja - All-rounder, skilled fielder
   - Jasprit Bumrah - Pacer, death bowling specialist

   **Football Players (6 Players)**
   - Lionel Messi - 8x Ballon d'Or
   - Cristiano Ronaldo - 5x Ballon d'Or
   - Kylian Mbappé - Young superstar
   - Kevin De Bruyne - Midfielder excellence
   - Erling Haaland - Goal machine
   - Neymar - Skill and flair

   **Card Features:**
   - High-quality player images
   - Player name and role
   - Professional statistics
   - Interactive hover effects
   - Search-filterable layout

### 4. **Statistics Section** 
   - Heading: "Sports by Numbers "
   - Key metrics with visual boxes:
     - Test Matches Played: 100+
     - FIFA World Cups: Multiple
     - FIFA Nations: 200+

### 5. **Quiz Section** 
   - Interactive sports knowledge quiz
   - Multiple-choice questions
   - Real-time score tracking
   - Feedback for each answer
   - Results summary
   - Restart functionality

### 6. **News Section** 
   - Latest sports headlines
   - News articles and updates
   - Curated sports content
   - Date and source information

### 7. **Search & Filter Bar** 
   - Real-time search functionality
   - Filter by sport type
   - Quick player lookup
   - Case-insensitive search

### 8. **Contact Section** 
   - Professional contact form
   - Multiple contact options
   - Social media links
   - Response time expectations

### 9. **Footer**
   - Creator information: Made by UPENDRA
   - Organization credit: DecodeLabs Frontend Internship 2026
   - Copyright: SportZone © 2026 · All rights reserved

##  How to Use

### Opening the Website
1. Navigate to the task3 folder
2. Double-click `index.html` to open in browser
3. **OR** Right-click → "Open with" → Select your browser
4. **OR** Drag the file into your browser window

### Using Dark Mode
- Click the moon icon (🌙) in the top-right corner
- Your preference is saved automatically
- Toggle anytime for comfortable viewing

### Exploring Players
1. Click on "Explore Players " button
2. Scroll to the Players section
3. Hover over cards to see effects
4. Use the search bar to find specific players

### Taking the Quiz
1. Click "Take a Quiz " button
2. Answer all questions
3. View your score
4. Try again to improve

### Using Search & Filter
1. Find the search bar below the hero section
2. Type a player name to search
3. Use dropdown to filter by sport
4. Results update in real-time

### Reading News
- Navigate to the News section
- Read latest sports updates
- Click for more information

##  Technologies Used

### Frontend Technologies
- **HTML5** - Semantic markup with advanced structure
- **CSS3** - Advanced styling with:
  - CSS Variables for theming
  - Flexbox and Grid layouts
  - Keyframe animations
  - Media queries for responsive design
  - Smooth transitions
  - Shadow and gradient effects
- **JavaScript** - Interactive functionality:
  - DOM manipulation
  - Event listeners
  - Local storage for theme persistence
  - Typing animation
  - Search and filter algorithms
  - Quiz logic
  - Smooth scrolling

### Features Implemented
- Dark/Light theme toggle
- Real-time search
- Dynamic filtering
- Quiz game mechanics
- Animation effects
- Responsive behavior
- Local storage integration

##  Interactive Features

### Quiz
- 5 sports questions
- Multiple-choice format
- Instant feedback
- Score display
- Retake option

### Search
- Instant results
- Case-insensitive matching
- Filter by sport
- Visual highlighting

### Animations
- Typing effect in hero
- Floating cards
- Fade-in transitions
- Scroll animations
- Button hover effects

### Theme System
- Dark mode (Night theme)
- Light mode (Day theme)
- Automatic persistence
- Smooth transitions

##  Content Details

### Cricket Players (6 Total)
- Elite batsmen and bowlers
- International cricket statistics
- Career achievements
- Current form updates

### Football Players (6 Total)
- World-class footballers
- Award records
- Achievement highlights
- Club and country information

### Statistics
- 100+ Test Matches Played
- FIFA World Cup editions
- 200+ Nations participating

### Quiz Topics
- Cricket fundamentals
- Football records
- Player achievements
- Sports history

##  Customization Tips

### Adding More Players
```html
1. Add player image to task3 folder
2. Create new card in HTML:
   - Copy existing player card
   - Update image src
   - Change player details
   - Paste in correct section
```

### Modifying Quiz Questions
1. Find quiz section in `script.js`
2. Update questions and answers
3. Adjust scoring logic if needed

### Changing Colors/Theme
1. Open `style.css`
2. Look for CSS Variables section
3. Modify color values
4. Changes apply immediately

### Adding News Articles
1. Locate news section in HTML
2. Add new article cards
3. Update dates and content
4. Style matching existing articles

##  Responsive Breakpoints

- **Desktop** (1200px+) - Full layout, multiple columns
- **Tablet** (768px - 1199px) - 2-column layout, adjusted navigation
- **Mobile** (320px - 767px) - Single column, hamburger menu, touch-optimized

## Complete Feature Comparison

| Feature | Task 1 | Task 2 | Task 3 |
|---------|--------|--------|--------|
| Basic Layout | ✅ | ✅ | ✅ |
| Player Cards | ✅ | ✅ | ✅ |
| Statistics | ✅ | ✅ | ✅ |
| Section Descriptions | ❌ | ✅ | ✅ |
| Player Stats Details | ❌ | ✅ | ✅ |
| Enhanced Styling | ❌ | ✅ | ✅ |
| **Dark Mode** | ❌ | ❌ | ✅ |
| **Quiz Section** | ❌ | ❌ | ✅ |
| **News Section** | ❌ | ❌ | ✅ |
| **Search & Filter** | ❌ | ❌ | ✅ |
| **Animations** | ❌ | ❌ | ✅ |
| **JavaScript Logic** | ❌ | ❌ | ✅ |
| **Hamburger Menu** | ❌ | ❌ | ✅ |
| **Theme Toggle** | ❌ | ❌ | ✅ |
| **Interactive Elements** | ❌ | ✅ | ✅✅ |

##  Future Enhancement Ideas

- User authentication
- Player comparison tool
- Advanced statistics dashboard
- Live match updates
- User comments and ratings
- Share functionality
- API integration
- Database backend

##  Author

Made by **UPENDRA** · DecodeLabs Frontend Internship 2026 · SportZone ©

---
