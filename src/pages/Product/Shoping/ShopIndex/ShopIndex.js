/*
 * @Author: 崔国强
 * @Date: 2019-12-04 16:07:36
 * @LastEditTime : 2020-01-09 17:01:42
 * @LastEditors  : Please set LastEditors
 * @Description: 产品管理->产品管理->产品列表
 * @FilePath: \umi-admin\src\pages\Product\Shoping\ShopIndex\ShopIndex.js
 */
import React, { Component } from 'react'
import moment from 'moment'
import styles from './ShopIndex.css'
import router from 'umi/router';
import Link from 'umi/link';
import { Row, Col , Input , Button , Table, Divider, Tag , Select, Popconfirm , Switch, Modal, Alert, InputNumber} from 'antd';
const { Option } = Select;
export default class ShopIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:{
        current: 1,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        total: 0
      },
      sortList:[], //分类列表
      message: '', //搜索信息
      sortActive: null ,//选中的分类
      showsActive: null, // 选中的状态
      dataList: [] , //列表信息
      vipShow: false ,//  会员价弹出层 是否显示
      vip_price: 0.00 ,  //会员价
      vip_id: 0  //会员ID
    }
  }
  // 删除
  handleDelete = key => {
    let This = this
    this.$https.get('index/removeGood',{
      params:{
        id: key
      }
    })
    .then(res=>{
      if(res.code === 0){
        let dataList = This.state.dataList
            dataList.forEach((item,index)=>{
              if(item.id === key){
                dataList.splice(index,1)
              }
            })
            This.setState({
              dataList
            })
      }
    })
  }
  // 编辑
  handleEdit = key =>{
    router.push({
      pathname: '/index/product/shoping/add',
      query: {
        id: key,
      },
    });
  }
  // 分页发生改变时
  onChangePage = (pagination) =>{
      let page = this.state.page
        page.current = pagination.current
        this.setState({
          page
        })
        this.info()
  }
  // 是否上线 开关
  onChangeSwitch = (check,indexs,types) =>{
    let dataList = this.state.dataList
    let This = this
    this.$https.post('index/updataGoodShows',{
      shows: !check,
      id: indexs,
      types: types
    })
    .then(res=>{
      This.setState({
        dataList: dataList.map((item,index)=>{
          if(item.id === indexs){
            item.shows = !check
          }
          return item;
        })
      })
    })

   
  }
  messageChange =(e) => {
    this.setState({
      message: e.target.value
    })
  }
  sortChange = (value) =>{
    this.setState({
      sortActive:value
    })
  }
  showsChange = (value) =>{
    this.setState({
      showsActive:value
    })
  }
  submitSearch = ()=>{
    let page = this.state.page
        page.current = 1
    this.setState({
      page
    })
    this.info()
  }
  // 会员价 确认
  handleOk = ()=>{
      let This = this
      this.$https.post('index/updataGoodShowVip',{
        vip_price:this.state.vip_price,
        vip_id:this.state.vip_id
      })
      .then(res=>{
        if(res.code === 0){
          let dataList = This.state.dataList
              dataList.forEach((item,index)=>{
                if(item.id === This.state.vip_id){
                    item.vip_price = This.state.vip_price
                }
              })
              console.log(dataList)
              This.setState({
                dataList,
                vip_id: 0,
                vip_price:0,
                vipShow: false
              })
        }
      })
      .catch(err=>{
        This.setState({
          vip_id: 0,
          vip_price:0
        })
      })
  }
  // 会员价 取消
  handleCancel = ()=>{
    this.setState({
      vipShow: false,
    });
  }
  // vip change
  vipChange = (e) => {
      this.setState({
        vip_price: e
      })
  }
  // 点击会员价
  handleVips = (record)=>{
      console.log(record.vip_price)
      this.setState({
        vip_price: record.vip_price,
        vip_id: record.id,
        vipShow: true
      })
  }
  componentDidMount(){
    this.$https.get('nottoken/getSortList')
      .then(res=>{
          console.log(res)
          if(res.code === 0){
              this.setState({
                  sortList: res.data
              })
          }
      })
    this.info()
  }
  info = ()=>{
    let This = this
    this.$https.get('nottoken/getGoods',{
      params:{
        current:this.state.page.current,
        pageSize: this.state.page.pageSize,
        msg: this.state.message,
        sortActive: this.state.sortActive,
        showsActive: this.state.showsActive
      }
    })
    .then(res=>{
      let page = this.state.page
          page.total = res.data.total
        This.setState({
          page,
          dataList: res.data.list.map( item=>{
            item.carousel = JSON.parse(item.carousel)
            item.propaganda = JSON.parse(item.propaganda)
           
            item.shows = item.shows === 1 ? true : false
            item.buy = Boolean(item.buy)
            item.car = Boolean(item.car)
            item.one_live = Boolean(item.one_live)
            item.key = item.id
            return item;
          })

          
        })
    })
  }
    render() {
        const columns = [
            {
              title: '商品名称',
              dataIndex: 'name',
              key: 'name',
              fixed: 'left',
              width: 100,
              render: text => <span>{text}</span>,
            },
            {
              title: '分类图片',
              dataIndex: 'carousel',
              key: 'carousel',
              render: carousel => (
                <img  style={{width: '50px'}} alt={carousel[0].name} src={carousel[0].url} />
              )
              // render: text => <img style={{width: '50px'}} alt='' src={text[0].url} />, Tag
            },
            {
              title: '所属分类',
              dataIndex: 'sort_name',
              key: 'sort_name',
              render: text =>  <Tag color="#2db7f5">{text}</Tag>, 
            },
            {
              title: '价格',
              dataIndex: 'price',
              key: 'price',
            },
            {
              title: '会员价',
              dataIndex: 'vip_price',
              key: 'vip_price',
            },
            {
              title: '是否上架',
              dataIndex: 'shows',
              key: 'shows',
              render: (shows,record) => (
                <Switch defaultChecked={shows} onClick={() => this.onChangeSwitch(shows,record.id,1)} />
              )
            },
            {
              title: '疯狂抢购',
              dataIndex: 'buy',
              key: 'buy',
              render: (buy,record) => (
                <Switch defaultChecked={buy} onClick={() => this.onChangeSwitch(buy,record.id,2)} />
              )
            },
            {
              title: '首页猜你喜欢',
              dataIndex: 'one_live',
              key: 'one_live',
              render: (shows,record) => (
                <Switch defaultChecked={shows} onClick={() => this.onChangeSwitch(shows,record.id,3)} />
              )
            },
            {
              title: '购物车猜你喜欢',
              dataIndex: 'car',
              key: 'car',
              render: (shows,record) => (
                <Switch defaultChecked={shows} onClick={() => this.onChangeSwitch(shows,record.id,4)} />
              )
            },
            {
              title: '创建人',
              dataIndex: 'user_nickname',
              key: 'user_nickname',
            },
            {
              title: '创建时间',
              dataIndex: 'create_time',
              key: 'create_time',
              render: text => <span>{moment(text).format('YY-MM-DD HH:mm:ss')}</span>,
            },
            {
              title: '更新时间',
              dataIndex: 'updata_time',
              key: 'updata_time',
              render: text => <span>{moment(text).format('YY-MM-DD HH:mm:ss')}</span>,
            },
            {
              title: '操作',
              dataIndex: 'action',
              fixed: 'right',
              width: 260,
              render: (text, record) =>
                (
                  <div>
                    <Button  size='small'  onClick={() => this.handleVips(record)}>会员价</Button>
                    <Divider type="vertical" />
                    <Button type="primary" size='small'  onClick={() => this.handleEdit(record.key)}>编辑</Button>
                    <Divider type="vertical" />
                    <Popconfirm title="确认删除?"  okText='确认' cancelText="取消" onConfirm={() => this.handleDelete(record.key)} >
                      <Button type="danger" size='small'>删除</Button>
                    </Popconfirm>
                  </div>
                  
                ),
            },
          ];
        return (
            <div className={styles.ShopIndex}>
                <div className={styles.ShopIndexBox}>
                    <Row style={{marginBottom: '15px'}}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Input placeholder="请输入商品名称" value={this.state.message}  onChange={this.messageChange} />
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4} offset={1}>
                            {/* <Input placeholder="请输入商品状态" /> */}
                            <Select
                              defaultValue={this.state.sortActive}
                              showSearch
                              style={{ width: '100%' }}
                              placeholder="请选择商品分类"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
                              onChange={this.sortChange}
                            >
                              <Option value={null}>全部</Option>
                              {this.state.sortList.map((item,index)=><Option key={index} value={item.id}>{item.name}</Option>)}
                            </Select>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4} offset={1}>
                            {/* <Input placeholder="请输入商品状态" /> */}
                            <Select
                              defaultValue={this.state.showsActive}
                              showSearch
                              style={{ width: '100%' }}
                              placeholder="请选择商品状态"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
                              onChange={this.showsChange}
                            >
                              <Option value={null}>全部</Option>
                              <Option value={1}>已上架</Option>
                              <Option value={0}>已下架</Option>
                            </Select>
                        </Col>
                        <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
                            <Button type="primary"  style={{width: '100%'}} onClick={this.submitSearch}>查找</Button>
                        </Col>
                        <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
                            <Button type="primary" style={{width: '100%'}}>
                                <Link to='/index/product/shoping/add'>添加</Link> 
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '15px'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Table columns={columns} dataSource={this.state.dataList} onChange={this.onChangePage} pagination={this.state.page} />
                        </Col>
                    </Row>    
                </div>
                {/* 会员价 弹出层 */}
                <Modal
                    title="会员价"
                    cancelText='取消'
                    okText="确认"
                    maskClosable={false}
                    visible={this.state.vipShow}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <Alert message="设置为0.00时,取消会员价" type="info" showIcon style={{marginBottom: "10px"}} />
                    <div style={{display: 'flex'}}>
                      <span style={{marginRight: '10px', lineHeight: '32px'}}>会员价:</span>
                      <InputNumber style={{flex: '1'}} step={0.01} precision={2}  min={0.00} max={9999.99} value={this.state.vip_price} onChange={this.vipChange} />
                    </div>
                   
                  </Modal>
            </div>
        )
    }
}
