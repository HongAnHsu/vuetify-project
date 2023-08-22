<template>
  <v-container>
    <v-card-title
      style="
        color: white;
        text-align: center;
        font-size: 42px;
        text-shadow: 0.1em 0.1em 0.15em rgba(255, 255, 255, 0.8)"
    >
      店面資訊
    </v-card-title>
    <v-row class="justify-space-evenly">
      <v-col cols="12" md="5" style="background: rgb(51, 51, 51); text-align: left; font-size: 24px; color: white;">
        <h1 style="text-align: center;text-decoration: underline;font-weight: 1000;">找。漢堡 &nbsp;&nbsp; FoundBurger</h1>
        <br><br>
        <p style="text-align: center ;">
          地址:新北市,土城區,裕民路,92巷21弄12號<br>
          市話:02-2266 6229<br>
          鄰近: 捷運海山站2號出口<br><br>
          營業時間:<br>
          星期一&nbsp;:&nbsp;休息<br>
          星期二&nbsp;:&nbsp;休息<br>
          星期三&nbsp;:&nbsp;11:30–14:30, 17:00–20:30<br>
          星期四&nbsp;:&nbsp;11:30–14:30, 17:00–20:30<br>
          星期五&nbsp;:&nbsp;11:30–14:30, 17:00–20:30<br>
          星期六&nbsp;:&nbsp;10:00–15:00, 17:00–20:00<br>
          星期日&nbsp;:&nbsp;10:00–15:30<br><br>
          </p>
      </v-col>
      <v-col cols="12" md="5" style="padding: 20px; background: rgb(51, 51, 51)">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.40874734349!2d121.44768907599946!3d24.986223240212485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802cbc5eda685%3A0xfbd274a28ad5a73b!2z5om-5ryi5aChIEZvdW5kQnVyZ2VyIOOAjOi_keacn-acieaZguacg-iHqOS8ke-8jOWJjeS-hueUqOmkkOW7uuitsOioguS9jeOAjQ!5e0!3m2!1szh-TW!2stw!4v1692595368956!5m2!1szh-TW!2stw"
          width="100%"
          height="600px"
          style="border: 0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
p{
  font-size: 18px;
  @media (min-width: 576px) {
    font-size: 24px;
  }
}

h1{
  font-size: 30px;
  @media (min-width: 576px) {
    font-size: 40px;
  }
}
</style>
