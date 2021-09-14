(function ($) {
	
	
	jQuery(window).on('load',function(){
		if(jQuery('#US_Positive').length > 0){ getUSWholeData(); }
		if(jQuery('#CountryDataOwl').length > 0){ getCountryData(); }
		if(jQuery('#CountryStatsDataTable').length > 0){ getCountryStatsDataTable(); }
		if(jQuery('#TopCountryStats').length > 0){ getCountryTopStats(); }
		if(jQuery('.corona-update-in-tab').length > 0){ getCoronaUpdateInTabs(); }
		if(jQuery('.country-select-box').length > 0){ getCountrySelectBox(); }
	});

	jQuery(document).on('change','#CoronaUpdateByCountry',function(){
		getCoronaUpdateByCountry(jQuery(this).val());
	});
	
})(jQuery);;
	
	function getFormattedDate(timestamp)
	{
		var formatted_date;
		var date = new Date(timestamp);
		monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		formatted_date =  monthNames[date.getMonth()] + " " + date.getDate()  + ", " + date.getFullYear();
		return formatted_date;
	}
	
	
	
	
	
	function getGraphicalInfo(cases,deaths,active,recover)
	{
		var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						cases,
						deaths,
						active,
						recover,
					],
					backgroundColor: [
						window.chartColors.red,
						window.chartColors.dark_red,
						window.chartColors.blue,
						window.chartColors.green,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Total Cases',
					'Total Deaths',
					'Total Active',
					'Total Recovered',
				]
			},
			options: {
				responsive: true
			}
		};
			
		/*
		window.onload = function() {
			var ctx = document.getElementById('chart-area').getContext('2d');
			window.myPie = new Chart(ctx, config);
		};*/
		
	}
	
