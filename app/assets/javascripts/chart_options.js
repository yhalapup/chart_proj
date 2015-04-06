var data;
var stackedChartOptions;
var lineChartOptions;

$(function(){
  data = $("#csv").data("csv")

  stackedChartOptions = {
    "colors": ["red", "#428bca"],
    "type": "serial",
    "dataProvider": data,
    "categoryField": "created_at",

    "legend": {
      "maxColumns": 2,
      "position": "top",
      "useGraphSettings": true,
      "markerSize": 20
    },

    "graphs": [{
      "balloonFunction": customTooltip,
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Failed tests count",
      "type": "column",
      "color": "#000000",
      "valueField": "failed_tests_count"
    },{
      "balloonFunction": customTooltip,
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Passed tests count",
      "type": "column",
      "color": "#000000",
      "valueField": "passed_tests_count"
    }],

    "valueAxes": [{ "stackType": "regular" }],

    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left",
      "labelRotation": 60
    }
  }

  lineChartOptions = {
    "colors": ["#000", "#428bca"],
    "type": "serial",
    "dataProvider": data,
    "categoryField": "created_at",

    "legend": {
      "maxColumns": 2,
      "position": "top",
      "useGraphSettings": true,
      "markerSize": 20
    },

    "valueAxes": [{
      "id":"worker_time",
      "axisColor": "#FF6600",
      "axisThickness": 2,
      "gridAlpha": 0,
      "axisAlpha": 1,
      "position": "left"
    }, {
      "id":"bundle_time",
      "axisColor": "#FCD202",
      "axisThickness": 2,
      "gridAlpha": 0,
      "axisAlpha": 1,
      "position": "right"
    }],

    "graphs": [{
      "valueAxis": "worker_time",
      "lineColor": "#FF6600",
      "bullet": "round",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Worker time",
      "valueField": "worker_time",
      "fillAlphas": 0
    }, {
      "valueAxis": "bundle_time",
      "lineColor": "#FCD202",
      "bullet": "square",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Bundle time",
      "valueField": "bundle_time",
      "fillAlphas": 0
    }],

    "categoryAxis": {
      "axisColor": "#DADADA",
      "minorGridEnabled": true,
      "labelRotation": 60
    }
  }
});
