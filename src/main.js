import Hello from './greeter.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 尝试导入jquery
class Demo1 extends Component {
    render() {
    	
    	console.log("jquery is:" + window.jQuery + ",length:" + $(".test").length);
        return (
            <input defaultValue={this.props.value} />
        )
    }
}


// 尝试导入echarts
var echarts = require('echarts');
//基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('root'));
//绘制图表
myChart.setOption({
 title: { text: 'ECharts 入门示例' },
 tooltip: {},
 xAxis: {
     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
 },
 yAxis: {},
 series: [{
     name: '销量',
     type: 'bar',
     data: [5, 20, 36, 10, 10, 20]
 }]
});

//ReactDOM.render(
////  <Demo1 value={"test"} />,
////	<Hello />,
//	
//    document.getElementById('root')
//);
