var vote_1 = 0;
var vote_2 = 0;
var vote_3 = 0;
var vote_4 = 0;
var vote_5 = 0;
var rank_temp = 0;
var dist_temp = '';
var rank_2008 = 0;
var rank_2012 = 0;

fb_share = ['image/fb01.jpg', 'image/fb02.jpg', 'image/fb03.jpg'];

if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 	window.location.href = "http://p.udn.com.tw/upf/newmedia/2016_data/20160115_vote_tako/m/index.html";

}

function tako_scroll () {
		$('html, body').animate({scrollTop: $("#tako").offset().top}, 500);
}

$(document).ready(function(){

	

	$('#share').hover(
		function(){
			$(this).attr('src', 'image/share2.png');
		}, function(){
			$(this).attr('src', 'image/share.png');
	});

	$('#share').click(function(){
		
		FB.ui({
		    method: 'feed',
	    	name: '誰是2016總統大選 神準章魚哥？',
		    caption: '聯合報系新媒體中心製作',
		    description: '我家住在' + dist_temp + '，2008年準度排名第' + rank_2008 + '、2012年準度排名第' + rank_2012 + '!你呢?快來測測你家是不是章魚哥?',
		    link: 'http://p.udn.com.tw/upf/newmedia/2016_data/20160115_vote_tako/index.html',
		    picture: 'http://p.udn.com.tw/upf/newmedia/2016_data/20160115_vote_tako/' + fb_share[rank_temp],
		}, function(response){
			if(response && response.post_id){
				alert('你的結果已經成功分享到塗鴉牆！');
			}else{
				// alert('Post was not published.');
		}
	 });

	});

	$('#btn-dist').attr('disabled', true);
	$('#btn-result').attr('disabled', true);

	$('#y-2008').click(function(){
		$('#r-2008').removeClass('hidden');
		$('#r-2012').addClass('hidden');
		$('#y-2008').css('text-decoration', 'underline');
		$('#y-2008').css('color', 'black');
		$('#y-2012').css('text-decoration', 'none');
		$('#y-2012').css('color', '#9fa0a0');

		$('#pie-dist-2008').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				style:{
	        		fontFamily:'"微軟正黑體",Arial, Helvetica'
	        	}
			},
			title:{
				text: '2008 年 ' + temp + ' 各候選人得票率',
				style:{
					fontSize:'21px'
				}
			},
			tooltip: {
	        	valueSuffix: ' %'
	    	},
			plotOptions:{
				pie:{
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels:{
						enabled:false
					},
					showInLegend: true
				}
			},
	        credits: {
	            enabled: false
	        },
			series:[{
				name: '得票率',
				colorByPoint: true,
				data: [{
					name:'謝長廷/蘇貞昌',
					y: vote_4,
					color: '#4dbb94'
				}, {
					name: '馬英九/蕭萬長',
					y: vote_5,
					color: '#358bc6'
				}]
			}]


		});

		$('#pie-2008').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				style:{
	        		fontFamily:'"微軟正黑體",Arial, Helvetica'
	        	}
			},
			title:{
				text: '2008 年 全國 各候選人得票率',
				style:{
					fontSize:'21px'
				}
			},
			tooltip: {
            	valueSuffix: ' %'
        	},
			plotOptions:{
				pie:{
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels:{
						enabled:false
					},
					showInLegend: true
				}
			},
	        credits: {
	            enabled: false
	        },
			series:[{
				name: '得票率',
				colorByPoint: true,
				data: [{
					name:'謝長廷/蘇貞昌',
					y: 41.55,
					color: '#4dbb94'
				}, {
					name: '馬英九/蕭萬長',
					y: 58.44,
					color: '#358bc6'
				}]
			}]


		});

	});

	$('#y-2012').click(function(){
		$('#r-2008').addClass('hidden');
		$('#r-2012').removeClass('hidden');
		$('#y-2012').css('text-decoration', 'underline');
		$('#y-2012').css('color', 'black');
		$('#y-2008').css('text-decoration', 'none');
		$('#y-2008').css('color', '#9fa0a0');

		$('#pie-2012').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				style:{
	        		fontFamily:'"微軟正黑體",Arial, Helvetica'
	        	}
			},
			title:{
				text: '2012 年 全國 各候選人得票率',
				style:{
					fontSize:'21px'
				}
			},
			tooltip: {
            	valueSuffix: ' %'
        	},
			plotOptions:{
				pie:{
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels:{
						enabled:false
					},
					showInLegend: true
				}
			},
	        credits: {
	            enabled: false
	        },
			series:[{
				name: '得票率',
				colorByPoint: true,
				data: [{
					name:'蔡英文/蘇嘉全',
					y: 45.63,
					color: '#4dbb94'
				}, {
					name: '馬英九/吳敦義',
					y: 51.60,
					color: '#358bc6'
				}, {
					name: '宋楚瑜/林瑞雄',
					y: 2.76,
					color: '#f7dd61'
				}]
			}]


		});


		$('#pie-dist-2012').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				style:{
	        		fontFamily:'"微軟正黑體",Arial, Helvetica'
	        	}
			},
			title:{
				text: '2012 年 ' + temp + ' 各候選人得票率',
				style:{
					fontSize:'21px'
				}
			},
			tooltip: {
            	valueSuffix: ' %'
        	},
			plotOptions:{
				pie:{
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels:{
						enabled:false
					},
					showInLegend: true
				}
			},
	        credits: {
	            enabled: false
	        },
			series:[{
				name: '得票率',
				colorByPoint: true,
				data: [{
					name:'蔡英文/蘇嘉全',
					y: vote_1,
					color: '#4dbb94'
				}, {
					name: '馬英九/吳敦義',
					y: vote_2,
					color: '#358bc6'
				}, {
					name: '宋楚瑜/林瑞雄',
					y: vote_3,
					color: '#f7dd61'
				}]
			}]


		});
	});

	d3.csv('data/dist_list.txt', function(data_dist){
		
		mark = '';
		$('#list-town').empty();

		for(i in data_dist){
			
			if(mark != data_dist[i]['town']){

				temp = '<li><a href="javascript:tako_scroll();">';
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

						temp = '<li><a href="javascript:tako_scroll();">';
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
		dist_temp = temp;
		$('html, body').animate({scrollTop: $("#test-result").offset().top - 30}, 1000);

		d3.csv('data/dist_rank_2012.csv', function(rank_list){

			for(i in rank_list){
				if(rank_list[i]['town'] == temp){
					$('#result-2012 .result-rank').text(rank_list[i]['rank']);
					rank_2012 = rank_list[i]['rank'];

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
					if(parseInt(rank_list[i]['rank']) <= 36){
						$('#result-img').attr('src','image/fb01.jpg');
						rank_temp = 0;
					}
					else if(parseInt(rank_list[i]['rank']) >= 224){
						$('#result-img').attr('src','image/fb02.jpg');
						rank_temp = 1;
					}
					else{
						$('#result-img').attr('src','image/fb03.jpg');
						rank_temp = 2;
					}

					$('#year-select').removeClass('hidden');
					$('#y-2012').css('text-decoration', 'underline');
					$('#y-2012').css('color', 'black');
					$('#share').removeClass('hidden');
					$('#result-img').removeClass('hidden');

					vote_1 = parseFloat(rank_list[i]['vote_1'].slice(0,-2));
					vote_2 = parseFloat(rank_list[i]['vote_2'].slice(0,-2));
					vote_3 = parseFloat(rank_list[i]['vote_3'].slice(0,-2));

					
					$('#pie-2012').highcharts({
						chart: {
							plotBackgroundColor: null,
							plotBorderWidth: null,
							plotShadow: false,
							type: 'pie',
							style:{
				        		fontFamily:'"微軟正黑體",Arial, Helvetica'
				        	}
						},
						title:{
							text: '2012 年 全國 各候選人得票率',
							style:{
								fontSize:'21px'
							}
						},
						tooltip: {
			            	valueSuffix: ' %'
			        	},
						plotOptions:{
							pie:{
								allowPointSelect: true,
								cursor: 'pointer',
								dataLabels:{
									enabled:false
								},
								showInLegend: true
							}
						},
				        credits: {
				            enabled: false
				        },
						series:[{
							name: '得票率',
							colorByPoint: true,
							data: [{
								name:'蔡英文/蘇嘉全',
								y: 45.63,
								color: '#4dbb94'
							}, {
								name: '馬英九/吳敦義',
								y: 51.60,
								color: '#358bc6'
							}, {
								name: '宋楚瑜/林瑞雄',
								y: 2.76,
								color: '#f7dd61'
							}]
						}]


					});


					$('#pie-dist-2012').highcharts({
						chart: {
							plotBackgroundColor: null,
							plotBorderWidth: null,
							plotShadow: false,
							type: 'pie',
							style:{
				        		fontFamily:'"微軟正黑體",Arial, Helvetica'
				        	}
						},
						title:{
							text: '2012 年 ' + temp + ' 各候選人得票率',
							style:{
								fontSize:'21px'
							}
						},
						tooltip: {
			            	valueSuffix: ' %'
			        	},
						plotOptions:{
							pie:{
								allowPointSelect: true,
								cursor: 'pointer',
								dataLabels:{
									enabled:false
								},
								showInLegend: true
							}
						},
				        credits: {
				            enabled: false
				        },
						series:[{
							name: '得票率',
							colorByPoint: true,
							data: [{
								name:'蔡英文/蘇嘉全',
								y: vote_1,
								color: '#4dbb94'
							}, {
								name: '馬英九/吳敦義',
								y: vote_2,
								color: '#358bc6'
							}, {
								name: '宋楚瑜/林瑞雄',
								y: vote_3,
								color: '#f7dd61'
							}]
						}]


					});

				}
			}

		});

		d3.csv('data/dist_rank_2008.csv', function(rank_list){

			for(i in rank_list){
				if(rank_list[i]['town'] == temp){
					$('#result-2008 .result-rank').text(rank_list[i]['rank']);
					
					rank_2008 = rank_list[i]['rank'];

					vote_4 = parseFloat(rank_list[i]['vote_1'].slice(0,-2));
					vote_5 = parseFloat(rank_list[i]['vote_2'].slice(0,-2));

					
				}
			}

		});

		$('#r-2008').addClass('hidden');


	});

});