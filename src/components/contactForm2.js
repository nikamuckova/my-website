import React from "react"
import { Form, Input, Button } from "antd"
import styles from "./mystyle.module.css"

export default () => (
  <div className={styles.formBorder} style={{ width: "100%" }}>
    <form layout="vertical" name="contact" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <Form.Item label="Name">
        <input name="name" />
      </Form.Item>
      <Form.Item label="Email">
        <input name="email" />
      </Form.Item>
      <Form.Item label="Message">
        <textarea placeholder="Write the message" name="message" />
      </Form.Item>
      <Form.Item>
        <button type="submit" name="button" className={styles.formButton}>
          SEND MESSAGE
        </button>
      </Form.Item>
    </form>
  </div>
)
