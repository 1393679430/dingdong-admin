
import React, { Component } from 'react'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    Guide,
  } from 'bizcharts';
  import DataSet from '@antv/data-set';
import styles from './Client.css'

export default class Client extends Component {
    render() {
        const { DataView } = DataSet;
        const { Html } = Guide;
        const data = [
          {
            item: 'APP',
            count: 40,
          },
          {
            item: '小程序',
            count: 30.5,
          },
          {
            item: '移动端',
            count: 29.5,
          },
        ];
        const dv = new DataView();
        dv.source(data).transform({
          type: 'percent',
          field: 'count',
          dimension: 'item',
          as: 'percent',
        });
        const cols = {
          percent: {
            formatter: val => {
              val = `${val * 100}%`;
              return val;
            },
          },
        };
        return (
            <div className={styles.Sale}>
                <div className={styles.SaleName}>销售占比</div>
                <div className={styles.SaleChars}>
                <Chart
          height={400}
          data={dv}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type="theta" radius={0.75} innerRadius={0.6} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-400 / 2 + 120}
            offsetX={-100}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Guide>
            <Html
              position={['50%', '50%']}
              html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>全网<br><span style=&quot;color:#262626;font-size:1.5em&quot;>100%</span></div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              'item*percent',
              (item, percent) => {
                percent = `${percent * 100}%`;
                return {
                  name: item,
                  value: percent,
                };
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => `${item.point.item}: ${val}`}
            />
          </Geom>
        </Chart>
                </div>
            </div>
        )
    }
}
