window.onload = function () {
  console.log("ready!");

  $("#post_title").change(function (e) {
    console.log(this.value);
  });
};
