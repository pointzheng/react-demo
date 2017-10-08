import React, {Component} from 'react';
import IECharts from 'react-echarts-v3/lib/index.js';

const option = {
  title: {
    text: 'ECharts 入门示例'
  },
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
};
 
const onEvents = {
  'click': function(params) {
    // the 'this' variable can get echarts instance
    console.log(params);
  }
};


class MyChart extends Component {
    constructor(props){
        super(props);
        
       
    }
    
   
	
    
    
    render() {
    	return <IECharts option={option} onEvents={onEvents} />
    }
}

export default MyChart;