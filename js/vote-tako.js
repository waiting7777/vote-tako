$(document).ready(function(){

	$('#btn-dist').attr('disabled', true);
	$('#btn-result').attr('disabled', true);

	d3.csv('data/dist_list.txt', function(data_dist){
		
		mark = '';
		$('#list-town').empty();

		for(i in data_dist){
			
			if(mark != data_dist[i]['town']){

				temp = '<li><a href="#tako">';
				temp += data_dist[i]['town'];
				temp += '</a></li>';
				mark = data_dist[i]['town'];
				$('#list-town').append(temp);

			}
		}


		$('#list-town li').click(function(){

			$('#btn-town').html($(this).text() + '<img src="image/point.png">');
			$('#btn-dist').attr('disabled', false);

			dist = $(this).text();

			count = 0;

			d3.csv('data/dist_list.txt', function(data_dist){
				$('#list-dist').empty();
				for(i in data_dist){

					if(dist == data_dist[i]['town']){
						
						if(count == 0){
							$('#btn-dist').html('行政區' + '<img src="image/point.png">');
							count += 1;
						}

						temp = '<li><a href="#tako">';
						temp += data_dist[i]['dist'];
						temp += '</a></li>';
						$('#list-dist').append(temp);

					}

				}

			});

		});
	});

	$('#list-dist').delegate('li', 'click', function(){
		$('#btn-dist').html($(this).text() + '<img src="image/point.png">');
		$('#btn-result').attr('disabled', false);
	});

	$('#btn-result').click(function(){

		temp = $('#btn-town').text() + $('#btn-dist').text();

		d3.csv('data/dist_rank_2012.txt', function(rank_list){

			for(i in rank_list){
				if(rank_list[i]['town'] == temp){
					$('#result-2012 .result-rank').text(rank_list[i]['rank']);
					console.log(rank_list[i]['ticket_1']);
					console.log(rank_list[i]['ticket_2']);

					if(parseInt(rank_list[i]['ticket_1']) > parseInt(rank_list[i]['ticket_2'])){
						$('#tako').css('filter', 'grayscale(0%)');
						$('#tako').css('-webkit-filter', 'grayscale(0%)');
						$('#tako').attr('src', 'image/greenoctopus.png');
					}
					else{
						$('#tako').css('filter', 'grayscale(0%)');
						$('#tako').css('-webkit-filter', 'grayscale(0%)');
						$('#tako').attr('src', 'image/blueoctopus.png');
					}
					$('#result-end').css('margin-top', '40px');
					if(parseInt(rank_list[i]['rank']) <= 36){
						$('#result-img').attr('src','image/fb01.jpg');
					}
					else if(parseInt(rank_list[i]['rank']) >= 350){
						$('#result-img').attr('src','image/fb02.jpg');
					}
					else{
						$('#result-img').attr('src','image/fb03.jpg');
					}

				}
			}

		});

		d3.csv('data/dist_rank_2008.txt', function(rank_list){

			for(i in rank_list){
				if(rank_list[i]['town'] == temp){
					$('#result-2008 .result-rank').text(rank_list[i]['rank']);
				}
			}

		});

	});

});