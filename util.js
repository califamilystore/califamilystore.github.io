function makeUrl(m, a, c, k) {
  ts = Math.floor(Date.now()/1000) - 21;
  url = "http://www.amazon.com/" + c + "/dp/" + a + "/?ie=UTF8&qid=" + ts;
  url = url + "&m=" + m + "&keywords=" + k;
}
