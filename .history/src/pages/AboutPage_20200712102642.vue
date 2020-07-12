<template>
  <div class="containerAbout">
    <b-row align-h="around" class="aboutHead">
      <b-col cols="2" class="about">
        <b-avatar class="avatarAbout" size="10rem">
          <img src="https://res.cloudinary.com/di0zdzniy/image/upload/v1591349934/chen_lxtirf.jpg" />
        </b-avatar>
        <span class="aboutName">Chen Shoresh</span>
        <div class="aboutUs">
          Third year as a Software And Information System Engineering student in Ben Gurion University.
          Her first site was about her grandmother, and you can find it in the following
          <a
            href="https://sise-web-development-environments.github.io/313560484/"
          >link</a>
        </div>
      </b-col>
      <b-col cols="2" class="about">
        <b-avatar class="avatarAbout" size="10rem">
          <img src="https://res.cloudinary.com/di0zdzniy/image/upload/v1591349829/or_nvatkj.jpg" />
        </b-avatar>
        <span class="aboutName">Or Shoshani</span>
      </b-col>
    </b-row>
    <div class="aboutSite">
      This site was established with love.
      We learned through it about both the web and the cooking world.
      On the site you will find many recipes from different worlds.
      <br />You will fall in love with the world of cooking and baking through personal stories and recipes that hold an entire history and heritage behind them.
      <br />We invite you to browse the site and find the recipes that are right for you.
      <br />In the last two years, we have teamed up on many joint projects, including our latest work, an online Pacman game, which you can find at the following
      <a
        href="https://sise-web-development-environments.github.io/assignment2-313560484-205682800/"
      >link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style>
.containerAbout .avatarAbout img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aboutName {
  color: azure;
  display: block;
  line-height: 16px;
}

.aboutName::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: azure;
  margin-top: 5px;
}
.about {
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: 120px;
}
.aboutHead {
  margin-top: 5%;
}
.avatarAbout {
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
.aboutUs {
  color: antiquewhite;
}

.aboutSite {
  padding-top: 30%;
  text-align: center;
  color: #fff;
}
</style>
