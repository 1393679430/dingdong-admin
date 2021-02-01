/*
 * @Author: 崔国强
 * @Date: 2019-12-04 11:31:37
 * @LastEditTime: 2019-12-04 12:31:30
 * @LastEditors: Please set LastEditors
 * @Description: 销售类目占比
 * @FilePath: \umi-admin\src\pages\Datas\DataIndex\Sale\Sale.js
 */
import React, { Component } from 'react'
import styles from './Sale.css'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend
  } from "bizcharts";
  import DataSet from "@antv/data-set";
export default class Sale extends Component {
    render() {
        const { DataView } = DataSet;
        const data = [
          {
            item: "蔬菜类",
            count: 40
          },
          {
            item: "瓜果类",
            count: 21
          },
          {
            item: "生鲜类",
            count: 17
          },
          {
            item: "豆制品类",
            count: 13
          },
          {
            item: "其他",
            count: 9
          }
        ];
        const dv = new DataView();
        dv.source(data).transform({
          type: "percent",
          field: "count",
          dimension: "item",
          as: "percent"
        });
        const cols = {
          percent: {
            formatter: val => {
              val = val * 100 + "%";
              return val;
            }
          }
        };
        return (
            <div className={styles.Sale}>
                <div className={styles.SaleName}>销售类比</div>
                <div className={styles.SaleChars}>
                <Chart
                    height={400}
                    data={dv}
                    scale={cols}
                    padding={[80, 100, 80, 80]}
                    forceFit
                    >
                        <Coord type="theta" radius={0.75} />
                        <Axis name="percent" />
                        <Legend
                            position="right"
                            offsetY={-400 / 2 + 100}
                            offsetX={-60}
                        />
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                        />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color="item"
                            tooltip={[
                            "item*percent",
                            (item, percent) => {
                                percent = percent * 100 + "%";
                                return {
                                name: item,
                                value: percent
                                };
                            }
                            ]}
                            style={{
                            lineWidth: 1,
                            stroke: "#fff"
                            }}
                        >
                            <Label
                            content="percent"
                            formatter={(val, item) => {
                                return item.point.item + ": " + val;
                            }}
                            />
                        </Geom>
                    </Chart>
                </div>
            </div>
        )
    }
}
