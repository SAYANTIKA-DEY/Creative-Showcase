
# Creative Showcase

**Creative Showcase** is a responsive web platform for artists to upload and showcase their digital memories or artwork. Users can create accounts, log in, and manage their artwork in a personal dashboard, while the public can view artist profiles and their galleries.  

## 🌐 Live Demo
Check out the live project here: [https://creative-showcase-topaz.vercel.app/](https://creative-showcase-topaz.vercel.app/)

## 🖼 Features

- **Landing Page:** Displays a random selection of user-uploaded images in a mosaic/masonry layout. Includes Login and SignUp buttons.
- **SignUp Page:** New users can register an account securely.
- **Login Page:** Users can log in to access their personal dashboard.
- **User Profile Dashboard:** 
  - Upload new images.
  - View previously uploaded images.
  - Manage profile information.
- **Public User Profile Page:** 
  - Accessible via `/profile/[username]`.
  - Displays that user’s images in a mosaic layout for public viewing.
- Fully responsive design suitable for desktop and mobile devices.

## 💻 Technologies Used

- **Frontend:** react and redux toolkit and router
- **Storage:** Local storage / optional backend integration  
- **Deployment:** Vercel  

## 🚀 Installation & Setup (Local)

1. Clone the repository:
```bash
git clone https://github.com/<your-username>/creative-showcase.git

2. Navigate into the project folder:
cd creative-showcase

3. Install dependencies
npm install

4. Run the development server:
npm start

## Project Structure
src/
├── redux/       → Redux store
├── features/  → auth & images slices
├── pages/     → Landing, Signup, Login, UserProfile, PublicProfile
├── components → ImageCard, ImageUploadForm, Navbar
└── App.jsx 