
# 🌾 Farm App

**Farm_App** is a React Native-based mobile application that empowers farmers and agri-enthusiasts with essential tools and data. It includes real-time APMC price listings, crop weather forecasts, educational articles, community posts, and crop-specific treatment information.

---

## 📱 Features

- 📊 **APMC Market Data** – View commodity prices from various Indian states.
- ☁️ **Weather Forecast** – Get temperature and weather conditions for your location.
- 📚 **Articles** – Read agriculture-related educational articles.
- 📝 **Post & Upload** – Share posts and knowledge with the farming community.
- 🌱 **Crop Details** – Explore optimal conditions, diseases, and treatments for crops.
- 🔐 **Login & Signup** – Secure user authentication system.

---

## 📸 Screenshots

 APMC Data 

(![WhatsApp Image 2025-07-05 at 13 47 35_8159101e](https://github.com/user-attachments/assets/44644e48-33b9-470c-812d-bb1709d729c6)

 
 (![WhatsApp Image 2025-07-05 at 13 47 36_2ada07a1](https://github.com/user-attachments/assets/c8dee32d-5c37-40cd-bea3-7fb3d48a74c5)
(![image](https://github.com/user-attachments/assets/08ca395a-9887-4bca-aa50-b9bcb7558cb6)

(![WhatsApp Image 2025-07-05 at 13 47 37_c073eefc](https://github.com/user-attachments/assets/442c4a11-ef83-4e61-9d3d-917e8a53da1d)

(![WhatsApp Image 2025-07-05 at 13 47 37_6a931683](https://github.com/user-attachments/assets/a2db5d4b-52ec-49af-ba04-45cf6c93886d)


(![WhatsApp Image 2025-07-05 at 13 47 36_c1e93948](https://github.com/user-attachments/assets/88322113-4862-42c2-aaf8-f66676f8f272)

> Make sure the images are stored inside the `assets/screenshots/` folder in your project.

---

## 🛠️ Tech Stack

- **React Native** (Expo)
- **Node.js + Express.js** (Backend)
- **MongoDB** (Database)
- **Multer** for image uploads
- **RESTful API**
- **React Navigation**
- **Ionicons** for icons

---

## 📦 Installation & Running

### 🔧 Prerequisites

- Node.js ≥ 14.x
- Expo CLI
- MongoDB installed locally or via Atlas

### 🚀 Backend Setup

```bash
cd server
npm install
node server.js
````

> By default, backend runs on `http://localhost:3002`

### 📱 Frontend Setup

```bash
cd m-farm-app
npm install
npx expo start
```

> The mobile app will launch in Expo Go or your emulator.

---

## 🔗 API Endpoints

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/upload`           | Get all uploaded posts |
| POST   | `/upload`           | Upload image + post    |
| GET    | APMC API (external) | Real-time market data  |

---

## 📂 Project Structure

```
/m-farm-app
├── components/
│   ├── APMC.js
│   ├── WeatherApp.js
│   ├── Post.js
│   ├── Article.js
│   ├── Detail.js
│   ├── Login.js
│   ├── SignUp.js
│   └── AllPosts.js
├── App.js
├── config.js
└── assets/
    └── screenshots/
        ├── login.png
        ├── apmc.png
        ├── detail.png
        ├── weather.png
        ├── posts.png
        └── upload.png
```

---

## 🔐 Permissions Used

* Media Library – for image upload
* Location – for weather data
* Internet – for API calls

---

## 🧠 Future Improvements

* Push Notifications for crop alerts
* Real-time chat between farmers
* Multi-language support
* AI disease detection from plant images

---

## 🙌 Acknowledgements

* [data.gov.in](https://data.gov.in) for APMC data API
* [OpenWeatherMap](https://openweathermap.org/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Expo](https://expo.dev/)

---

## 🧑‍💻 Developer

**Udai Lal Regar**
📧 [udai637643@gmail.com](mailto:udai637643@gmail.com)
📱 +91-6376432919
🌐 [LinkedIn](https://linkedin.com/in/udai-lal-regar-144806240)


