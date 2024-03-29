import React from "react"
import { Form, Input } from "antd"
import styles from "./mystyle.module.css"

export default () => (
  <div className={styles.formBorder} style={{ width: "100%" }}>
    <form name="contact" method="post" data-netlify="true" action="/thanks">
      <input type="hidden" name="form-name" value="contact" />
      <Form.Item label="Vaše meno">
        <Input size="large" name="name" required />
      </Form.Item>
      <Form.Item label="Email">
        <Input size="large" name="email" type="email" required />
      </Form.Item>
      <Form.Item label="Správa">
        <Input.TextArea placeholder="Napíšte Vašu správu" name="message" />
      </Form.Item>
      <Form.Item>
        <button type="submit" name="button" className={styles.formButton}>
          ODOSLAŤ
        </button>
      </Form.Item>
    </form>
  </div>
)
