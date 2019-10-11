import React from "react"
import { Form, Input, Button } from "antd"
import styles from "./mystyle.module.css"

export default () => (
  <div className={styles.formBorder} style={{ width: "100%" }}>
    <Form
      layout="vertical"
      action="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <Form.Item label="Name">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Email">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Message">
        <Input.TextArea placeholder="Write the message" />
      </Form.Item>
      <Form.Item label="myfile">
        <input type="file" placeholder="Upload file" />
      </Form.Item>
      <Form.Item>
        <div data-netlify-recaptcha="true"></div>
      </Form.Item>
      <Form.Item>
        <Button
          size="large"
          className={styles.formButton}
          style={{ color: "white" }}
        >
          SEND MESSAGE
        </Button>
      </Form.Item>
    </Form>
  </div>
)
