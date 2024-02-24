import React from 'react'
import {Button,Form,Input} from 'antd';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
    <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
        <section className="left-section">
            <h1>Login to proceed</h1>
        </section>
        <section className='right-section'>
            <Form layout='vertical'>
            <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Name is required!" }]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  rules={[{ required: true, message: "Email is required!" }]}
                ></Input>
              </Form.Item>
              
              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                ></Input>
              </Form.Item>
    

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                New User? <Link to="/register">Register Now</Link>
              </p>
            </div>

        </section>
        </main>
    </header>
    </>
  )
}

export default Login
