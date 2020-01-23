var dt = new Date();

function RenderDate() {
  var day = dt.getDay();
  var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  var today = new Date();
  var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  document.getElementById("date_str").innerHTML = dt.toLocaleDateString();
  document.getElementById("month").innerHTML = months[dt.getMonth()];
  var cells = "";
  for (x = day; x > 2; x--) {
    cells += "<div class='prev_month'>" + (prevDate - x + 3) + "</div>";
  }
  for (i = 1; i <= endDate; i++) {
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      cells += "<div class='today'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }
  document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
  if(para == 'prev'){
    dt.setMonth(dt.getMonth() - 1);
  }else if(para == 'next') {
    dt.setMonth(dt.getMonth() + 1);
  }
  RenderDate();
}