import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Form, Icon, Input, Button, Switch, InputNumber, Select, Upload, message } from 'antd';
import styles from './AddShop.css';

const { Option } = Select;


class AddShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcList: {
        name: '',
        bewrite: '',
        price: null,
        sort_id: null,
        carousel: [],
        propaganda: [],
        shows: false,
        weight: '',
        conditions: '',
        shelf_life: '',
      },
      sortList: [],
      propsUpload: {
        name: 'file',
        action: this.props.UserRedux.httpsUpload,
        method: 'post',
        headers: {
          //   authorization: 'authorization-text',
          Authorization: this.props.UserRedux.token,
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {

          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败`);
          }
        },
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.$https.post('index/addGoods', {
          ...values,
          id: this.state.srcList.id ? this.state.srcList.id : null,
        })
          .then(res => {
            if (res.code === 0 && res.data.type === 0) {
              this.props.form.resetFields();
            } else if (res.code === 0 && res.data.type === 1) {
              this.props.form.resetFields();
              router.push('/index/product/shoping/index');
            }
          });
      }
    });
  };

  normFile = e => {
    const srcAll = [];
    if (e.file.response && e.file.response.code === 0) {
      for (let i = 0; i < e.fileList.length; i++) {
        if (e.fileList[i].response) {
          const imgSrc = {
            url: e.fileList[i].response.data.url || '',
            name: e.fileList[i].name,
            uid: e.fileList[i].uid,
            status: e.fileList[i].status,
          };
          srcAll.push(imgSrc);
        } else {
          srcAll.push(e.fileList[i]);
        }
      }
      return srcAll;
    }
    return e.fileList;
  };

  componentDidMount() {
    // 查询某一分类
    const This = this;
    if (this.props.location.query.id) {
      this.$https.get('nottoken/getGoodItem', {
        params: {
          id: this.props.location.query.id,
        },
      }).then(res => {
          const { srcList } = res.data;
          srcList.propaganda = JSON.parse(srcList.propaganda);
          srcList.carousel = JSON.parse(srcList.carousel);
          srcList.shows = Boolean(srcList.carousel.shows);
          console.log(srcList);
          if (res.code === 0) {
            This.setState({
              sortList: res.data.sortList,
              srcList,
            });
          } else {
            router.push('/index/product/shoping/index');
          }
        });
    } else {
      this.$https.get('nottoken/getSortList')
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.setState({
              sortList: res.data,
            });
          }
        });
    }
  }

  render() {
    const {
      srcList,
      sortList,
      propsUpload,
    } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        xl: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        xl: { span: 20 },
      },
    };
    return (
      <div className={styles.AddShop}>
        <div className={styles.AddShopBox}>
          <Form {...formItemLayout}
                colon
                layout="horizontal"
                onSubmit={this.handleSubmit}>
            <Form.Item label="商品名称"
                       hasFeedback
                       className={styles.AddShopBoxFromItem}
                       extra="建议在30个字以内">
              {getFieldDecorator('name', {
                initialValue: srcList.name,
                rules: [
                  { required: true, message: '请输入商品名称!' },
                ],
              })(
                <Input
                  placeholder="请输入商品名称"
                />,
              )}
            </Form.Item>
            <Form.Item label="商品描述"
                       hasFeedback
                       className={styles.AddShopBoxFromItem}
                       extra="建议在50个字以内">
              {getFieldDecorator('bewrite', {
                initialValue: srcList.bewrite,
                rules: [
                  { required: true, message: '请输入商品描述' },
                ],
              })(
                <Input
                  style={{ width: '100%' }}
                  placeholder="请输入商品描述"
                />,
              )}
            </Form.Item>
            <Form.Item label="商品当前价"
                       className={styles.AddShopBoxFromItem}>
              {getFieldDecorator('price', {
                initialValue: srcList.price,
                rules: [
                  { required: true, message: '请输入商品当前价!' },
                ],
              })(
                <InputNumber min={0.01} max={10000} step={0.1} placeholder="当前价" precision={2} />,
              )}
            </Form.Item>
            <Form.Item label="所属分类" className={styles.AddShopBoxFromItem}>
              {getFieldDecorator('sort_id', {
                initialValue: srcList.sort_id,
                rules: [
                  { required: true, message: '请选择商品分类!' },
                ],
              })(
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请选择分类"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {sortList.map((item, index) => (
                    <Option key={index} value={item.id}>{item.name}</Option>
                  ))}
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="产品轮播图"
                       extra="产品顶部轮播图,首张将作为缩略图展示在产品最外层(建议410*290比例)">
              {getFieldDecorator('carousel', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
                initialValue: srcList.carousel,
                rules: [
                  { required: true, message: '请上传商品轮播图!' },
                ],
              })(
                <Upload {...propsUpload}
                        listType="picture-card">
                  <Button>
                    <Icon type="upload" /> 上传轮播图
                  </Button>
                </Upload>,
              )}
            </Form.Item>
            <Form.Item label="产品宣传画" extra="产品宣传图">
              {getFieldDecorator('propaganda', {
                valuePropName: 'fileList',
                initialValue: srcList.propaganda,
                getValueFromEvent: this.normFile,
                rules: [
                  { required: true, message: '请上传商品宣传画!' },
                ],
              })(
                <Upload {...propsUpload}
                        listType="picture-card">
                  <Button>
                    <Icon type="upload" /> 上传宣传图
                  </Button>
                </Upload>,
              )}
            </Form.Item>
            <Form.Item label="立即上架">
              {getFieldDecorator('shows', {
                initialValue: srcList.shows,
                valuePropName: 'checked',
                rules: [
                  { required: true, message: '请选择是否立即上架!' },
                ],
              })(<Switch checkedChildren="是"
                         unCheckedChildren="否" />)}
            </Form.Item>
            <Form.Item label="净含量"
                       hasFeedback
                       className={styles.AddShopBoxFromItem}>
              {getFieldDecorator('weight', {
                initialValue: srcList.weight,
                rules: [
                  { required: true, message: '请输入商品净含量' },
                ],
              })(
                <Input
                  style={{ width: '100%' }}
                  placeholder="请输入商品净含量"
                />,
              )}
            </Form.Item>
            <Form.Item label="保存条件"
                       hasFeedback
                       className={styles.AddShopBoxFromItem}
                       extra="建议在30个字以内">
              {getFieldDecorator('conditions', {
                initialValue: srcList.conditions,
                rules: [
                  { required: true, message: '请输入商品保存条件' },
                ],
              })(
                <Input
                  style={{ width: '100%' }}
                  placeholder="请输入商品保存条件"
                />,
              )}
            </Form.Item>
            <Form.Item label="商品保质期"
                       hasFeedback
                       className={styles.AddShopBoxFromItem}>
              {getFieldDecorator('shelf_life', {
                initialValue: srcList.shelf_life,
                rules: [
                  { required: true, message: '请输入商品保质期' },
                ],
              })(
                <Input
                  style={{ width: '100%' }}
                  placeholder="请输入商品保质期"
                />,
              )}
            </Form.Item>
            <Button type="primary"
                    htmlType="submit"
                    style={{ width: '100%' }}>
              {srcList.id ? '修改' : '添加'}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    loading: state.loading, // dva已经可以获得 loading状态
    UserRedux: state.UserRedux, // 获取指定命名空间的模型状态
  }),
  {},
)(Form.create()(AddShop));
