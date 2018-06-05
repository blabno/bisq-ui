import {Component, OnInit} from '@angular/core';
import {OffersDAO} from '../../shared/DAO/offers.dao';
import {ToastService} from '../../shared/services/toast.service';
import _ from 'lodash';
import * as d3 from 'd3';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {PreferencesDAO} from '../../shared/DAO/preferences.dao';
import {MarketPriceService} from '../../shared/services/marketPrice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer-book',
  templateUrl: 'offer-book.component.html'
})
export class OfferBookComponent implements OnInit {
  public offerList = [];
  public toSellList = [];
  public toBuyList = [];
  public loading = false;
  public supportedPaymentsCurrencies = [];
  public currenciesFromSettings = [];
  public currencyFilter;
  public userCountry;
  private marketPrices = {};
  private config = {
    width: null,
    height: null,
    totalWidth: 900,
    totalHeight: 400,
    barWidth: 20,
    margin: {
      top: 20,
      right: 10,
      bottom: 20,
      left: 35
    }
  };
  private xScale;
  private yScale;
  constructor(
    private offersDAO: OffersDAO,
    private toast: ToastService,
    private paymentsDAO: PaymentAccountsDAO,
    private preferencesDAO: PreferencesDAO,
    private marketPriceService: MarketPriceService,
    private router: Router
  ) {
    _.set(
      this,
      'config.width',
      this.config.totalWidth -
        this.config.margin.left -
        this.config.margin.right
    );
    _.set(
      this,
      'config.height',
      this.config.totalHeight -
        this.config.margin.top -
        this.config.margin.bottom
    );
  }
  ngOnInit() {
    this.getData();
  }
  onFilterChange() {
    this.refresh();
  }
  refresh() {
    this.filterOffers();
    this.render();
  }
  getData() {
    this.loading = true;
    return this.offersDAO
      .query()
      .then(res => {
        this.offerList = res['offers'];
        return this.preferencesDAO.get();
      })
      .then((settings: any) => {
        this.currenciesFromSettings = [
          ...settings.cryptoCurrencies,
          ...settings.fiatCurrencies7
        ];
        this.userCountry = settings.userCountry;
        return this.paymentsDAO.query();
      })
      .then((res: any) => {
        this.supportedPaymentsCurrencies = _.uniq(
          _.map(res.paymentAccounts, 'selectedTradeCurrency')
        );
        this.currencyFilter = this.supportedPaymentsCurrencies[0];
        let currencies = _(this.offerList).map(i => _.values(_.pick(i, 'baseCurrencyCode', 'currencyCode', 'counterCurrencyCode'))).flatten().uniq().value();
        return this.marketPriceService.getMarketPrices(true, currencies);
      })
      .then(marketPrices => {
        this.marketPrices = marketPrices;
        this.offerList = _.map(this.offerList, offer => {
          offer.price = this.getOfferPrice(offer);
          offer.amount = offer.amount / 1e8;
          return offer;
        });
        this.refresh();
        this.loading = false;
      })
      .catch(error => {
        this.toast.error(error, 'TOAST.OFFERS.CANT_FETCH_DATA');
        this.loading = false;
      });
  }
  private generateNewBlankChart() {
    return d3
      .select('#tradesBoxPlot')
      .append('svg')
      .attr('id', 'tradesBoxPlotSVG')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr(
        'viewBox',
        `0 0 ${this.config.totalWidth + 50} ${this.config.totalHeight}`
      )
      .append('g')
      .attr(
        'transform',
        `translate(${this.config.margin.left},${this.config.margin.top})`
      );
  }

  private drawLineChart(chart) {
    let accY = 0;
    var line = d3.line()
    .x(d => this.xScale(d.price))
    .y(d => {
      accY += d.amount;
      return this.yScale(accY);
    });

    let area = d3.area()
    .x(d => this.xScale(d.price))
    .y(this.config.height)
    .y1(d => {
      accY += d.amount;
      return this.yScale(accY)
    });

    accY = 0;
    chart.append("path")
    .datum(this.toSellList)
    .attr("class", "area")
    .attr("fill", "#d8f2f3" )
    .attr("opacity", "0.6" )
    .attr("d", area);

    accY = 0;
    chart.append("path")
    .datum(this.toBuyList)
    .attr("class", "area")
    .attr("fill", "#ffecc3" )
    .attr("opacity", "0.6" )
    .attr("d", area);

    accY = 0;
    chart.append("path")
    .datum(this.toSellList)
    .attr("fill", "none")
    .attr("stroke", "#2cacaf")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("opacity", "0.6")
    .attr("stroke-width", 1.5)
    .attr("d", line);

    accY = 0;
    chart.append("path")
    .datum(this.toBuyList)
    .attr("fill", 'none' )
    .attr("stroke", "#ffbd24")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("opacity", "0.6")
    .attr("stroke-width", 1.5)
    .attr("d", line);
  }

  private lineFunction = d3
    .line()
    .x(function(d) {
      return d.x;
    })
    .y(function(d) {
      return d.y;
    })
    .curve(d3.curveBasis);

  private defineScalingFunctions() {
    const list = [...this.toSellList, ...this.toBuyList];
    let maxPrice = _.maxBy(list, 'price').price;
    let minPrice = _.minBy(list, 'price').price;
    let sum = _.sumBy(list, 'amount');
    this.xScale = d3.scaleLinear().domain([minPrice, maxPrice]).range([0, this.config.width]);
    this.yScale = d3.scaleLinear().domain([0, sum]).range([this.config.height, 0]);
  }

  private drawScale(chart) {
			// create yAxis
			var xAxis = d3.axisBottom(this.xScale);
			// Add the x-axis.
			chart.append("svg:g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + this.config.height + ")")
            .call(xAxis);
      			// create left yAxis
			var yAxisLeft = d3.axisLeft(this.yScale);
			// Add the y-axis to the left
			chart.append("svg:g")
			      .attr("class", "y axis")
			      .call(yAxisLeft);
  }

  private removeChartIfExist() {
    const element = document.getElementById('tradesBoxPlotSVG');
    if (element) {
      element.parentNode.removeChild(element);
    }
  }

  private render() {
    this.removeChartIfExist();
    this.defineScalingFunctions();
    const svgChart = this.generateNewBlankChart();
    this.drawLineChart(svgChart);
    this.drawScale(svgChart);
  }

  filterOffers() {
    const offers = _.chain(this.offerList);
    this.toSellList = offers
      .filter({direction: 'BUY', counterCurrencyCode: this.currencyFilter})
      .orderBy('price', 'desc')
      .take(12)
      .value();
    this.toBuyList = offers
      .filter({direction: 'SELL', counterCurrencyCode: this.currencyFilter})
      .orderBy('price', 'asc')
      .take(12)
      .value();
  }

  getOfferPrice(item) {
    if (item.useMarketBasedPrice) {
      const basePrice = Number(this.marketPrices[item.counterCurrencyCode]);
      return _.round(basePrice - basePrice * Number(item.marketPriceMargin), 2);
    } else {
      return _.round(Number(item.price) / 1e4, 2);
    }
  }

  sellOffersClick() {
    this.router.navigate(['/offers/sell'], { queryParams: { id: _.map(this.toSellList, 'id') } });
  }

  buyOffersClick() {
    this.router.navigate(['/offers/buy'], { queryParams: { id: _.map(this.toBuyList, 'id') } });
  }

  getOfferAmount(item) {
    let amount = Number(item.amount) / 1e8;
    let price: any = this.getOfferPrice(item);
    return _.round(amount * price, 2);
  }
}
