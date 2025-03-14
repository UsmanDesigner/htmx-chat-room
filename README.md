# HTMX Chat Rooms

This is a simple chat room application built using **HTML, CSS, JavaScript**, and **HTMX**. Users can create, join, edit, and delete chat rooms. Each room has an **owner**, and members can join available rooms.

---

## 📌 Features

✅ **User Management**  
- Users can enter their name, which is displayed as the **Current User**.  
- The entered name is used to create and join rooms.  

✅ **Create Chat Rooms**  
- Users can create a new room by providing a **unique room name**.  
- A user **cannot create a room with the same name twice**.  
- The user who creates the room is automatically the **owner** and a **member**.  

✅ **Join Rooms**  
- Any user can join an available chat room.  
- Once joined, the "Join" button is **disabled** for that user.  

✅ **Edit & Delete Rooms**  
- **Only the owner** can edit or delete the chat room.  
- Owners can rename their rooms.  
- Owners can delete their rooms, and they will be removed from the list.  

✅ **UI Enhancements**  
- The chat rooms are displayed as **beautiful boxes** instead of plain lists.  
- Smooth **hover and scaling effects** are added for better UX.  
- Buttons change color based on their function.  

---

## 🚀 How to Use?

1️⃣ Open `index.html` in a browser.  
2️⃣ Enter your name in the **Current User** field.  
3️⃣ Type a **Room Name** and click **Create Room**.  
4️⃣ Click **Join** to enter an existing room.  
5️⃣ If you're the owner, you can **Edit** or **Delete** your room.  

---

## 📂 File Structure
```
📁 ChatRoomsApp/
│── 📄 index.html     # Main HTML file
│── 📄 styles.css     # CSS for styling
│── 📄 script.js      # JavaScript for functionality
│── 📄 README.md      # Documentation (this file)
```

---

## 🎨 UI Preview
| Feature       | Screenshot |
|--------------|------------|
| **Create Room** | ✅ |
| **Join Room** | ✅ |
| **Edit/Delete Room** | ✅ |
| **Responsive Design** | ✅ |

---

## 💻 Technologies Used
- **HTML** – Structure  
- **CSS** – Styling & Responsiveness  
- **JavaScript** – Dynamic Functionality  
- **HTMX** – Lightweight AJAX  

---

## 📌 Future Improvements
🔹 Persistent storage (LocalStorage/Database)  
🔹 Real-time updates using WebSockets  
🔹 User authentication  

---

### 👨‍💻 Developed By:  
**[Your Name]**  
