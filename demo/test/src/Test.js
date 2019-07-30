import React from 'react';
import { Form, Icon, Button } from 'antd';

const FormItem = Form.Item;

class Test extends React.Component {
  state = {
    arr: []
  }
  add = () => {
    this.setState({
      arr: [...this.state.arr, { text: `test_${new Date().getTime()}` }]
    })
  }
  del = (index) => {
    const _arr = this.state.arr.filter((item, i) => i !== index)
    this.setState({
      arr: _arr
    })
  }
  // handleChange () {

  // }

  render() {
    const { arr } = this.state
    const { getFieldDecorator, getFieldsValue } = this.props.form;

    console.log(getFieldsValue())

    return (
      <div>
        <div>
          {
            arr.map((item, index) => {
              return (
                <FormItem key={index}>
                  {
                    getFieldDecorator(`arr[${index}]`, {
                      validateTrigger: ['onChange', 'onBlur'],
                      rules: [{}],
                    })(
                      <div>
                        <span> {`test_${index}`}</span>
                        {/* <input type='text' /> */}
                      </div>
                    )
                  }
                  {
                    arr.length > 1 ? (
                      <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.del(index)}
                      />
                    ) : null
                  }
                </FormItem>
              )
            })
          }
        </div>
        <Button onClick={() => this.add()}>+</Button>
      </div>
    )
  }
}

export default Form.create({ name: 'form_test' })(Test);