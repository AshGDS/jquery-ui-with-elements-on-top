$(function() {

    var min_year_value = 974;
    var max_year_value = 2100;

    function get_slider_values() {
        return [$slider.slider("values", 0), $slider.slider("values", 1)]
    }

    function update_slider_labels(ui) {
        var start_year_value = get_slider_values[0] || min_year_value,
            end_year_value = get_slider_values[1] || max_year_value;

        if (ui) {
            start_year_value = ui.values[0];
            end_year_value = ui.values[1];
        }

        $('.ui-slider-handle').first().attr('data-year', start_year_value);
        $('.ui-slider-handle').last().attr('data-year', end_year_value);
    }

    var $slider = $('#slider');

    $slider.slider({
        range: true,
        min: 974,
        max: 2100,
        values: [974, 2100],
        slide: function(event, ui) {
            update_slider_labels(ui);
        }
    });
     update_slider_labels();
    function place_star(year) {

    	var $star = $('.star');
    	var $relative_div = $('.relative');

        // Star position
        var year_to_place_star = year;

        // Amount of years that exist in the slider (1126);
        var years = max_year_value - min_year_value;

        /* Minus the min year (974) from the year we want (1950) to get the years "index" from 0 to 1126. 

        E.g. 2100 would be 1126 as it's the highest number.

        974 would be 0 as it's the lowest number. */

        var year_relative_to_sum_of_years = year_to_place_star - min_year_value;



        /* Calculate the percentage of width the star takes up relative to the div (e.g. 4%) then divide by 2 to get middle of the star (2%).
        We need this so that the middle pixel of the star appears where 1950 is, and not the first pixel (left) of the star.	*/
        var star_width_offset = (($star.width() / $relative_div.width()) * 100) / 2;
        var star_width_offset = 0;



        // Set the star's position as a percentage. 
        var star_position = ((year_relative_to_sum_of_years / years) * 100) - star_width_offset;


        $star.css('left', `${star_position}%`)

    
    }

    place_star(1950);

    var $star_positioner = $('input[name=star-positioner]');

    $star_positioner.on('change', function(e) {

    	var new_position = parseInt($star_positioner.val())
    	
    	place_star(new_position)

    });





})
