const submitUsername = document.querySelector(".submituser");
const userName = document.querySelector(".submituser__username");
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
  userProfile.classList.add("show-userprofile");
  submitUsername.classList.add("hide-submituser");

  // userName.value = "";
  searchGithubData(url);
});

async function searchGithubData(url) {
  const response = await fetch(url).then((res) => res.json());

  createUserProfile(response);
}

const createUserProfile = (response) => {
  userIcon.style.backgroundImage = `url(${response.avatar_url})`;
  userLogin.innerText = response.login;
  userBio.innerHTML =
    response.bio ?? "<div class='bio-not-written'>Bio not written yet</div>";
  userLocation.innerHTML += response.location ?? "Not informed";
  userFollowers.innerText = response.followers;
  userReposCount.innerText = response.public_repos;
};
