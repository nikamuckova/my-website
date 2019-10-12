import React from "react"
import { Form, Input, Button } from "antd"
import styles from "./mystyle.module.css"

export default () => (
  <div className={styles.formBorder} style={{ width: "100%" }}>
    <Form layout="vertical" name="contact" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <Form.Item label="Name">
        <Input size="large" name="name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input size="large" name="email" />
      </Form.Item>
      <Form.Item label="Message">
        <Input.TextArea placeholder="Write the message" name="message" />
      </Form.Item>
      <Form.Item>
        <button type="submit" name="button" className={styles.formButton}>
          SEND MESSAGE
        </button>
      </Form.Item>
    </Form>
  </div>
)
