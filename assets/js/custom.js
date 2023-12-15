/*Custom JavaScript*/

$(function() {
  // Initiate masonry grid
  var $grid = $('.place-items-wrapper').masonry({
    temSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  // Initiate imagesLoaded
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });

  var $cloneItems = $grid.find('.grid-item').clone();

  $(".place-filter-btn").click(function () {
    var value = $(this).attr('data-filter');
    $(".place-items-list .active").removeClass('active');
    $(this).addClass('active');

    if (value == "recommended") {
      var $items = $grid.find('.grid-item');
      // remove current items
      $grid.masonry('remove', $items);
      $grid.masonry('layout');
      $grid.append($cloneItems).masonry('appended', $cloneItems);
      $cloneItems = $cloneItems.clone();
      // $('.recommended').show();
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".recommended").not('.' + value).hide();
      $('.recommended').filter('.' + value).show();

      $grid.masonry('layout');
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});
