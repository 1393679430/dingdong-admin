import React, { Component } from 'react';
import { Row, Col, Input, Button, Table, Form } from 'antd';
import Link from 'umi/link';
import styles from './RefundIndex.css';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const { editing } = this.state;
    const editingToggle = !editing;
    this.setState({ editing }, () => {
      if (editingToggle) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}


export default class RefundIndex extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        width: '30%',
      },
      {
        title: '退款理由',
        dataIndex: 'age',

      },
      {
        title: '类型',
        dataIndex: 'address',
      },

      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: () => (
          this.state.dataSource.length >= 1 ? (
            <Link to="/index/order/refund/details">
              <Button type="primary" size="small">详情</Button>
            </Link>
          ) : null
        ),
      },
    ];

    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: '仅退款',
          status: '仅退款'
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: '退货/退款',
          status: '退货/退款'
        },
      ],
      count: 2,
    };
  }

  // 删除
  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  //  添加
  // handleAdd = () => {
  //   const { count, dataSource } = this.state;
  //   const newData = {
  //     key: count,
  //     name: `Edward King ${count}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${count}`,
  //   };
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   });
  // };

  // 修改
  handleSave = row => {
    console.log(row);
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div className={styles.ShopIndex}>
        <div className={styles.ShopIndexBox}>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <Input placeholder="请输入用户名称" />
            </Col>
            <Col xs={24} sm={12} md={4} lg={4} xl={2} offset={1}>
              <Button type="primary" style={{ width: '100%' }}>查找</Button>
            </Col>
          </Row>
          <Row style={{ marginBottom: '15px' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
