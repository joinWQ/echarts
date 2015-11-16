define(function (require) {

    'use strict';

    var createListFromArray = require('../helper/createListFromArray');
    var SeriesModel = require('../../model/Series');

    return SeriesModel.extend({

        type: 'series.scatter',

        dependencies: ['grid', 'polar'],

        getInitialData: function (option, ecModel) {
            var list = createListFromArray(option.data, this, ecModel);
            // Not holding the data anymore so it can be removed in momory
            // PENDING
            // option.data = null;

            return list;
        },

        defaultOption: {
            coordinateSystem: 'cartesian2d',
            zlevel: 0,                  // 一级层叠
            z: 2,                       // 二级层叠
            clickable: true,
            legendHoverLink: true,

            // Cartesian coordinate system
            xAxisIndex: 0,
            yAxisIndex: 0,

            // Polar coordinate system
            polarIndex: 0,

            // symbol: null,        // 图形类型
            symbolSize: 10,          // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            // symbolRotate: null,  // 图形旋转控制

            label: {
                normal: {
                    show: false
                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.8
                    // color: 各异
                }
            }
        }
    });
});