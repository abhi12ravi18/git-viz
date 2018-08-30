sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("git.vizgit-viz.controller.Main", {
		onInit: function() {
			this._loadForecast();
		},

		_formatDate: function(date) {
			var d = new Date(date),
				month = '' + (d.getMonth() + 1),
				day = '' + d.getDate(),
				year = d.getFullYear();

			if (month.length < 2) {
				month = '0' + month;
			}
			if (day.length < 2){
				day = '0' + day;	
			} 
			return [year, month, day].join('-');
		},

		_mapResults: function(results) {
			var oModel = this.getView().getModel();
			//oModel.setProperty("/city", results.city.name);
			oModel.setProperty("/country", results.city.country);

			var aForecastResults = [];
			for (var i = 0; i < results.list.length; i++) {
				var oTemp = results.list[i].temp;
				var date = this._formatDate(results.list[i].dt * 1000);
				aForecastResults.push({
					date: date,
					temp: oTemp.day,
					units: "Celsius",
					humidity: results.list[i].humidity
				});
			}

			oModel.setProperty("/items", aForecastResults);
		},

		_loadForecast: function() {
			var oView = this.getView();
			var oParams = {
				q: "London",  // Get the weather in london
				units: "metric", 
				//appid: "{YOUR_API_KEY}",  // replace with your API key
				cnt: 16,  // get weather for the next 16 days
				mode: "json"  // get it in JSON format 
			};
			//var sUrl = "/OpenWeather/data/2.5/forecast/daily";
			var sUrl = "/GitHub/users/sap/repos?sort=full_name";
			oView.setBusy(true);

			var self = this;

			$.get(sUrl)
				.done(function(results) {
					oView.setBusy(false);
					//self._mapResults(results);
					//Create JSON model
					var	oData = {
					root: results
				};
				var	oJSONModel = new sap.ui.model.json.JSONModel();
					oJSONModel.setData(oData); 
					self.getView().byId("__table0").setModel(oJSONModel, "gitModel"); 
				})
				.fail(function(err) {
					oView.setBusy(false);
					if (err !== undefined) {
						var oErrorResponse = $.parseJSON(err.responseText);
						sap.m.MessageToast.show(oErrorResponse.message, {
							duration: 6000
						});
					} else {
						sap.m.MessageToast.show("Unknown error!");
					}
				});
				
			// var sUrlContributors = "/GitHub/users/sap/repos?sort=full_name";
			// oView.setBusy(true);

			// var self = this;

			// $.get(sUrl)
			// 	.done(function(results) {
			// 		oView.setBusy(false);
			// 		//self._mapResults(results);
			// 		//Create JSON model
			// 		var	oData = {
			// 		root: results
			// 	};
			// 	var	oJSONModel = new sap.ui.model.json.JSONModel();
			// 		oJSONModel.setData(oData); 
			// 		self.getView().byId("__table0").setModel(oJSONModel, "gitModel"); 
			// 	})
			// 	.fail(function(err) {
			// 		oView.setBusy(false);
			// 		if (err !== undefined) {
			// 			var oErrorResponse = $.parseJSON(err.responseText);
			// 			sap.m.MessageToast.show(oErrorResponse.message, {
			// 				duration: 6000
			// 			});
			// 		} else {
			// 			sap.m.MessageToast.show("Unknown error!");
			// 		}
			// 	});
		}

	});
});