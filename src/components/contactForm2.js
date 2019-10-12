import React from "react"
import { Form, Input, Button } from "antd"
import styles from "./mystyle.module.css"

export default () => (
  <div className={styles.formBorder} style={{ width: "100%" }}>
    <Form layout="vertical" name="contact" method="POST" data-netlify="true">
      <Form.Item label="Name" name="name">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Message" name="message">
        <Input.TextArea placeholder="Write the message" />
      </Form.Item>
      <Form.Item>
        <button type="submit" className={styles.formButton}>
          SEND MESSAGE
        </button>
      </Form.Item>
    </Form>
  </div>
)
