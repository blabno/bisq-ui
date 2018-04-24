import _ from 'lodash';
import * as d3 from 'd3';
import moment from 'moment';
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-market-trades-box-plot',
  templateUrl: 'tradesBoxPlot.component.html'
})
export class TradesBoxPlotComponent implements OnChanges {
  @Input() data: Array<any> = [];

  private config = {
    width: null,
    height: null,
    totalWidth: 900,
    totalHeight: 600,
    barWidth: 20,
    margin: {
      top: 20,
      right: 10,
      bottom: 20,
      left: 35
    }
  };
  public preparedData;
  private xScale;
  private volumeYScale;
  private boxPlotYScale;
  private averageLine;
  public itemToView;
  public currency;

  constructor() {
    _.set(this, 'config.width', this.config.totalWidth - this.config.margin.left - this.config.margin.right);
    _.set(this, 'config.height', this.config.totalHeight - this.config.margin.top - this.config.margin.bottom);
  }

  ngOnChanges(changes: SimpleChanges) {
    const volumes = _.get(this, 'data.volumes', []);
    const boxPlot =  _.get(this, 'data.boxPlotChartData', []);
    this.preparedData = this.parseData(this.mergeData(boxPlot, volumes,'period_start'));
    this.currency = _.get(this, 'data.currency');
    this.render();
  }

  private mergeData = (a1, a2, key) => _.map(a1, i => ({...i, ..._.find(a2, [key, i[key]])}));

  private parseData(d) {
    return _.chain(d)
      .sortBy('period_start')
      .map(value => {
        for (let key in value) {
          value[key] = Number(value[key]) || value[key];
        }
        return {
          ...value,
          date: moment.unix(value.period_start).format('DD/MM/YY'),
        }
      })
      .value();
  }

  private removeChartIfExist() {
    const element = document.getElementById('tradesBoxPlotSVG');
    if (element) {
      element.parentNode.removeChild(element);
    }
  }

  private defineScalingFunctions() {
    this.xScale = d3.scalePoint()
      .domain(_.map(this.preparedData, 'date'))
      .rangeRound([0, this.config.width])
      .padding([0.25]);
    this.boxPlotYScale = d3.scaleLinear()
      .domain([_.maxBy(this.preparedData, 'high').high, _.minBy(this.preparedData, 'low').low])
      .range([0, this.config.height - 200]);
    this.volumeYScale = d3.scaleLinear()
      .domain([_.maxBy(this.preparedData, 'volume').volume, _.minBy(this.preparedData, 'volume').volume])
      .range([this.config.height - 175, this.config.height]);
    this.averageLine = d3.line()
      .x(d => this.xScale(d.date))
      .y(d => this.boxPlotYScale(d.avg));
  }

  private generateNewBlankChart() {
    return d3.select('#tradesBoxPlot').append('svg')
      .attr('id', 'tradesBoxPlotSVG')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${this.config.totalWidth + 50} ${this.config.totalHeight}`)
      .append('g')
      .attr('transform', `translate(${this.config.margin.left},${this.config.margin.top})`);
  }

  private drawWhiskers(g) {
    g.selectAll('.verticalLines')
      .data(this.preparedData)
      .enter()
      .append('line')
      .attr('x1', item => this.xScale(item.date) + this.config.barWidth / 2)
      .attr('y1', item => this.boxPlotYScale(item.high))
      .attr('x2', item => this.xScale(item.date) + this.config.barWidth / 2)
      .attr('y2', item => this.boxPlotYScale(item.low))
      .attr('stroke', '#000')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  }

  private drawBoxes(g) {
    const isDecreasing = item => item.open - item.close > 0;
    const height = item => {
      let value;
      if (isDecreasing(item)) {
        value = this.boxPlotYScale(item.close) - this.boxPlotYScale(item.open);
      } else {
        value = this.boxPlotYScale(item.open) - this.boxPlotYScale(item.close);
      }
      return value || 1;
    };
    g.selectAll('rect')
      .data(this.preparedData)
      .enter()
      .append('rect')
      .attr('width', this.config.barWidth)
      .attr('height', height)
      .attr('x', item => this.xScale(item.date))
      .attr('y', item => isDecreasing(item) ? this.boxPlotYScale(item.open) : this.boxPlotYScale(item.close))
      .attr('fill', item => item.open - item.close > 0 ? 'red' : 'green')
      .attr('stroke', '#000')
      .attr('stroke-width', 1);
  }

  private drawVolumeBoxes(g) {
    g.selectAll('rect')
      .data(this.preparedData)
      .enter()
      .append('rect')
      .attr('width', this.config.barWidth)
      .attr('height', item => this.config.height - this.volumeYScale(item.volume))
      .attr('x', item => this.xScale(item.date))
      .attr('y', item => this.volumeYScale(item.volume))
      .attr('fill', '#00b4ff')
      .attr('stroke', '#000')
      .attr('stroke-width', 1);
  }

  private drawLineChart(chart) {
    chart.append('path')
      .data([this.preparedData])
      .attr('fill', 'none')
      .attr('stroke', 'var(--blue)')
      .attr('stroke-width', 2)
      .attr('d', this.averageLine)
      .attr('transform', 'translate(10,0)');
  }

  private drawScale(chart) {
    const axisG = chart.append('g').attr('transform', `translate(${this.config.margin.left},3)`);
    const axisVolume = chart.append('g').attr('transform', `translate(${this.config.margin.left},3)`);
    const axisTopG = chart.append('g').attr('transform', `translate(${this.config.margin.left + 10},0)`);
    axisG.append('g').call(d3.axisLeft(this.boxPlotYScale));
    axisVolume.append('g').call(d3.axisLeft(this.volumeYScale));
    axisTopG.append('g').call(d3.axisTop(this.xScale));
  }

  private drawMouseEventLayer(g) {
    g.selectAll('rect')
      .data(this.preparedData)
      .enter()
      .append('rect')
      .attr('width', this.config.barWidth)
      .attr('height', this.config.height)
      .attr('x', item => this.xScale(item.date))
      .attr('y', 0)
      .attr('fill', 'rgba(255, 255, 255, 0.001)')
      .on('click', (item) => this.itemToView = item);
  }

  private render() {
    this.removeChartIfExist();
    if (!this.preparedData || 0 === this.preparedData.length) {
      return;
    }
    this.itemToView = null;
    this.defineScalingFunctions();
    const svgChart = this.generateNewBlankChart();

    let boxPlotChartLayer = svgChart.append('g').attr('transform', `translate(${this.config.margin.left},5)`);
    let volumeChartLayer = svgChart.append('g').attr('transform', `translate(${this.config.margin.left},5)`);
    let mouseEventLayer = svgChart.append('g').attr('transform', `translate(${this.config.margin.left},5)`);
    this.drawWhiskers(boxPlotChartLayer);
    this.drawBoxes(boxPlotChartLayer);
    this.drawLineChart(boxPlotChartLayer);
    this.drawVolumeBoxes(volumeChartLayer);
    this.drawScale(svgChart);

    this.drawMouseEventLayer(mouseEventLayer);

  }
}
