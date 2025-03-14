document.addEventListener("DOMContentLoaded", function () {
    const currentUserInput = document.getElementById("currentUser");
    const roomNameInput = document.getElementById("roomName");
    const createRoomBtn = document.getElementById("createRoomBtn");
    const roomList = document.getElementById("roomList");
    const displayUser = document.querySelector("#displayUser span");

    let currentUser = "";
    let chatRooms = [];

    // Update Current User
    currentUserInput.addEventListener("input", function () {
        currentUser = this.value.trim();
        displayUser.textContent = currentUser || "-";
        updateRoomList();
    });

    // Create Room (Prevent Duplicates)
    createRoomBtn.addEventListener("click", function () {
        const roomName = roomNameInput.value.trim();

        if (!roomName || !currentUser) {
            alert("Enter a room name and your username!");
            return;
        }

        // Check if room already exists
        const roomExists = chatRooms.some(room => room.name.toLowerCase() === roomName.toLowerCase());
        if (roomExists) {
            alert("A room with this name already exists. Please choose a different name.");
            return;
        }

        // Create new room
        const newRoom = { 
            name: roomName, 
            owner: currentUser, 
            members: [currentUser] // Owner is also a member
        };
        chatRooms.push(newRoom);
        roomNameInput.value = "";
        updateRoomList();
    });

    // Update Room List
    function updateRoomList() {
        roomList.innerHTML = "";

        chatRooms.forEach((room, index) => {
            const roomBox = document.createElement("div");
            roomBox.classList.add("chat-room");

            let isOwner = room.owner === currentUser;
            let isJoined = room.members.includes(currentUser);

            roomBox.innerHTML = `
                <div>
                    <strong>${room.name}</strong> 
                    <span class="owner-label"> (Owner: ${room.owner})</span>
                    <br>
                    <small>Members: ${room.members.join(", ")}</small>
                </div>
                <div class="actions">
                    ${isJoined ? 
                        `<button disabled class="joined">Joined</button>` : 
                        `<button class="join-btn" onclick="joinRoom(${index})">Join</button>` 
                    }
                    ${isOwner ? `
                        <button class="edit-btn" onclick="editRoom(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteRoom(${index})">Delete</button>
                    ` : ""}
                </div>
            `;
            roomList.appendChild(roomBox);
        });
    }

    // Join Room
    window.joinRoom = function(index) {
        if (!chatRooms[index].members.includes(currentUser)) {
            chatRooms[index].members.push(currentUser);
        }
        updateRoomList();
    };

    // Edit Room (Only Owner)
    window.editRoom = function(index) {
        const newName = prompt("Enter new room name:", chatRooms[index].name);
        
        if (!newName) return;

        // Check if the new name already exists
        const roomExists = chatRooms.some((room, i) => i !== index && room.name.toLowerCase() === newName.toLowerCase());
        if (roomExists) {
            alert("A room with this name already exists. Please choose a different name.");
            return;
        }

        chatRooms[index].name = newName;
        updateRoomList();
    };

    // Delete Room (Only Owner)
    window.deleteRoom = function(index) {
        if (confirm("Are you sure you want to delete this room?")) {
            chatRooms.splice(index, 1);
            updateRoomList();
        }
    };
});
