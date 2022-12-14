console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    if (Object.keys(usersDB).includes(email)) {
      setTimeout(() => {
        console.log(`Now we have the data of user: ${email}`);
        resolve({ userEmail: email });
      }, 3000);
    } else {
      setTimeout(() => {
        reject("User not found");
      }, 3000);
    }
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    if (usersDB[email].length !== 0) {
      setTimeout(() => {
        resolve(usersDB[email]);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Videos not found");
      }, 2000);
    }
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    if (video.title) {
      setTimeout(() => {
        resolve(video.title);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Video title not found");
      }, 2000);
    }
  });
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234)
    .then((obj) => {
      console.log("user:", obj.userEmail);
      return getUserVideos(obj.userEmail);
    })
    .then((videosObj) => {
      console.log("videos:", videosObj);
      return videoDetails(videosObj[0]);
    })
    .then((title) => console.log("title:", title))
    .catch((err) => {
      displayError(err);
    });
};

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
