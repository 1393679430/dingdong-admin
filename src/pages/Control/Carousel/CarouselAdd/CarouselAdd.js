import React, { Component } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Switch, Upload, message, Select, InputNumber } from 'antd';
import styles from './CarouselAdd.css';

const { Option } = Select;

class CarouselAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListSrc: {
        remark: '', // 备注
        carousel: [], // 图片
        types: 1, // 类型
        external: null,
        good_id: null,
        shows: false,
      },
      types: 1,
      propsUpload: {
        name: 'file',
        action: this.props.UserRedux.httpsUpload,
        method: 'post',
        headers: {
          Authorization: this.props.UserRedux.token,
        },
        onChange(info) {
          if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败`);
          }
        },
      },
    };
  }

  componentDidMount() {
    if (this.props.location.query.id) {
      this.$https.get('nottoken/getSwiperItem', {
        params: {
          id: this.props.location.query.id,
        },
      }).then(res => {
        res.data.carousel = JSON.parse(res.data.carousel);
        res.data.shows = Boolean(res.data.shows);
        if (res.code === 0) {
          this.setState({
            ListSrc: res.data,
          });
        } else {
          router.push('/index/product/class/index');
        }
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      ListSrc,
    } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.$https.post('index/addSwiper', {
          ...values,
          id: ListSrc ? ListSrc.id : null,
        }).then(res => {
          const {
            code,
            data: {
              type,
            },
          } = res;
          if (code === 0 && type === 0) {
            this.props.form.resetFields();
          } else if (code === 0 && type === 1) {
            this.props.form.resetFields();
            router.push('/index/control/carousel/index');
          }
        });
      }
    });
  };

  normFile = e => {
    let srcAll = [];
    if (e.file.response && e.file.response.code === 0) {
      for (let i = 0; i < e.fileList.length; i++) {
        if (e.fileList[i].response) {
          const imgSrc = {
            url: e.fileList[i].response.data.url || '',
            name: e.fileList[i].name,
            uid: e.fileList[i].uid,
            status: e.fileList[i].status,
          };
          srcAll = [];
          srcAll.push(imgSrc);
        } else {
          srcAll = [];
          srcAll.push(e.fileList[i]);
        }
      }
      return srcAll;
    }
    return e.fileList;
  };

  //   跳转类型选择
  selectClass = value => {
    const { ListSrc } = this.state;
    ListSrc.types = value;
    this.setState({
      ListSrc,
    });
  };

  render() {
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
    const {
      ListSrc,
      propsUpload,
    } = this.state;
    return (
      <div className={styles.AddShop}>
        <div className={styles.AddShopBox}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="备注名称" hasFeedback className={styles.AddShopBoxFromItem} extra="建议在2~4个字之间">
              {getFieldDecorator('remark', {
                initialValue: ListSrc.remark,
                rules: [
                  { required: true, message: '请输入备注名称!' },
                  { min: 2, max: 10, message: '备注名称在2~10个字之间!' },
                ],
              })(
                <Input
                  placeholder="请输入备注名称"
                />,
              )}
            </Form.Item>
            <Form.Item label="轮播展示图" extra="分类展示(建议2:1)">
              {getFieldDecorator('carousel', {
                valuePropName: 'fileList',
                initialValue: ListSrc.carousel,
                getValueFromEvent: this.normFile,
                rules: [
                  { required: true, message: '请上传分类展示图!' },
                ],
              })(
                <Upload {...propsUpload}
                        listType="picture-card">
                  <Button>
                    <Icon type="upload" />上传轮播展示图片
                  </Button>
                </Upload>,
              )}
            </Form.Item>
            <Form.Item label="所属分类"
                       className={styles.AddShopBoxFromItem}>
              {getFieldDecorator('types', {
                initialValue: ListSrc.types,
                rules: [
                  { required: true, message: '请选择商品分类!' },
                ],
              })(
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请选择分类"
                  optionFilterProp="children"
                  onChange={this.selectClass}
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value={1}>跳转商品</Option>
                  <Option value={2}>跳转外部链接</Option>
                </Select>,
              )}
            </Form.Item>
            {ListSrc.types === 2 ? (
              <Form.Item label="外部链接"
                         hasFeedback
                         className={styles.AddShopBoxFromItem}
                         extra="请输入带HTTPS的完整连接地址">
                {getFieldDecorator('external', {
                  initialValue: ListSrc.external,
                  rules: [
                    { required: true, message: '请输入外部链接!' },
                  ],
                })(
                  <Input
                    placeholder="请输入外部链接"
                  />,
                )}
              </Form.Item>
            ) : (
              <Form.Item label="商品ID"
                         hasFeedback
                         className={styles.AddShopBoxFromItem}
                         extra="商品ID详见:产品管理 => 商品管理">
                {getFieldDecorator('good_id', {
                  initialValue: ListSrc.good_id,
                  rules: [
                    { required: true, message: '请输入商品ID!' },
                    { type: 'number', message: '请输入数字' },
                  ],
                })(
                  <InputNumber
                    style={{ width: '200px' }}
                    step={1}
                    precision={0}
                    placeholder="请输入商品ID"
                  />,
                )}
              </Form.Item>
            )
            }
            <Form.Item label="立即上架">
              {getFieldDecorator('shows', {
                initialValue: ListSrc.shows,
                valuePropName: 'checked',
                rules: [
                  { required: true, message: '请选择是否立即上架!' },
                ],
              })(<Switch checkedChildren="是"
                         unCheckedChildren="否" />)}
            </Form.Item>
            <Button type="primary"
                    htmlType="submit"
                    style={{ width: '100%' }}>
              {ListSrc ? '修改' : '添加'}
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
)(Form.create()(CarouselAdd));
