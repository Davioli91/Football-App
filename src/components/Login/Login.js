import React from 'react'
import { Button, Modal, Input } from 'semantic-ui-react'

const LoginBtn = () => (
  
      <div style={{ marginLeft: "50%" }}>
      <Modal
    trigger={<Button primary>Sign up</Button>}
    header='You can here Sign up'
    content='Call Benjamin regarding the reports.'
    actions={['Cancel', { key: 'done', content: 'Sign up', positive: true }]}
    
  />
  <Modal
    trigger={<Button>Log-in</Button>}
    header='You can here Log-in'
    content='Call Benjamin regarding the reports.'
    actions={['Cancel', { key: 'done', content: 'Log-in', positive: true }]}
    
  />
      </div>
    
)

export default LoginBtn
