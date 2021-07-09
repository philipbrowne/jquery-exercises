const $movieList = $('#movielist');
const movieArray = [];
$('form').on('submit', function (e) {
  e.preventDefault();
  const $newMovie = `<li><b>Title:</b> ${$(
    '#title'
  ).val()}   <b>Rating:</b><span class="rating">${$(
    '#rating'
  ).val()}</span>  <button id='removeBtn'>Remove</button></li>`;
  $('');
  $movieList.append($newMovie);
  $('#title').val('');
  $('#rating').val('');
});

$(document).on('click', '#removeBtn', function () {
  $(this).parent().remove();
});

$('#sortAlpha').on('click', function () {
  const $movieListItems = $movieList.children('li').get();
  $movieListItems.sort(function (a, b) {
    const $itemA = $(a).text().toUpperCase();
    const $itemB = $(b).text().toUpperCase();
    return $itemA < $itemB ? -1 : $itemA > $itemB ? 1 : 0;
  });
  $.each($movieListItems, function (i, item) {
    $movieList.append(item);
  });
});

$('#sortNumeric').on('click', function () {
  const $movieListNums = $('.rating').get();
  $movieListNums.sort(function (a, b) {
    const $itemA = $(a);
    const $itemB = $(b);
    return $itemA < $itemB ? -1 : $itemA > $itemB ? 1 : 0;
  });
  console.log($movieListNums.parent());
  //   $.each($movieListNums, function (i, item) {
  //     $movieList.append($item.parent());
  //   });
});
