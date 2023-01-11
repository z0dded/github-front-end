const submitUsername = document.querySelector(".submituser");
const userName = document.querySelector(".submituser__username");
const UserDoesNotExist = document.querySelector(".user-does-not-exist");
const userProfile = document.querySelector(".userprofile");
const userIcon = document.querySelector(".userprofile__icon");
const userLogin = document.querySelector(".userprofile__login");
const userBio = document.querySelector(".userprofile__bio");
const userLocation = document.querySelector(".userprofile__location");
const userFollowers = document.querySelector(".userprofile__followers-count");
const userReposCount = document.querySelector(".userprofile__repos-count");

submitUsername.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = `https://api.github.com/users/${userName.value}`;
  console.log(url);

  searchGithubData(url);
});

const searchGithubData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(response.ok);

  if (response.ok) {
    createUserProfile(data);
    userProfile.classList.add("show-userprofile");
    submitUsername.classList.add("hide-submituser");
  } else {
    UserDoesNotExist.innerText = `The username "${userName.value}" does not exist`;
  }
};

const createUserProfile = (response) => {
  userIcon.style.backgroundImage = `url(${response.avatar_url})`;
  userLogin.innerText = response.login;
  userBio.innerHTML =
    response.bio ?? "<div class='bio-not-written'>Bio not written yet</div>";
  userLocation.innerHTML += response.location ?? "Not informed";
  userFollowers.innerText = response.followers;
  userReposCount.innerText = response.public_repos;
};
