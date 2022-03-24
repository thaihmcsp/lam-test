import React, {useEffect, useState} from 'react'
import 'antd/dist/antd.css'
import { Pagination, Modal, Button ,Form, Input, Table, Tag, Space } from 'antd'
import axios from '../../config/axios'

const columns = [
  {
    title: 'Name',
    dataIndex: 'productname',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'Price',
  },
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   key: 'address',
  // },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => {
      return (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      )
    },
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     Price: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     Price: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     Price: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];


const config = {
  defaultPageSize : 5,
  pageSizeOptions : [5,10,15,20],
  showSizeChanger : true
}

function Test() {

  const [product, setProduct] = useState([])
  const [showProduct, setShowProduct] = useState([])
  const [page, setPage] = useState(1)
  const [view, setView] = useState(2)
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function getData () {
      try {
        const listProductPromise = axios(`/product`)
        const showProductPromise = axios(`/product?page=${page}&view=${view}`)
        let listProduct = await listProductPromise
        let showProduct = await showProductPromise
        console.log(showProduct);
        listProduct.data.map(function(ele){
          ele.key = ele._id
          return ele
        })
        setProduct(listProduct.data)
        setShowProduct(listProduct.data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [page, view])
  
  function test(){
    console.log(123);
  }

  function change (page, pageSize){
    setPage(page)
    setView(pageSize)
  }

  const onFinish = async (values) => {
    try {
      const res = await axios.post('/product/create', values)
      setIsModalVisible(false);
      setPage(1)
    } catch (error) {
      console.log(error);
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function chageTable (pagination){
    console.log(147 , pagination);
  }
  return (
    <div>
      <h1>TEST</h1>
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Product name"
              name="productname"
              rules={[
                {
                  required: true,
                  message: 'Please input your Product name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Please input your price!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="primary" htmlType="button" onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
        <Table columns={columns} dataSource={showProduct} onChange={chageTable} pagination={config}/>
        <div className="listData">
          {showProduct.map(function(ele, index){
            return (
              <div key={index}>
                {index + 1} / {ele.productname} : {ele.price} VND
              </div>
            )
          })}
        </div>
        <Pagination defaultPageSize={2} defaultCurrent={1} total={product.length} pageSizeOptions={[2,3,5,10]} onChange={change}/>    
      </div>
  )
}

export default Test