$(".button").on("click", function() {
  $(".login")
    .addClass("loading")
    .delay(3000)
    .queue(function() {
      $(this).addClass("active");
	setTimeout(function() {
	location.href= "https://fakku.cc/admin/";
	}, 1500);
    });
});
