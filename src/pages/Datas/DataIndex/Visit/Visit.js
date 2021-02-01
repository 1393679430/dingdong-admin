import React, { Component } from 'react'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
  } from 'bizcharts';
import styles from './Visit.css'

export default class Visit extends Component {
    render() {
        const data = [
            {
              year: '1 月',
              sales: 38,
            },
            {
              year: '2 月',
              sales: 52,
            },
            {
              year: '3 月',
              sales: 61,
            },
            {
              year: '4 月',
              sales: 145,
            },
            {
              year: '5 月',
              sales: 48,
            },
            {
              year: '6 月',
              sales: 38,
            },
            {
              year: '7 月',
              sales: 38,
            },
            {
              year: '8 月',
              sales: 38,
            },
            {
              year: '9 月',
              sales: 38,
            },
            {
              year: '10 月',
              sales: 38,
            },
            {
              year: '11 月',
              sales: 38,
            },
            {
              year: '12 月',
              sales: 38,
            },
          ];
          const cols = {
            sales: {
              tickInterval: 30,
            },
          };
      return (
          <div className={styles.Visit}>
              {/* 图标 */}
                <div className={styles.VisitLeft}>
                    <div className={styles.VisitCharTitle}>销售趋势</div>
                    <Chart height={400} data={data} scale={cols} forceFit>
                        <Axis name="year" />
                        <Axis name="sales" />
                        <Tooltip
                            crosshairs={{
                            type: 'y',
                            }}
                        />
                        <Geom type="interval" position="year*sales" />
                    </Chart>
                </div>
                {/* 排行榜 */}
                <div className={styles.VisitRight}>
                    <div className={styles.VisitCharTitle}>销售趋势排行榜TOP10</div>
                    <div className={styles.VisitRightCentent}>
                      {
                        [1, 2, 3, 4].map((_, index) => (
                          <div className={styles.VisitRightCententList} key={index}>
                            <div className={styles.VisitRightCententListLeft}>
                              <span>1</span>
                              <span>香菜 360g</span>
                            </div>
                            <div className={styles.VisitRightCententListRight}>
                              12564
                            </div>
                          </div>
                        ))
                      }
                    </div>
                </div>
          </div>
      )
    }
}
